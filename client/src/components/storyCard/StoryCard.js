import styles from './StoryCard.module.css';

const StoryCard = ({
    title,
    description,
    author
}) => {
    return (
        <article className={styles['container-story']}>
            <p>Title: {title}</p>
            <p>Description: {description}</p>
            <p>Author: {author}</p>
            <p>Like</p>
            <p>Add to Favourites</p>
        </article>
    );
}

export default StoryCard;