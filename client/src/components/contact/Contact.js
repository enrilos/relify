import styles from './Contact.module.css';

const Contact = () => {
    return (
        <section className={styles['container-contact']}>
            <h1 className={styles['container-contact-title']}>How can I reach out to you?</h1>
            <p className={styles['container-contact-subtitle']}>You can email us at <a href="mailto:relify@office.com">relify@office.com</a></p>
            <p className={styles['container-contact-subtitle']}>Call us at +359 123 456 789</p>
            <p className={styles['container-contact-subtitle']}>Our office is located in Sofia, Bulgaria - Litex Tower, 1st floor</p>
            <p className={styles['container-contact-subtitle']}>P.O. BOX: 1337</p>
            <p className={styles['container-contact-subtitle']}>Workweek: 9:00 - 19:30</p>
            <p className={styles['container-contact-subtitle']}>Weekend: 10:00 - 17:00</p>
        </section>
    );
}

export default Contact;