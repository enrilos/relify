import { Link } from 'react-router-dom';
import FontAwesomeIcon from 'react-fontawesome';
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

        await storyService.likeStory(body);
        const newTotalLikes = await storyService.getStoryLikes(storyId);
        setStoryLikes(newTotalLikes);
        setHasLiked(1);
    };

    return (
        <section>
            {
                hasLiked === 0
                    ?
                    <section className={styles['container-story-details-non-owner-action-buttons']}>
                        {/*TODO: Use Like and Favourite icons. */}
                        <Link to="#" onClick={likeHandler} className={styles['container-story-details-non-owner-action-like']}>Like</Link>
                        {/* <Link to="#" className={styles['container-story-details-non-owner-action-favourite']}>Favourite</Link> */}
                    </section>
                    :
                    null
            }
            {/* <p className={styles['total-likes']}>Likes: {storyLikes}</p> */}
            <p className={styles['total-likes']}>{storyLikes === 0 ? 'No likes yet.' : `${storyLikes} ${storyLikes === 1 ? 'like' : 'likes'}`}</p>
        </section>
    );
}

export default User;