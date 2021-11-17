import { useEffect, useState } from 'react';
import storyService from '../../services/storyService';

import HomeStoryCard from '../homeStoryCard/HomeStoryCard';
import '../../styles/style.css';

const Home = () => {
    const [stories, setStories] = useState([]);

    useEffect(() => {
        storyService.getLatestThree().then(x => setStories(x));
    }, []);

    return (
        <section className="container-home-intro">
            <h1>Escape reality.</h1>
            <h1>Dive into the mysterious world.</h1>
            <p>Latest stories</p>
            <section className="container-stories-home">
                {stories.map(x =>
                    <HomeStoryCard
                        key={x._id}
                        id={x._id}
                        title={x.title}
                    />
                )}
            </section>
        </section>
    );
}

export default Home;