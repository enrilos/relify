import '../../styles/style.css';

const Login = () => {
    const submitHandler = (e) => {
        e.preventDefault();

        const { title, content } = e.target;
        console.log(title.value);
        console.log(content.value);
    }

    return (
        <section className="container-auth">
            <form className="container-auth-form" onSubmit={submitHandler}>
                <label htmlFor="title">Title</label>
                <input id="title" type="text" name="title" />
                <label htmlFor="content">Content</label>
                <input id="content" type="text" name="content" />
                <input className="container-auth-form-submit" type="submit" value="Submit" />
            </form>
        </section>
    );
}

export default Login;