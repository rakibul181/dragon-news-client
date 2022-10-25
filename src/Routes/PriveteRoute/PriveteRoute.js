import React, { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../UserContext/UserContext';

const PriveteRoute = ({ children }) => {
    const { user ,loading} = useContext(AuthContext)
    const location = useLocation()
    if(loading){
        return <Spinner animation="border" />
    }
    if (!user?.uid) {

        return <Navigate to='../login' state={{from:location}} replace></Navigate>
    }
    return children

};

export default PriveteRoute;