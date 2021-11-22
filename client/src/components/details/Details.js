import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import storyService from '../../services/storyService';
import authApi from '../../utils/authApi';
import styles from './Details.module.css';

const Details = () => {

    let navigate = useNavigate();
    let { storyId } = useParams();

    const [story, setStory] = useState({});

    useEffect(() => {
        storyService.get(storyId).then(x => setStory(x));
    }, []);

    const OwnerTemplate = () => {

        const deleteHandler = (e) => {
            const askConfirm = window.confirm('Delete this record?');

            if (askConfirm) {
                storyService.deleteStory(storyId).then(x => navigate("/stories"));
            }
        }

        return (
            <section className={styles['container-story-details-content']}>
                <p>You own this record.</p>
                <section className={styles['container-story-details-action-buttons']}>
                    <Link to={"/edit/" + story._id}>Edit</Link>
                    <Link to="#" onClick={deleteHandler}>Delete</Link>
                </section>
            </section>
        );
    }

    const GuestOrUserTemplate = () => {
        return (
            <section className={styles['container-story-details-content']}>
                <p>You DO NOT own this record.</p>
                {
                    authApi.isLoggedIn()
                        ?
                        <section className={styles['container-story-details-action-buttons']}>
                            {/*TODO: Use Like and Favourite emojis. */}
                            <Link to="#">Like</Link>
                            <Link to="#">Favourite</Link>
                        </section>
                        :
                        null
                }
            </section>
        );
    }

    return (
        <section className={styles['container-story-details']}>
            <h1 className={styles['container-story-details-title']}>{story.title}</h1>
            <h2 className={styles['container-story-details-subtitle']}>{story.content}</h2>
            <h2 className={styles['container-story-details-subtitle']}>{story._createdOn}</h2>
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