import { useEffect, useState } from 'react';
import storyService from '../../services/storyService';

import StoryCard from '../storyCard/StoryCard';
import styles from './Stories.module.css';

const Stories = () => {
    const [stories, setStories] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await storyService.getAll();
            setStories(response);
        })();
    }, []);

    return (
        <article>
            <section className={styles['container-intro']}>
                <h1>Latest stories</h1>
            </section>
            <section className={styles['container-stories']}>
                {stories.map(x =>
                    <StoryCard
                        key={x.id}
                        title={x.title}
                        content={x.content}
                        author={x.author}
                    />
                )}
            </section>
        </article>
    )
}

export default Stories;