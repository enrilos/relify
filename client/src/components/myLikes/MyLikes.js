import { useEffect, useState } from 'react';
import storyService from '../../services/storyService';
import StoryCard from '../storyCard/StoryCard';
import authApi from '../../utils/authApi';
import styles from './MyLikes.module.css';

const MyLikes = () => {
    const [likes, setLikes] = useState(0);
    const [stories, setStories] = useState([]);

    useEffect(() => {
        storyService.getUserLikedStoriesCount(authApi.getUserId()).then(x => setLikes(x));
    }, []);

    useEffect(() => {
        (async () => {
            const storyIds = await storyService.getUserLikedStoriesIds(authApi.getUserId());
            const stories = await storyService.getUserLikedStories(Object.values(storyIds).map(x => `"${x.storyId}"`));
            setStories(stories);
        })();
    }, [])

    // TODO: add "No likes yet" when user has 0 stories.
    // TODO: loading bar?
    return (
        <section className={styles['container-my-likes']}>
            {
                stories.length === 0
                    ?
                    <h1 className={styles['container-likes-title']}>No liked stories yet.</h1>
                    :
                    <h1 className={styles['container-likes-title']}>Liked stories: {likes}</h1>
            }
            <section className={styles['container-likes']}>
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

export default MyLikes;