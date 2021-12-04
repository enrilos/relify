import { AuthContext } from "../contexts/AuthContext";
import { Navigate } from "react-router";
import { useContext } from "react";

export const isAuth = (Component) => {

    const WrapperComponent = (props) => {
        // Context wrapps the component (for instance, CreateStory.js can consume context since it's wrapped with it inside App.js.)
        // Consequently, this context consumption should work.
        const { email } = useContext(AuthContext);

        return Boolean(email) ? <Component {...props} /> : <Navigate to='/login' />
    }

    return WrapperComponent;
};