import { Link } from 'react-router-dom';
import styles from './StoryCard.module.css';

const StoryCard = ({
    id,
    title,
    content,
    type
}) => {
    return (
        <Link to={"/details/" + id} className={type === 'home' ? styles['container-home-story-wrapper'] : styles['container-stories-story-wrapper']}>
            <article className={styles['container-story-card']}>
                <h1 className={styles['container-story-card-title']}>{title}</h1>
                <p className={styles['container-story-card-content']}>{content}</p>
            </article>
        </Link>
    );
}

export default StoryCard;