import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import storyService from '../../services/storyService';
import authApi from '../../utils/authApi';
import styles from './Details.module.css';

const Details = () => {

    let { storyId } = useParams();

    const [story, setStory] = useState({});

    useEffect(() => {
        storyService.get(storyId).then(x => setStory(x));
    }, []);

    const OwnerTemplate = () => {
        return (
            <section className={styles['container-story-details-content']}>
                <p>You own this record.</p>
                <section className={styles['container-story-details-action-buttons']}>
                    <Link to={"/edit/" + story._id}>Edit</Link>
                    <Link to={"/delete/" + story._id}>Delete</Link>
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