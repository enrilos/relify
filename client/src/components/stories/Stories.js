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

    return (
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
    )
}

export default Stories;