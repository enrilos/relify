import { Link } from 'react-router-dom';
import storyService from "../../../services/storyService";
import styles from './User.module.css';

const User = ({
    storyLikes,
    setStoryLikes,
    hasLiked,
    setHasLiked,
    storyId
}) => {

    const likeHandler = async (e) => {

        const body = {
            storyId
        };

        await storyService.likeStory(body).catch(err => console.error(err));
        const newTotalLikes = await storyService.getStoryLikes(storyId).catch(err => console.error(err));
        setStoryLikes(newTotalLikes);
        setHasLiked(1);
    };

    return (
        <section>
            {
                hasLiked === 0
                    ?
                    <section className={styles['container-story-details-non-owner-action-buttons']}>
                        <Link to="#" onClick={likeHandler} className={styles['container-story-details-non-owner-action-like']}>Like</Link>
                    </section>
                    :
                    null
            }
            <p className={styles['total-likes']}>{storyLikes === 0 ? 'No likes yet.' : `${storyLikes} ${storyLikes === 1 ? 'like' : 'likes'}`}</p>
        </section>
    );
}

export default User;