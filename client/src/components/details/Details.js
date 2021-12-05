import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import storyService from '../../services/storyService';
import authApi from '../../utils/authApi';

import Guest from './guest/Guest';
import User from './user/User';
import Owner from './owner/Owner';

import styles from './Details.module.css';
import CommentCard from '../commentCard/CommentCard';

const Details = () => {

    let { storyId } = useParams();

    const [story, setStory] = useState({});
    const [storyLikes, setStoryLikes] = useState(0);
    const [hasLiked, setHasLiked] = useState(0);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        storyService.get(storyId).then(x => setStory(x)).catch(err => console.error(err));
        storyService.getStoryLikes(storyId).then(x => setStoryLikes(x)).catch(err => console.error(err));
        storyService.getStoryComments(storyId).then(x => setComments(x)).catch(err => console.error(err));
    }, []);

    useEffect(() => {
        // This is a redundant request when user is owner.
        storyService.hasUserLikedStory(storyId, authApi.getUserId()).then(x => setHasLiked(x)).catch(err => console.error(err));
    }, [false]);

    const updateLikes = (value) => {
        setStoryLikes(value);
    }

    const updateHasLiked = (value) => {
        setHasLiked(value);
    }

    const updateComments = (value) => {
        setComments(value);
    }

    return (
        <section className={styles['container-story-details']}>
            <h1 className={styles['container-story-details-title']}>{story.title}</h1>
            <h2 className={styles['container-story-details-published']}>Published on {new Date(story._createdOn).toLocaleDateString("ru-RU")}<br />by {story.ownerEmail}</h2>
            <h2 className={styles['container-story-details-content']}>{story.content}</h2>
            <p className={styles['total-likes']}>{storyLikes === 0 ? 'No likes yet.' : `${storyLikes} ${storyLikes === 1 ? 'like' : 'likes'}`}</p>
            {
                authApi.getUserId() === story._ownerId
                    ?
                    <Owner storyId={storyId} />
                    :
                    authApi.isLoggedIn()
                        ?
                        <User
                            updateLikes={updateLikes}
                            hasLiked={hasLiked}
                            updateHasLiked={updateHasLiked}
                            updateComments={updateComments}
                            storyId={storyId}
                        />
                        :
                        <Guest />
            }
            {
                comments.length === 0
                    ?
                    <h1 className={styles['container-header-comments-title']}>No comments yet.</h1>
                    :
                    <section className={styles['container-comments']}>
                        <hr className={styles['likes-comments-line-separator']} />
                        <h1 className={styles['container-header-comments-title']}>Comments</h1>
                        {
                            comments.map(x =>
                                <CommentCard
                                    key={x._id}
                                    title={x.title}
                                    comment={x.comment}
                                    ownerEmail={x.ownerEmail}
                                    publishDate={new Date(x._createdOn).toLocaleDateString("ru-RU")}
                                // Edit/Delete comment (by comment owner), set so it can rerender afterward
                                // updateComments={updateComments}
                                />
                            )
                        }
                    </section>
            }
        </section>
    );
}

export default Details;