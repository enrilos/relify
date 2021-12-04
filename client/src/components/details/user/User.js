import { useState } from 'react';
import { Link } from 'react-router-dom';
import storyService from "../../../services/storyService";
import authApi from '../../../utils/authApi';
import styles from './User.module.css';

const User = ({
    storyLikes,
    updateLikes,
    hasLiked,
    updateHasLiked,
    updateComments,
    storyId
}) => {

    const [isTitleValid, setIsTitleValid] = useState(false);
    const [isCommentValid, setIsCommentValid] = useState(false);

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

        if (isTitleValid && isCommentValid) {

            const { title, comment } = e.target;

            const body = {
                storyId,
                title: title.value.trim(),
                comment: comment.value.trim(),
                ownerEmail: authApi.getEmail()
            }

            e.target.reset();

            await storyService.commentStory(body).catch(err => console.error(err));
            const newComments = await storyService.getStoryComments(storyId).catch(err => console.error(err));
            console.log(newComments);
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
            <p className={styles['total-likes']}>{storyLikes === 0 ? 'No likes yet.' : `${storyLikes} ${storyLikes === 1 ? 'like' : 'likes'}`}</p>

            <form className={styles['container-standard-form']} onSubmit={commentHandler}>
                <h1>Add Comment</h1>
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