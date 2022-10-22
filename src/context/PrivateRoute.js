import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../lib/useAuth';
import Preloader from '../components/Preloader';


const PrivateRoute = ({ children}) => {
    const { isLoading ,user} = useAuth();

    if (isLoading) {
        return <Preloader />
    }

    return  user?.email ? children : <Navigate to="/login" />;
}

export default PrivateRoute;