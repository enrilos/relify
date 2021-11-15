import { useEffect, useState } from 'react';
import storyService from '../../services/storyService';

import StoryCard from '../storyCard/StoryCard';
import '../../styles/style.css';

const Stories = () => {
    const [stories, setStories] = useState([]);

    useEffect(() => {
        (async () => {
            // TODO: getLatestThree or getAll depending on intro page or Stories catalogue.
            const response = await storyService.getAll();
            setStories(response);
        })();
    }, []);

    return (
        <article>
            <section className="container-intro">
                <h1>Latest stories</h1>
            </section>
            <section className="container-stories">
                {stories.map(x =>
                    <StoryCard
                        key={x._id}
                        title={x.title}
                        content={x.content}
                    />
                )}
            </section>
        </article>
    )
}

export default Stories;