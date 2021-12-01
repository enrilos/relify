import styles from './Contact.module.css';

const Contact = () => {
    return (
        <section className={styles['container-contact']}>
            <article className={styles['container-contact-description']}>
                <h1 className={styles['container-contact-description-title']}>How can I reach out to you?</h1>
                <p className={styles['container-contact-description-subtitle']}>You can email us at <a href="mailto:relify@office.com">relify@office.com</a></p>
                <p className={styles['container-contact-description-subtitle']}>Our office is located in Sofia, Bulgaria - Litex Tower, 1st floor</p>
                <p className={styles['container-contact-description-subtitle']}>+359 123 456 789</p>
                <p className={styles['container-contact-description-subtitle']}>PK: 1337</p>
                <p className={styles['container-contact-description-subtitle']}>Workweek: 9:00 - 19:30</p>
                <p className={styles['container-contact-description-subtitle']}>Weekend: 10:00 - 17:00</p>
            </article>
        </section>
    );
}

export default Contact;