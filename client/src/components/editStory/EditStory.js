import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import storyService from '../../services/storyService';
import styles from './EditStory.module.css';

const EditStory = () => {

    let navigate = useNavigate();
    let { storyId } = useParams();

    const [story, setStory] = useState({});
    const [isTitleValid, setIsTitleValid] = useState(true);
    const [isContentValid, setIsContentValid] = useState(true);

    useEffect(() => {
        storyService.get(storyId).then(x => setStory(x));
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

        const { title, content } = e.target;

        if (!title.value || !content.value) {
            window.alert("All fields are required.");
            return;
        }

        const story = {
            title: title.value,
            content: content.value
        };

        await storyService.edit(storyId, story);
        navigate("/myStories");
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

export default EditStory;