import styles from './StoryCard.module.css';

const StoryCard = ({
    title,
    content,
    author
}) => {
    return (
        <article className={styles['container-story']}>
            <p>Title: {title}</p>
            <p>Content: {content}</p>
            <p>Author: {author}</p>
            <p>Like</p>
            <p>Add to Favourites</p>
        </article>
    );
}

export default StoryCard;