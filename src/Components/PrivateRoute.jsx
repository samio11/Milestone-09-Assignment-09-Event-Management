import React, { useContext } from 'react';
import { passData } from './AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user} = useContext(passData)
    if(user){
        return children
    }
    return <Navigate to={'/login'}></Navigate>
};

export default PrivateRoute;