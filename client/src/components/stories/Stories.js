// import { useEffect, useState } from 'react';
import StoryCard from '../storyCard/StoryCard';
import styles from './Stories.module.css';

const Stories = () => {
    // const [stories, setStories] = useState([]);

    // useEffect(() => {
        // get data with custom storyService.js which in turn uses abstract fetch helper (jsonRequest.js)
    // }, []);

    return (
        <section className={styles['container-stories']}>
            <StoryCard
                key={1} // hardcoded for demo purposes
                title="First Title"
                content="Some first desc"
                author="Brandon"
            />
            <StoryCard
                key={2} // hardcoded for demo purposes
                title="Second Title http"
                content="Http vs Https secure tunnel"
                author="Ron"
            />
        </section>
    )
}

export default Stories;