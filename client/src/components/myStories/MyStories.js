import { useEffect, useState } from "react";
import StoryCard from '../storyCard/StoryCard.js';
import storyService from "../../services/storyService";
import authApi from "../../utils/authApi.js";
import styles from './MyStories.module.css';

const MyStories = () => {
    const [stories, setStories] = useState([]);

    useEffect(() => {
        storyService.getUserStories(authApi.getUserId()).then(x => setStories(x));
    }, [])

    // TODO: add "No stories yet" when user has 0 stories.
    // TODO: loading bar?
    return (
        <section className={styles['container-my-stories']}>
            <h1 className={styles['container-stories-title']}>My Stories</h1>
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

export default MyStories;