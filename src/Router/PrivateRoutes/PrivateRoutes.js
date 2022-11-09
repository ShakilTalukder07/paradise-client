import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import DotLoader from 'react-spinners/DotLoader';
import { AuthContext } from '../../context/AuthProvider';

const PrivateRoutes = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <DotLoader color={'#47E0C4'} loading={loading} ></DotLoader>
    }

    if (user) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace ></Navigate>

};

export default PrivateRoutes;