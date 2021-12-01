import { useContext, useEffect } from "react";
import { Navigate } from "react-router";
import { AuthContext } from "../../contexts/AuthContext";
import authApi from "../../utils/authApi";

// With react-router v6, directly passing render() was not possible in the Route. (removed most likely)
// Consequently, since the new v6 accepts only direct components to the element={} property, a new component Logout must be coded and provided to it.
// At least, that works for now.
const Logout = () => {

    const authenticate = useContext(AuthContext);

    useEffect(() => {
        authApi.logout()
            .then(x => authenticate(''))
            .catch(err => console.error(err));
    }, []);

    return (
        <Navigate to="/" />
    );
}

export default Logout;