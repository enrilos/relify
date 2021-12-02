import styles from './CommentCard.module.css';

const CommentCard = ({
    title,
    comment,
    ownerEmail
}) => {
    return (
        <article className={styles['container-comment-card']}>
            <h1>{title}</h1>
            <h1>{comment}</h1>
            <h1>posted by {ownerEmail}</h1>
        </article>
    );
}

export default CommentCard;