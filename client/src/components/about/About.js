import styles from './About.module.css';

const About = () => {
    {/*
        The covid pandemic enabled people to take a break, but also isolated them into depressed human beings.
        Something that will sway away the user from the real world, from reality. (sticking to sci-fi and mysteries as much as possible)
        The COVID-19 pandemic seriously affected a great many people who did not have past mental health problems.
        This app solves your anxiety problem. Escape from the real world and embrace relify"
        Fact: 1 in 3 Have Neurological, Psychiatric Problems Post-COVID
        Quit any medicaments! This is your solution.
    */}
    {/*
        Have you been feeling anxious lately?
        During difficult periods, such as pandemics, a great many people, who have not had previous health issues, tend to experience mental disorders, sometimes severe ones that could lead to numerous long-term problems.
        Bearing this is mind, relify comes to the rescue by providing an adequate solution to that ubiquitous problem.
        Rather than publishing stories that are associated with reality, relify adheres to science fiction or theoretical information.
        Explore the mythical and mysterious stories of others, post your own, share, comment, like, enjoy your time alone or with like-minded individuals and relax.
    */}
    return (
        <section className={styles['container-about']}>
            <h1 className={styles['container-about-title']}>What's relify?</h1>
            <p className={styles['container-about-subtitle']}>As noted in the introduction, relify</p>
        </section>
    );
}

export default About;