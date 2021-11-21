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
    );
}

export default MyStories;