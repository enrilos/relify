import { useEffect, useState } from 'react';
import storyService from '../../services/storyService';

import StoryCard from '../storyCard/StoryCard';
import '../../styles/style.css';

const Stories = ({ getLatest }) => {
    const [stories, setStories] = useState([]);

    useEffect(() => {
        (async () => {
            // An interesting bug appears.
            // When going back and forth with between '/' and '/stories', it does not render the new records (all or latest).
            // Instead, another route must be accessed (like login) in order to refresh and get the new records.
            const stories = getLatest ? await storyService.getLatestThree() : await storyService.getAll();
            setStories(stories);
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