import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import storyService from '../../services/storyService';
import authApi from '../../utils/authApi';
import { isAuth } from '../../hoc/isAuth';
import styles from './CreateStory.module.css';

const CreateStory = () => {
    let navigate = useNavigate();

    const [isTitleValid, setIsTitleValid] = useState(true);
    const [isContentValid, setIsContentValid] = useState(true);

    const onBlueTitle = (e) => {
        const value = e.target.value.trim();

        if (value.length >= 3 && value.length <= 32) {
            setIsTitleValid(true);
        } else {
            setIsTitleValid(false);
        }
    }

    const onBlurContent = (e) => {
        const value = e.target.value.trim();

        if (value.length >= 3 && value.length <= 2048) {
            setIsContentValid(true);
        } else {
            setIsContentValid(false);
        }
    }

    const submitHandler = async (e) => {
        e.preventDefault();

        const { title, content } = e.target;

        const trimmedTitle = title.value.trim();
        const trimmedContent = content.value.trim();

        if (trimmedTitle.length < 3 || trimmedTitle.length > 32) {
            setIsTitleValid(false);

            if (trimmedContent.length < 3 || trimmedContent.length > 2048) {
                setIsContentValid(false);
            }
            
            return;
        }


        if (isTitleValid && isContentValid) {

            const story = {
                title: trimmedTitle,
                content: trimmedContent,
                ownerEmail: authApi.getEmail()
            };

            await storyService.create(story).catch(err => console.error(err));
            navigate("/");
        }
    }

    return (
        <form className={styles['container-standard-form']} onSubmit={submitHandler}>
            <fieldset>
                <legend>Post Story</legend>
                <p>
                    <label htmlFor="title">Title</label>
                    <input id="title" type="text" name="title" onBlur={onBlueTitle} />
                    {!isTitleValid ? <span className={styles['error-message']}>Title must be between 3 and 32 characters.</span> : null}
                </p>
                <p>
                    <label htmlFor="content">Content</label>
                    <textarea className={styles['container-standard-form-content']} id="content" type="text" name="content" onBlur={onBlurContent}></textarea>
                    {!isContentValid ? <span className={styles['error-message']}>Content must be between 3 and 2048 characters.</span> : null}
                </p>
                <input className={styles['container-standard-form-submit']} type="submit" value="Submit" />
            </fieldset>
        </form>
    );
}

export default isAuth(CreateStory);