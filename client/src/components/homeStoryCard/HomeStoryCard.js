import { Link } from 'react-router-dom';
import styles from './HomeStoryCard.module.css';

const HomeStoryCard = ({
    id,
    title,
    content
}) => {
    return (
        <Link className={styles['container-story-wrapper']} to={"/details/" + id}>
            <article className={styles['container-story-home']}>
                <h1 className={styles['container-story-home-title']}>{title}</h1>
                <p className={styles['container-story-home-content']}>{content}</p>
                {/* The below link will lead to a details page where the user can like/favourite/comment */}
                {/* <Link to={"/details/" + id}>Read full</Link> */}
            </article>
        </Link>
    );
}

export default HomeStoryCard;