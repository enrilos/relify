// import { useEffect, useState } from 'react';
import styles from './Stories.module.css';

const Stories = () => {
    // const [stories, setStories] = useState([]);

    // useEffect(() => {

    // }, []);

    return (
        <section className={styles['container-stories']}>
            <article>
                <p>Some cool story here.</p>
                <p>This is the description</p>
                <p>Author...</p>
                <p>Like</p>
                <p>Add to Favourites</p>
            </article>
            <article>
                <p>Second story.</p>
                <p>Unicorns</p>
                <p>Author name...</p>
                <p>Like</p>
                <p>Add to Favourites</p>
            </article>
        </section>
    )
}

export default Stories;