import styles from './CommentCard.module.css';

const CommentCard = ({
    title,
    comment,
    ownerEmail,
    publishDate
}) => {
    return (
        <article className={styles['container-comment-card']}>
            <p className={styles['container-comment-card-owner']}>{ownerEmail}, {publishDate}</p>
            <p className={styles['container-comment-card-title']}>{title}</p>
            <p className={styles['container-comment-card-comment']}>{comment}</p>
        </article>
    );
}

export default CommentCard;