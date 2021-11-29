import { useEffect, useState } from 'react';
import storyService from '../../services/storyService';
import StoryCard from '../storyCard/StoryCard';
import authApi from '../../utils/authApi';
import styles from './MyLikes.module.css';

const MyLikes = () => {
    const [likesCount, setLikesCount] = useState(0);
    const [likedStories, setLikedStories] = useState([]);

    useEffect(() => {
        storyService.getUserLikedStoriesCount(authApi.getUserId()).then(x => setLikesCount(x));
    }, []);

    useEffect(() => {
        (async () => {
            const storyIds = await storyService.getUserLikedStoriesIds(authApi.getUserId());
            const likedStories = await storyService.getUserLikedStories(Object.values(storyIds).map(x => `"${x.storyId}"`));
            setLikedStories(likedStories);
        })();
    }, [])

    // TODO: loading bar?
    return (
        <section>
            {
                likedStories.length === 0
                    ?
                    <h1 className={styles['container-likes-title']}>No liked stories yet.</h1>
                    :
                    <h1 className={styles['container-likes-title']}>Liked stories: {likesCount}</h1>
            }
            <section className={styles['container-likes']}>
                {likedStories.map(x =>
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