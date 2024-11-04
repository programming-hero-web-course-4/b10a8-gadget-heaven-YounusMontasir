import React, { createContext } from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import GadgetContext from '../Context/GadgetContext';

const Root = () => {
    return (
        <GadgetContext>
            <div className=' flex flex-col min-h-screen'>
            <div className='mx-auto flex-grow'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
         </div>
        </GadgetContext>
    );
};

export default Root;