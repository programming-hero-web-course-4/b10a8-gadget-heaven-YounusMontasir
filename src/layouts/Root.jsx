import React, { createContext } from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import GadgetContext from '../Context/GadgetContext';
import { HelmetProvider } from 'react-helmet-async';

const Root = () => {
    return (
        <GadgetContext>
            <HelmetProvider>

            <div className=' flex flex-col min-h-screen'>
            <div className=' flex-grow'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
         </div>
         </HelmetProvider>
        </GadgetContext>
    );
};

export default Root;