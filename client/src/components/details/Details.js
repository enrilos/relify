import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import storyService from '../../services/storyService';
import authApi from '../../utils/authApi';

import Guest from './guest/Guest';
import User from './user/User';
import Owner from './owner/Owner';

import styles from './Details.module.css';

const Details = () => {

    let { storyId } = useParams();

    const [story, setStory] = useState({});
    const [storyLikes, setStoryLikes] = useState(0);
    const [hasLiked, setHasLiked] = useState(0);

    useEffect(() => {
        storyService.get(storyId).then(x => setStory(x));
        storyService.getStoryLikes(storyId).then(x => setStoryLikes(x));
    }, []);

    useEffect(() => {
        // This is a redundant request when user is owner.
        storyService.hasUserLikedStory(storyId, authApi.getUserId()).then(x => setHasLiked(x));
    }, [false]);

    return (
        <section className={styles['container-story-details']}>
            <h1 className={styles['container-story-details-title']}>{story.title}</h1>
            <h2 className={styles['container-story-details-published']}>Published on {new Date(story._createdOn).toLocaleDateString("ru-RU")}</h2>
            <h2 className={styles['container-story-details-content']}>{story.content}</h2>
            {
                authApi.getUserId() === story._ownerId
                    ?
                    <Owner
                        storyId={storyId}
                        storyLikes={storyLikes}
                    />
                    :
                    authApi.isLoggedIn()
                        ?
                        <User
                            storyLikes={storyLikes}
                            setStoryLikes={setStoryLikes}
                            hasLiked={hasLiked}
                            setHasLiked={setHasLiked}
                            storyId={storyId}
                        />
                        :
                        <Guest storyLikes={storyLikes} />
            }
        </section>
    );
}

export default Details;