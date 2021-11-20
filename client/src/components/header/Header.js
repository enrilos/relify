import { Link } from 'react-router-dom'
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles['container-header']}>
            <section className={styles['container-header-logo']}>
                <Link to="/" className={styles['container-header-logo-text']}>relify</Link>
            </section>
            <ul>
                <li><Link to="/stories">Stories</Link></li>
                <li><Link to="/myStories">My Stories</Link></li>
                <li><Link to="/create">Add Story</Link></li>
                <li><Link to="/myLikes">My Likes</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
            <ul>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li>
                <li><Link to="/logout">Logout</Link></li>
            </ul>
        </header>
    )
}

export default Header;