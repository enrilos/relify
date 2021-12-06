import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import commentService from '../../services/commentService';
import styles from './EditComment.module.css';

const EditComment = () => {

    let navigate = useNavigate();
    let { commentId } = useParams();

    const [comment, setComment] = useState({});
    const [isTitleValid, setIsTitleValid] = useState(true);
    const [isCommentValid, setIsCommentValid] = useState(true);

    useEffect(() => {
        commentService.get(commentId).then(x => setComment(x)).catch(err => console.error(err));
    }, []);

    const onBlueTitle = (e) => {
        const value = e.target.value.trim();

        if (value.length >= 3 && value.length <= 32) {
            setIsTitleValid(true);
        } else {
            setIsTitleValid(false);
        }
    }

    const onBlurComment = (e) => {
        const value = e.target.value.trim();

        if (value.length >= 3 && value.length <= 2048) {
            setIsCommentValid(true);
        } else {
            setIsCommentValid(false);
        }
    }

    const submitHandler = async (e) => {
        e.preventDefault();

        const { title, commentInput } = e.target;

        const trimmedTitle = title.value.trim();
        const trimmedCommentInput = commentInput.value.trim();

        if (trimmedTitle.length < 3 || trimmedTitle.length > 32) {
            setIsTitleValid(false);

            if (trimmedCommentInput.length < 3 || trimmedCommentInput.length > 1024) {
                setIsCommentValid(false);
            }

            return;
        }

        if (isTitleValid && isCommentValid) {

            const body = {
                storyId: comment.storyId,
                title: trimmedTitle,
                comment: trimmedCommentInput,
                ownerEmail: comment.ownerEmail
            }

            await commentService.edit(commentId, body).catch(err => console.error(err));
            navigate(`/details/${comment.storyId}`);
        }
    }

    return (
        <form className={styles['container-standard-form']} onSubmit={submitHandler}>
            <fieldset>
                <legend>Edit Comment</legend>
                <p>
                    <label htmlFor="title">Title</label>
                    <input id="title" type="text" name="title" placeholder="Title..." defaultValue={comment.title} onBlur={onBlueTitle} />
                    {!isTitleValid ? <span className={styles['error-message']}>Title must be between 3 and 32 characters.</span> : null}
                </p>
                <p>
                    <label htmlFor="commentInput">Comment</label>
                    <textarea className={styles['container-standard-form-comment']} id="commentInput" type="text" name="commentInput" placeholder="Comment..." defaultValue={comment.comment} onBlur={onBlurComment}></textarea>
                    {!isCommentValid ? <span className={styles['error-message']}>Comment must be between 3 and 1024 characters.</span> : null}
                </p>
                <input className={styles['container-standard-form-submit']} type="submit" value="Submit" />
            </fieldset>
        </form>
    );
}

export default EditComment;