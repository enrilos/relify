import { Link } from 'react-router-dom'
import styles from './Header.module.css';
import '../../styles/typography.css';

const Header = () => {
    return (
        <header className={styles['container-header']}>
            <section className={styles['container-header-logo']}>
                <Link to="/" className="container-header-logo-text">relify</Link>
            </section>
            <ul>
                <li><Link to="/stories">Stories</Link></li>
                <li><Link to="/myStories">My Stories</Link></li>
                <li><Link to="/myLikes">My Likes</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
            <ul>
                <li><Link to="/login">Log in</Link></li>
                <li><Link to="/register">Register</Link></li>
                <li><Link to="#">Logout</Link></li>
            </ul>
        </header>
    )
}

export default Header;