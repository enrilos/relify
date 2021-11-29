import { useEffect, useState } from 'react';
import storyService from '../../services/storyService';
import StoryCard from '../storyCard/StoryCard';
import styles from './Stories.module.css';

const Stories = () => {
    const [stories, setStories] = useState([]);

    useEffect(() => {
        (async () => {
            const stories = await storyService.getAll();
            setStories(stories);
        })();
    }, []);

    function debounce(func, timeout = 250) {
        let timer;
        return (e) => {
            clearTimeout(timer);
            timer = setTimeout(() => { func.call(this, e); }, timeout);
        }
    }

    const onSearchHandler = (e) => {
        const title = e.target.value.trim();

        if (title) {
            storyService.getByTitle(title).then(x => setStories(x));
        } else {
            // This, however, makes a redundant request on every manually inserted white space.
            storyService.getAll().then(x => setStories(x));
        }
    }

    const searchChange = debounce((e) => onSearchHandler(e));

    return (
        <section>
            <section className={styles['container-header-stories']}>
                {
                    stories.length === 0
                        ?
                        <h1 className={styles['container-header-stories-title']}>No stories.</h1>
                        :
                        <h1 className={styles['container-header-stories-title']}>Stories</h1>
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
    )
}

export default Stories;