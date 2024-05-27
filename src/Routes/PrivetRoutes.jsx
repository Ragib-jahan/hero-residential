import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";



const PrivetRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation();
    console.log(location)
    if(loading){
        return <div className="flex min-h-screen justify-center items-center"><span className=" loading loading-infinity loading-lg"></span></div>
    }
    if (user) {
        return children
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>


};

export default PrivetRoutes;