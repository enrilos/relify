import { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from 'react-router-dom';
import authApi from '../../utils/authApi';
import styles from './AuthForm.module.css';

const AuthForm = ({
    formType,
    sendEmail
}) => {

    let navigate = useNavigate();

    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isPasswordValid, setIsPasswordValid] = useState(true);

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const onBlurEmail = (e) => {
        setIsEmailValid(validateEmail(e.target.value));
    }

    const onBlurPassword = (e) => {
        const value = e.target.value;
        if (value.length >= 3 && value.length <= 128) {
            setIsPasswordValid(true);
        } else {
            setIsPasswordValid(false);
        }
    }

    const submitHandler = (e) => {
        e.preventDefault();

        const { email, password } = e.target;

        if (isEmailValid && isPasswordValid) {
            const user = {
                email: email.value,
                password: password.value
            };

            if (formType.toLowerCase() === 'login') {
                authApi.login(user)
                    .then(x => sendEmail(x.email));
            } else if (formType.toLowerCase() === 'register') {
                authApi.register(user)
                    .then(x => sendEmail(x.email));
            }

            navigate("/");
        }
    };

    return (
        <form className={styles['container-standard-form']} onSubmit={submitHandler}>
            <fieldset>
                {/* TODO: Implement font awesome icons */}
                {/* TODO Implement active input box shadow */}
                <legend>{formType}</legend>
                <p className={styles['container-standard-form-input']}>
                    <label htmlFor="email">Email</label>
                    <input id="email" type="text" name="email" onBlur={onBlurEmail} />
                    {!isEmailValid ? <span className={styles['error-message']}>Email is not valid.</span> : null}
                </p>
                <p className={styles['container-standard-form-input']}>
                    <label htmlFor="password">Password</label>
                    <input id="password" type="password" name="password" onBlur={onBlurPassword} />
                    {!isPasswordValid ? <span className={styles['error-message']}>Password must be between 3 and 128 characters.</span> : null}
                </p>
                <input className={styles['container-standard-form-submit']} type="submit" value="Submit" />
                {
                    formType.toLowerCase() === 'login'
                        ?
                        <p className={styles['have-or-have-not-and-account-message']}>Don't have an accout yet? <Link to="/register">Sign up</Link></p>
                        :
                        <p className={styles['have-or-have-not-and-account-message']}>Already have an accout? <Link to="/login">Sign in</Link></p>
                }
            </fieldset>
        </form>
    );
}

export default AuthForm;