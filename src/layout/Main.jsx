import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import '../components/custom.css'

const Main = () => {
    return (
        <div className='relative '>
            <Header/>
            <Outlet/>
        </div>
    );
};

export default Main;