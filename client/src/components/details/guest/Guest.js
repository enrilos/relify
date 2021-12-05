import styles from './Guest.module.css';
import { Link } from 'react-router-dom';

const Guest = () => {
    return (
        <section>
            <section className={styles['container-story-details-guest-login']}>
                <p>Like this story? <Link to="/login">Sign in</Link> and add it to your likes.</p>
            </section>
            {/* <p className={styles['total-likes']}>Likes: {storyLikes}</p> */}
        </section>
    );
}

export default Guest;