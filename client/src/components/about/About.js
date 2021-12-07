import styles from './About.module.css';

const About = () => {
    return (
        <section className={styles['container-about']}>
            <h1 className={styles['container-about-title']}>What's the purpose of relify?</h1>
            <p className={styles['container-about-subtitle']}>The COVID pandemic enabled people to take a break from the stressful world, but it also increased the number of anxious people considerably.</p>
            <p className={styles['container-about-subtitle']}>Consequently, seeking attention and social interaction became an ordeal due to strict government policies.</p>
            <p className={styles['container-about-subtitle']}>Such strict measures seriously affected a great many people who did not have past mental health problems.</p>
            <p className={styles['container-about-subtitle']}>To solve this problem, we came up with relify! Escape from the real world and embrace relify.</p>
            <p className={styles['container-about-subtitle']}>Fact: 1 in 3 Have Neurological, Psychiatric Problems Post-COVID.</p>
            <p className={styles['container-about-subtitle']}>Quit any medicaments! Use relify.</p>
        </section>
    );
}

export default About;