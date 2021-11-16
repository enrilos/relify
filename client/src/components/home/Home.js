import { useEffect, useState } from 'react';
import storyService from '../../services/storyService';

import StoryCard from '../storyCard/StoryCard';
import '../../styles/style.css';

const Home = () => {
    const [stories, setStories] = useState([]);

    useEffect(() => {
        storyService.getLatestThree().then(x => setStories(x));
    }, []);

    return (
        // {/* Add latest 3 here? */}
        <section className="container-home-intro">
            <h1>Escape reality.</h1>
            <h1>Dive into the mysterious world.</h1>
            <h1>Latest stories</h1>
            <section className="container-stories">
                {stories.map(x =>
                    <StoryCard
                        key={x._id}
                        title={x.title}
                        content={x.content}
                    />
                )}
            </section>
        </section>
    );
}

export default Home;