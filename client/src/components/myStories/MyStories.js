import { useEffect, useState } from "react";
import authApi from "../../utils/authApi.js";
import StoryCard from '../storyCard/StoryCard.js';
import storyService from "../../services/storyService";
import styles from './MyStories.module.css';

const MyStories = () => {
    const [stories, setStories] = useState([]);

    useEffect(() => {
        storyService.getUserStories(authApi.getUserId()).then(x => setStories(x)).catch(err => console.error(err));
    }, [])

    return (
        <section>
            {
                stories.length === 0
                    ?
                    <h1 className={styles['container-stories-title']}>No stories.</h1>
                    :
                    <h1 className={styles['container-stories-title']}>My Stories</h1>
            }
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