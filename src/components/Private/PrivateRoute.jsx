import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    if(loading){
        return <span className="loading loading-infinity loading-lg"></span>
    }
    if(user){
       return children
    }
    return <Navigate to="/log"></Navigate>
};

export default PrivateRoute;