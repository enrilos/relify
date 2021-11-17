import { useEffect, useState } from 'react';
import storyService from '../../services/storyService';

import StoryCard from '../storyCard/StoryCard';
import '../../styles/style.css';

const Stories = () => {
    const [stories, setStories] = useState([]);

    useEffect(() => {
        (async () => {
            const stories = await storyService.getAll();
            setStories(stories);
        })();
    }, []);

    return (
        <section className="container-stories">
            {stories.map(x =>
                <StoryCard
                    key={x._id}
                    title={x.title}
                    content={x.content}
                />
            )}
        </section>
    )
}

export default Stories;