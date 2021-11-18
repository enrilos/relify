import { useNavigate } from 'react-router-dom';
import storyService from '../../services/storyService';
import '../../styles/style.css';

const CreateStory = () => {
    let navigate = useNavigate();

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

        await storyService.create(story);
        navigate("/");
    }

    return (
        <form className="container-standard-form" onSubmit={submitHandler}>
            <fieldset>
                <legend>Create Story</legend>
                <p>
                    <label htmlFor="title">Title</label>
                    <input id="title" type="text" name="title" />
                </p>
                <p>
                    <label htmlFor="content">Content</label>
                    <textarea className="container-standard-form-content" id="content" type="text" name="content"></textarea>
                </p>
                <input className="container-standard-form-submit" type="submit" value="Submit" />
            </fieldset>
        </form>
    );
}

export default CreateStory;