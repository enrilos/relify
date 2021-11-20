import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import storyService from '../../services/storyService';
import authApi from '../../utils/authApi';

const Details = () => {

    let { storyId } = useParams();

    const [story, setStory] = useState({});

    useEffect(() => {
        storyService.get(storyId).then(x => setStory(x));
    }, []);

    return (
        <section>
            <h1>{story.title}</h1>
            <h2>{story.content}</h2>
            {
            authApi.getUserId() === story._ownerId
            ?
            <p>You own this record.</p>
            :
            <p>You are not the owner of this record.</p>
            }
        </section>
    );
}

export default Details;