import { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from "../modal/Modal";
import commentService from '../../services/commentService';
import authApi from '../../utils/authApi';
import styles from './CommentCard.module.css';

const CommentCard = ({
    id,
    title,
    comment,
    ownerEmail,
    publishDate,
    updateComments,
    storyId
}) => {

    const [openModal, setOpenModal] = useState(false);

    const deleteHandler = async (e) => {
        await commentService.deleteComment(id).catch(err => console.error(err));
        const newComments = await commentService.getStoryComments(storyId).catch(err => console.error(err));
        updateComments(newComments);
    }

    const updateModal = (value) => {
        setOpenModal(value);
    }

    return (
        <article className={styles['container-comment-card']}>
            {
                ownerEmail === authApi.getEmail()
                    ?
                    <section className={styles['container-comment-card-owner']}>
                        <p className={styles['container-comment-card-owner-text']}>{ownerEmail}, {publishDate}</p>
                        <article>
                            {
                                openModal
                                    ?
                                    <Modal
                                        updateModal={updateModal}
                                        deleteHandler={deleteHandler}
                                    />
                                    :
                                    <>
                                        <Link to={`/editComment/${id}`} className={styles['edit-button']}>Edit</Link>
                                        <Link to="#" className={styles['delete-button']} onClick={() => setOpenModal(true)}>Delete</Link>
                                    </>
                            }
                        </article>
                    </section>
                    :
                    <p className={styles['container-comment-card-owner-text']}>{ownerEmail}, {publishDate}</p>
            }
            <p className={styles['container-comment-card-title']}>{title}</p>
            <p className={styles['container-comment-card-comment']}>{comment}</p>
        </article>
    );
}

export default CommentCard;