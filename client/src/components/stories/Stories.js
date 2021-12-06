import { useEffect, useState } from 'react';
import storyService from '../../services/storyService';
import StoryCard from '../storyCard/StoryCard';
import styles from './Stories.module.css';

const Stories = () => {
    const [stories, setStories] = useState([]);

    useEffect(() => {
        (async () => {
            // This could be optimized for performance, since only story title, content and id is needed when listing.
            const stories = await storyService.getAll().catch(err => console.error(err));
            setStories(stories);
        })();
    }, []);

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
            storyService.getByTitle(title).then(x => setStories(x)).catch(err => console.error(err));
        } else {
            // This, however, makes a redundant request on every manually inserted white space.
            storyService.getAll().then(x => setStories(x)).catch(err => console.error(err));
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
                        <h1 className={styles['container-header-stories-title']}>Stories</h1>
                }
                <input type="text" name="title" placeholder="Search..." onKeyUp={searchChange} />
            </section>
            <section className={styles['container-stories']}>
                {
                    stories.map(x =>
                        <StoryCard
                            key={x._id}
                            id={x._id}
                            title={x.title}
                            content={x.content}
                            ownerEmail={x.ownerEmail}
                        />
                    )
                }
            </section>
        </section>
    )
}

export default Stories;