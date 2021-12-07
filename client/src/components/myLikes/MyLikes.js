import { useEffect, useState } from 'react';
import storyService from '../../services/storyService';
import likeService from '../../services/likeService';
import StoryCard from '../storyCard/StoryCard';
import authApi from '../../utils/authApi';
import { isAuth } from '../../hoc/isAuth';
import styles from './MyLikes.module.css';

const MyLikes = () => {
    const [likesCount, setLikesCount] = useState(0);
    const [likedStories, setLikedStories] = useState([]);

    useEffect(() => {
        // This could be optimized for performance, since only story title, content and id are needed when listing.
        likeService.getUserLikedStoriesCount(authApi.getUserId()).then(x => setLikesCount(x)).catch(err => console.error(err));
    }, []);

    useEffect(() => {
        (async () => {
            const storyIds = await likeService.getUserLikedStoriesIds(authApi.getUserId()).catch(err => console.error(err));
            const likedStories = await storyService.getStoriesByIds(Object.values(storyIds).map(x => `"${x.storyId}"`)).catch(err => console.error(err));
            setLikedStories(likedStories);
        })();
    }, [])

    // TODO: Infinite scroller?
    return (
        <section>
            {
                likedStories.length === 0
                    ?
                    <h1 className={styles['container-likes-title']}>No liked stories.</h1>
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

export default isAuth(MyLikes);