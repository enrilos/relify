import { useNavigate } from 'react-router-dom';
import authApi from '../../utils/authApi';
import '../../styles/style.css';

const Login = () => {
    let navigate = useNavigate();

    const submitHandler = async (e) => {
        // Dynamic input validator with Formik?
        e.preventDefault();

        const { email, password } = e.target;

        const user = {
            email: email.value,
            password: password.value
        };

        await authApi.login(user);
        navigate("/");
    }

    return (
        <section className="container-auth">
            <form className="container-auth-form" onSubmit={submitHandler}>
                <fieldset>
                    {/* TODO: Implement font awesome icons */}
                    <legend>Login</legend>
                    <p>
                        <label htmlFor="email">Email</label>
                        <input id="email" type="text" name="email" />
                    </p>
                    <p>
                        <label htmlFor="password">Password</label>
                        <input id="password" type="password" name="password" />
                    </p>
                    <input className="container-auth-form-submit" type="submit" value="Submit" />
                </fieldset>
            </form>
        </section>
    );
}

export default Login;