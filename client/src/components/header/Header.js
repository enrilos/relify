import { NavLink } from 'react-router-dom'
import User from './user/User';
import Guest from './guest/Guest';
import styles from './Header.module.css';

const Header = ({
    email
}) => {

    const setActiveRegular = ({ isActive }) => isActive ? styles['active-link'] : styles['menu-regular-btn'];
    const setActiveAuth = ({ isActive }) => isActive ? styles['active-link'] : styles['menu-auth-btn'];

    return (
        <header className={styles['container-header']}>
            <section>
                <NavLink to="/" className={styles['container-header-logo-text']}>relify</NavLink>
            </section>
            {
                Boolean(email)
                    ?
                    <User
                        setActiveRegular={setActiveRegular}
                        setActiveAuth={setActiveAuth}
                    />
                    :
                    <Guest
                        setActiveRegular={setActiveRegular}
                        setActiveAuth={setActiveAuth}
                    />
            }
        </header>
    )
}

export default Header;