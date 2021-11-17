import { useEffect } from "react";
import { Navigate } from "react-router";
import authApi from "../../utils/authApi";

// With react-router v6, I was not able to use render() in the Route. (removed most likely)
// Consequently, since the new v6 accepts only direct components to the element={} property, a new component Logout must be coded and provided to it.
// At least, that works for now.
const Logout = () => {
    useEffect(() => {
        (async () => {
            await authApi.logout();
        })();
    }, null);

    return (
        <Navigate to="/" />
    );
}

export default Logout;