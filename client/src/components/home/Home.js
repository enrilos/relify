import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import storyService from '../../services/storyService';

import StoryCard from '../storyCard/StoryCard';
import styles from './Home.module.css';

const Home = () => {
    const [stories, setStories] = useState([]);

    useEffect(() => {
        storyService.getLatestThree().then(x => setStories(x)).catch(err => console.log(err));
    }, []);

    return (
        <section className={styles['container-home-intro']}>
            <section className={styles['container-home-intro-title']}>
                <h1 className={styles['container-home-intro-title-text']}>Escape reality.</h1>
            </section>
            <section className={styles['container-home-intro-subtitle']}>
                <h1 className={styles['container-home-intro-subtitle-text']}>Share your mysterious <span className={styles['highlight-blue']}>stories</span> with other <span className={styles['highlight-green']}>individuals</span> <span className={styles['highlight-purple']}>conveniently</span>.</h1>
            </section>
            <section className={styles['container-home-intro-description']}>
                <p className={styles['container-home-intro-description-title']}>Why relify?</p>
                <p className={styles['container-home-intro-description-subtitle']}>During difficuly periods, such as pandemics, people tend to experience mental disorders.</p>
                <p className={styles['container-home-intro-description-subtitle']}>The relief app - relify comes to the rescue!</p>
                <p className={styles['container-home-intro-description-subtitle']}>Explore the mythical and mysterious stories of others, post your own, share, comment, like, enjoy your time alone or with like-minded individuals and relax.</p>
            </section>
            <p className={styles['latest-stories']}>Latest stories</p>
            <section className={styles['container-stories-home']}>
                {
                    stories.length === 0
                        ?
                        <p className={styles['no-stories']}>No stories yet.</p>
                        :
                        <>
                            {stories.map(x =>
                                <StoryCard
                                    key={x._id}
                                    id={x._id}
                                    title={x.title}
                                    content={x.content}
                                    type="home"
                                />
                            )}
                            <Link to="/stories" className={styles['container-wrapper']}>
                                <div className={styles['wrapper']}>
                                    <svg width="18px" height="17px" viewBox="-1 0 18 17">
                                        <g>
                                            <polygon className={styles['arrow']} points="16.3746667 8.33860465 7.76133333 15.3067621 6.904 14.3175671 14.2906667 8.34246869 6.908 2.42790698 7.76 1.43613596"></polygon>
                                            <polygon className={styles['arrow-fixed']} points="16.3746667 8.33860465 7.76133333 15.3067621 6.904 14.3175671 14.2906667 8.34246869 6.908 2.42790698 7.76 1.43613596"></polygon>
                                            <path d="M-4.58892184e-16,0.56157424 L-4.58892184e-16,16.1929159 L9.708,8.33860465 L-1.64313008e-15,0.56157424 L-4.58892184e-16,0.56157424 Z M1.33333333,3.30246869 L7.62533333,8.34246869 L1.33333333,13.4327013 L1.33333333,3.30246869 L1.33333333,3.30246869 Z"></path>
                                        </g>
                                    </svg>
                                </div>
                            </Link>
                        </>
                }
            </section>
        </section>
    );
}

export default Home;