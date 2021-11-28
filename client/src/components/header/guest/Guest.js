import { NavLink } from 'react-router-dom';
import styles from '../Header.module.css';

const Guest = ({
    setActiveRegular,
    setActiveAuth
}) => {
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

export default Guest;