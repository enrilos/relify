import { useState } from 'react';
import { Link } from 'react-router-dom';
import storyService from "../../../services/storyService";
import commentService from '../../../services/commentService';
import authApi from '../../../utils/authApi';
import styles from './User.module.css';

const User = ({
    updateLikes,
    hasLiked,
    updateHasLiked,
    updateComments,
    storyId
}) => {

    const [isTitleValid, setIsTitleValid] = useState(true);
    const [isCommentValid, setIsCommentValid] = useState(true);

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

        if (value.length >= 3 && value.length <= 1024) {
            setIsCommentValid(true);
        } else {
            setIsCommentValid(false);
        }
    }

    const likeHandler = async (e) => {

        const body = {
            storyId
        };

        await storyService.likeStory(body).catch(err => console.error(err));
        const newTotalLikes = await storyService.getStoryLikes(storyId).catch(err => console.error(err));
        updateLikes(newTotalLikes);
        updateHasLiked(1);
    };

    const commentHandler = async (e) => {
        e.preventDefault();

        const { title, comment } = e.target;

        const trimmedTitle = title.value.trim();
        const trimmedComment = comment.value.trim();

        if (trimmedTitle.length < 3 || trimmedTitle.length > 32) {
            setIsTitleValid(false);
            
            if (trimmedComment.length < 3 || trimmedComment.length > 1024) {
                setIsCommentValid(false);
            }
            
            return;
        }

        if (isTitleValid && isCommentValid) {

            const body = {
                storyId,
                title: trimmedTitle,
                comment: trimmedComment,
                ownerEmail: authApi.getEmail()
            }

            e.target.reset();

            await commentService.create(body).catch(err => console.error(err));
            const newComments = await commentService.getStoryComments(storyId).catch(err => console.error(err));
            updateComments(newComments);
        }
    };

    return (
        <section>
            {
                hasLiked === 0
                    ?
                    <section className={styles['container-story-details-non-owner-action-buttons']}>
                        <Link to="#" onClick={likeHandler} className={styles['container-story-details-non-owner-action-like']}>Like</Link>
                    </section>
                    :
                    null
            }
            <hr className={styles['likes-comments-line-separator']} />
            <form className={styles['container-standard-form']} onSubmit={commentHandler}>
                <h1>Post your comment</h1>
                <fieldset>
                    <p>
                        <label htmlFor="title">Title</label>
                        <input id="title" type="text" name="title" placeholder="Title..." onBlur={onBlueTitle} />
                        {!isTitleValid ? <span className={styles['error-message']}>Title must be between 3 and 32 characters.</span> : null}
                    </p>
                    <p>
                        <label htmlFor="comment">Comment</label>
                        <textarea className={styles['container-standard-form-comment']} id="comment" type="text" name="comment" placeholder="Comment..." onBlur={onBlurComment}></textarea>
                        {!isCommentValid ? <span className={styles['error-message']}>Comment must be between 3 and 1024 characters.</span> : null}
                    </p>
                    <input className={styles['container-standard-form-submit']} type="submit" value="Submit" />
                </fieldset>

            </form>

        </section>
    );
}

export default User;