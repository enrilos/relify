import { NavLink } from 'react-router-dom'
import styles from './Header.module.css';

const Header = ({
    email
}) => {
    const setActiveRegular = ({isActive}) =>  isActive ? styles['active-link'] : styles['menu-regular-btn'];
    const setActiveAuth = ({isActive}) =>  isActive ? styles['active-link'] : styles['menu-auth-btn'];

    const UserTemplate = () => {
        return (
            <>
                <ul className={styles['menu-regular']}>
                    <li><NavLink to="/stories" className={setActiveRegular}>Stories</NavLink></li>
                    <li><NavLink to="/create" className={setActiveRegular}>Post Story</NavLink></li>
                    <li><NavLink to="/myStories" className={setActiveRegular}>My Stories</NavLink></li>
                    <li><NavLink to="/myLikes" className={setActiveRegular}>My Likes</NavLink></li>
                    {/* <li><NavLink to="/myFavourites" className={setActiveRegular}>My Favourites</NavLink></li> */}
                    <li><NavLink to="/about" className={setActiveRegular}>About</NavLink></li>
                    <li><NavLink to="/contact" className={setActiveRegular}>Contact</NavLink></li>
                </ul>
                <ul className={styles['menu-auth']}>
                    <li><NavLink to="/logout" className={setActiveAuth}>Logout</NavLink></li>
                </ul>
            </>
        );
    }

    const GuestTemplate = () => {
        return (
            <>
                <ul className={styles['menu-regular']}>
                    <li><NavLink to="/stories" className={setActiveRegular}>Stories</NavLink></li>
                    <li><NavLink to="/about" className={setActiveRegular}>About</NavLink></li>
                    <li><NavLink to="/contact" className={setActiveRegular}>Contact</NavLink></li>
                </ul>
                <ul className={styles['menu-auth']}>
                    <li><NavLink to="/login" className={setActiveAuth}>Login</NavLink></li>
                    <li><NavLink to="/register" className={setActiveAuth}>Register</NavLink></li>
                </ul>
            </>
        );
    }

    return (
        <header className={styles['container-header']}>
            <section>
                <NavLink to="/" className={styles['container-header-logo-text']}>relify</NavLink>
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