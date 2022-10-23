import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { apiContext } from '../Context/ApiContext';

const NeedLogin = ({children}) => {
    const {user,loading} = useContext(apiContext);
    const location = useLocation();
    if(loading){
        return <p>loading</p>
    }
    if(!user){
        console.log('no user');
        return <Navigate to='/login' state={{from: location}} replace ></Navigate>
    } 
    return children
};

export default NeedLogin;