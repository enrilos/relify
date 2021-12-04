import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import storyService from '../../services/storyService';
import authApi from '../../utils/authApi';
import { isAuth } from '../../hoc/isAuth';
import styles from './EditStory.module.css';

const EditStory = () => {

    let navigate = useNavigate();
    let { storyId } = useParams();

    const [story, setStory] = useState({});
    const [isTitleValid, setIsTitleValid] = useState(true);
    const [isContentValid, setIsContentValid] = useState(true);

    useEffect(() => {
        storyService.get(storyId).then(x => setStory(x)).catch(err => console.error(err));
    }, []);

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

        if (isTitleValid && isContentValid) {

            const { title, content } = e.target;

            const story = {
                title: title.value.trim(),
                content: content.value.trim(),
                ownerEmail: authApi.getEmail()
            };

            await storyService.edit(storyId, story).catch(err => console.error(err));
            navigate("/myStories");
        }
    }

    return (
        <form className={styles['container-standard-form']} onSubmit={submitHandler}>
            <fieldset>
                <legend>Edit Story</legend>
                <p>
                    <label htmlFor="title">Title</label>
                    <input id="title" type="text" name="title" defaultValue={story.title} onBlur={onBlueTitle} />
                    {!isTitleValid ? <span className={styles['error-message']}>Title must be between 3 and 32 characters.</span> : null}
                </p>
                <p>
                    <label htmlFor="content">Content</label>
                    <textarea className={styles['container-standard-form-content']} id="content" type="text" name="content" defaultValue={story.content} onBlur={onBlurContent}></textarea>
                    {!isContentValid ? <span className={styles['error-message']}>Content must be between 3 and 2048 characters.</span> : null}
                </p>
                <input className={styles['container-standard-form-submit']} type="submit" value="Submit" />
            </fieldset>
        </form>
    );
}

export default isAuth(EditStory);