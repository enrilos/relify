import { NavLink } from 'react-router-dom';
import styles from '../Header.module.css';

const User = ({
    setActiveRegular,
    setActiveAuth
}) => {
    return (
        <>
            <ul className={styles['menu-regular']}>
                <li><NavLink to="/stories" className={setActiveRegular}>Stories</NavLink></li>
                <li><NavLink to="/create" className={setActiveRegular}>Post Story</NavLink></li>
                <li><NavLink to="/myStories" className={setActiveRegular}>My Stories</NavLink></li>
                <li><NavLink to="/myLikes" className={setActiveRegular}>My Likes</NavLink></li>
                <li><NavLink to="/about" className={setActiveRegular}>About</NavLink></li>
                <li><NavLink to="/contact" className={setActiveRegular}>Contact</NavLink></li>
            </ul>
            <ul className={styles['menu-auth']}>
                <li><NavLink to="/logout" className={setActiveAuth}>Logout</NavLink></li>
            </ul>
        </>
    );
}

export default User;