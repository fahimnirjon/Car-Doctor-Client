import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <span className="loading loading-infinity loading-lg"></span>
    }

    if(user?.email){
        return children;
    }

    return <Navigate state={{from: location}} to='/login' replace></Navigate>;
};

export default PrivateRoute;