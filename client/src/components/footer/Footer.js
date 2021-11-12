import styles from './Footer.module.css'

const Footer = () => {
    return (
        <footer className={styles['container-footer']}>
            <p>&copy; relify is a property of <a href="https://github.com/enrilos">github/enrilos</a>. All rights reserved.</p>
        </footer>
    )
}

export default Footer;