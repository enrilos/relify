import styles from './NotFoundPage.module.css';

const NotFoundPage = () => {
    return (
        <section className={styles['container-not-found']}>
            <article>
                <h1>Oops!</h1>
                <h1>404 - This page could not be found.</h1>
            </article>
            <img src="https://i.imgur.com/eQAmokN.jpg" alt="not-found-image" />
        </section>
    );
}

export default NotFoundPage;