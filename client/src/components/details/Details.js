import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import storyService from '../../services/storyService';
import authApi from '../../utils/authApi';
import styles from './Details.module.css';

const Details = () => {

    let navigate = useNavigate();
    let { storyId } = useParams();

    const [story, setStory] = useState({});
    const [storyLikes, setStoryLikes] = useState(0);
    const [hasLiked, setHasLiked] = useState(0);

    useEffect(() => {
        storyService.get(storyId).then(x => setStory(x));
        storyService.getStoryLikes(storyId).then(x => setStoryLikes(x));
    }, []);

    useEffect(() => {
        storyService.hasUserLikedStory(storyId, authApi.getUserId()).then(x => setHasLiked(x));
    }, [false]);

    const OwnerTemplate = () => {

        const deleteHandler = (e) => {
            const askConfirm = window.confirm('Delete this record?');

            if (askConfirm) {
                storyService.deleteStory(storyId).then(x => navigate("/stories"));
            }
        }

        return (
            <section>
                <p>You own this record.</p>
                <section className={styles['container-story-details-owner-buttons']}>
                    <Link to={"/edit/" + story._id} className={styles['container-story-details-action-edit']}>Edit</Link>
                    <Link to="#" onClick={deleteHandler} className={styles['container-story-details-action-delete']}>Delete</Link>
                </section>
                <p id="total-likes">Likes: {storyLikes}</p>
            </section>
        );
    }

    const GuestOrUserTemplate = () => {

        const likeHandler = async (e) => {

            const body = {
                storyId
            };

            await storyService.likeStory(body);
            const newTotalLikes = await storyService.getStoryLikes(storyId);
            setStoryLikes(newTotalLikes);
            setHasLiked(1);
        };

        return (
            <section>
                <p>You DO NOT own this record.</p>
                {
                    authApi.isLoggedIn() && hasLiked === 0
                        ?
                        <section className={styles['container-story-details-non-owner-action-buttons']}>
                            {/*TODO: Use Like and Favourite emojis. */}
                            <Link to="#" onClick={likeHandler} className={styles['container-story-details-non-owner-action-like']}>Like</Link>
                            {/* <Link to="#" className={styles['container-story-details-non-owner-action-favourite']}>Favourite</Link> */}
                        </section>
                        :
                        <section className={styles['container-story-details-guest-login']}>
                            {/* <p>Like this story? <Link to="/login">Sign in</Link> and add it to your likes.</p> */}
                        </section>
                }
                <p>Likes: {storyLikes}</p>
            </section>
        );
    }

    return (
        <section className={styles['container-story-details']}>
            <h1 className={styles['container-story-details-title']}>{story.title}</h1>
            <h2 className={styles['container-story-details-published']}>Published on {new Date(story._createdOn).toLocaleDateString("ru-RU")}</h2>
            <h2 className={styles['container-story-details-content']}>{story.content}</h2>
            {
                authApi.getUserId() === story._ownerId
                    ?
                    <OwnerTemplate />
                    :
                    <GuestOrUserTemplate />
            }
        </section>
    );
}

export default Details;