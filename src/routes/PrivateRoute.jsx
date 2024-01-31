import React, { useContext } from 'react';
import { AuthContext } from '../components/Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,isLoading} = useContext(AuthContext);
    const routeLocation = useLocation();
    console.log(routeLocation);
     //  check whether is therse any user Or not
     if(isLoading){
         
        return <h2>No data</h2>;
    };
    if(!user){

       return <Navigate to="/logIn" state={{ from: routeLocation.pathname }} replace></Navigate>

    }

    return children;
};

export default PrivateRoute;