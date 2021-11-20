import { useNavigate } from 'react-router-dom';
import authApi from '../../utils/authApi';
import styles from './Register.module.css';

const Register = () => {
    let navigate = useNavigate();

    const submitHandler = async (e) => {
        // Dynamic input validator with Formik?
        e.preventDefault();

        const { email, password } = e.target;

        if (!email.value || !password.value) {
            window.alert('All fields are required.');
            return;
        }

        const user = {
            email: email.value,
            password: password.value
        };

        
        await authApi.register(user);
        navigate("/");
    }

    return (
        <form className={styles['container-standard-form']} onSubmit={submitHandler}>
            <fieldset>
                {/* TODO: Implement font awesome icons */}
                <legend>Register</legend>
                <p>
                    <label htmlFor="email">Email</label>
                    <input id="email" type="text" name="email" />
                </p>
                <p>
                    <label htmlFor="password">Password</label>
                    <input id="password" type="password" name="password" />
                </p>
                <input className={styles['container-standard-form-submit']} type="submit" value="Submit" />
            </fieldset>
        </form>
    );
}

export default Register;