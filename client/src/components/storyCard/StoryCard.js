import { Link } from 'react-router-dom';
import styles from './StoryCard.module.css';

const StoryCard = ({
    id,
    title,
    content
}) => {
    // Reuse code. combine HomeStoryCard with StoryCard.
    return (
        <article className={styles['container-story']}>
            <p>Title: {title}</p>
            <p>Content: {content}</p>
            <Link to={"/details/" + id}>Read</Link>
        </article>
    );
}

export default StoryCard;