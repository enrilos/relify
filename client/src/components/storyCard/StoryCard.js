import { Link } from 'react-router-dom';
import styles from './StoryCard.module.css';

const StoryCard = ({
    id,
    title,
    content
}) => {
    return (
        <article className={styles['container-story']}>
            <p>Title: {title}</p>
            <p>Content: {content}</p>
            {/* <p>Like</p>
            <p>Add to Favourites</p> */}
            {/* The below link will lead to a details page where the user can like/favourite/comment */}
            <Link to={"/details/" + id}>Read</Link>
        </article>
    );
}

export default StoryCard;