import styles from './Guest.module.css';
import { Link } from 'react-router-dom';

const Guest = ({
    storyLikes
}) => {
    return (
        <section>
            <section className={styles['container-story-details-guest-login']}>
                <p>Like this story? <Link to="/login">Sign in</Link> and add it to your likes.</p>
            </section>
            {/* <p className={styles['total-likes']}>Likes: {storyLikes}</p> */}
            <p className={styles['total-likes']}>{storyLikes === 0 ? 'No likes yet.' : `${storyLikes} ${storyLikes === 1 ? 'like' : 'likes'}`}</p>
        </section>
    );
}

export default Guest;