// import { useEffect, useState } from 'react';
import StoryCard from '../storyCard/StoryCard';
import styles from './Stories.module.css';

const Stories = () => {
    // const [stories, setStories] = useState([]);

    // useEffect(() => {

    // }, []);

    return (
        <section className={styles['container-stories']}>
            <StoryCard
                key={1} // hardcoded for demo purposes
                title="First Title"
                description="Some first desc"
                author="Brandon"
            />
            <StoryCard
                key={2} // hardcoded for demo purposes
                title="Second Title http"
                description="Http vs Https secure tunnel"
                author="Ron"
            />
        </section>
    )
}

export default Stories;