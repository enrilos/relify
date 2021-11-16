import { useNavigate } from 'react-router-dom';
import '../../styles/style.css';

const Login = () => {
    let navigate = useNavigate();

    const submitHandler = (e) => {
        // Dynamically validate input fields data.

        e.preventDefault();

        const { email, password } = e.target;

        // Redirect after successful submission.
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