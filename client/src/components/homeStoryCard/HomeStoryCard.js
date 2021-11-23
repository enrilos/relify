import { Link } from 'react-router-dom';
import styles from './HomeStoryCard.module.css';

const HomeStoryCard = ({
    id,
    title,
    content
}) => {
    {/* TODO: Make special home story cards.*/ }
    // Reuse code. combine HomeStoryCard with StoryCard.
    return (
        <Link className={styles['container-home-story-wrapper']} to={"/details/" + id}>
            <article className={styles['container-home-story-card']}>
                <h1 className={styles['container-home-story-card-title']}>{title}</h1>
                <p className={styles['container-home-story-card-content']}>{content}</p>
                {/* The below link will lead to a details page where the user can like/favourite/comment */}
                {/* <Link to={"/details/" + id}>Read full</Link> */}
            </article>
        </Link>
    );
}

export default HomeStoryCard;