import { Link } from 'react-router-dom';
import { useNavigate } from "react-router";
import storyService from "../../../services/storyService";
import styles from './Owner.module.css';

const Owner = ({
    storyId,
    storyLikes
}) => {

    let navigate = useNavigate();

    const deleteHandler = (e) => {
        // Directly calling window from here is bad practice.
        const askConfirm = window.confirm('Delete this record?');

        if (askConfirm) {
            storyService.deleteStory(storyId).then(x => navigate("/myStories")).catch(err => console.error(err));
        }
    }

    return (
        <section>
            <section className={styles['container-story-details-owner-buttons']}>
                <Link to={"/edit/" + storyId} className={styles['container-story-details-action-edit']}>Edit</Link>
                <Link to="#" onClick={deleteHandler} className={styles['container-story-details-action-delete']}>Delete</Link>
            </section>
            {/* <p className={styles['total-likes']}>Likes: {storyLikes}</p> */}
            <p className={styles['total-likes']}>{storyLikes === 0 ? 'No likes yet.' : `${storyLikes} ${storyLikes === 1 ? 'like' : 'likes'}`}</p>
        </section>
    );
}

export default Owner;