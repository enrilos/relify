import { Link } from 'react-router-dom'
import styles from './Header.module.css';

const Header = ({
    email
}) => {

    const UserTemplate = () => {
        return (
            <>
                <ul className={styles['menu-regular']}>
                    <li><Link to="/stories">Stories</Link></li>
                    <li><Link to="/create">Post Story</Link></li>
                    <li><Link to="/myStories">My Stories</Link></li>
                    <li><Link to="/myLikes">My Likes</Link></li>
                    {/* <li><Link to="/myFavourites">My Favourites</Link></li> */}
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
                <ul className={styles['menu-auth']}>
                    <li><Link to="/logout">Logout</Link></li>
                </ul>
            </>
        );
    }

    const GuestTemplate = () => {
        return (
            <>
                <ul className={styles['menu-regular']}>
                    <li><Link to="/stories">Stories</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
                <ul className={styles['menu-auth']}>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Register</Link></li>
                </ul>
            </>
        );
    }

    {/*TODO: Implement active btns */ }
    return (
        <header className={styles['container-header']}>
            <section className={styles['container-header-logo']}>
                <Link to="/" className={styles['container-header-logo-text']}>relify</Link>
            </section>
            {
                Boolean(email)
                    ?
                    <UserTemplate />
                    :
                    <GuestTemplate />
            }
        </header>
    )
}

export default Header;