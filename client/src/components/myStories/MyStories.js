import { useEffect, useState } from "react";
import authApi from "../../utils/authApi.js";
import StoryCard from '../storyCard/StoryCard.js';
import storyService from "../../services/storyService";
import { isAuth } from "../../hoc/isAuth.js";
import styles from './MyStories.module.css';

const MyStories = () => {
    const [stories, setStories] = useState([]);

    useEffect(() => {
        storyService.getUserStories(authApi.getUserId()).then(x => setStories(x)).catch(err => console.error(err));
    }, [])

    function debounce(func, timeout = 250) {
        let timer;
        return (e) => {
            clearTimeout(timer);
            timer = setTimeout(() => { func.call(null, e); }, timeout);
        }
    }

    const onSearchHandler = (e) => {
        const title = e.target.value.trim();

        if (title) {
            storyService.getUserStoriesByTitle(title, authApi.getUserId()).then(x => setStories(x)).catch(err => console.error(err));
        } else {
            // This, however, makes a redundant request on every manually inserted white space.
            storyService.getUserStories(authApi.getUserId()).then(x => setStories(x)).catch(err => console.error(err));
        }
    }

    const searchChange = debounce((e) => onSearchHandler(e));

    // TODO: Infinite scroller?
    return (
        <section>
            <section className={styles['container-header-stories']}>
                {
                    stories.length === 0
                        ?
                        <h1 className={styles['container-header-stories-title']}>No stories.</h1>
                        :
                        <h1 className={styles['container-header-stories-title']}>My Stories</h1>
                }
                <input type="text" name="title" placeholder="Search..." onKeyUp={searchChange} />
            </section>
            <section className={styles['container-stories']}>
                {stories.map(x =>
                    <StoryCard
                        key={x._id}
                        id={x._id}
                        title={x.title}
                        content={x.content}
                    />
                )}
            </section>
        </section>
    );
}

export default isAuth(MyStories);