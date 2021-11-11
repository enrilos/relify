import { Link } from 'react-router-dom'
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles['container-header']}>
            <Link to="/">relify</Link>
            <ul>
                <li><Link to="/posts">Posts</Link></li>
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