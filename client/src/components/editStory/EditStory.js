import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import storyService from '../../services/storyService';
import styles from './EditStory.module.css';

const EditStory = () => {

    let navigate = useNavigate();
    let { storyId } = useParams();

    const [story, setStory] = useState({});

    useEffect(() => {
        storyService.get(storyId).then(x => setStory(x));
    }, []);

    const submitHandler = async (e) => {
        e.preventDefault();
        console.log(storyId);

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
                    <input id="title" type="text" name="title" defaultValue={story.title} />
                </p>
                <p>
                    <label htmlFor="content">Content</label>
                    <textarea className={styles['container-standard-form-content']} id="content" type="text" name="content" defaultValue={story.content}></textarea>
                </p>
                <input className={styles['container-standard-form-submit']} type="submit" value="Submit" />
            </fieldset>
        </form>
    );
}

export default EditStory;