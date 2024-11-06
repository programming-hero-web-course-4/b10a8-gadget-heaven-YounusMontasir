import React from 'react';
import { Helmet } from 'react-helmet-async';
import Banner from '../components/Banner';
import Gadgets from '../components/Gadgets';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home | Gadget Heaven</title>
                <meta name="description" content="Explore our selection of the latest gadgets and accessories at Gadget Heaven." />
            </Helmet>
            <Banner></Banner>
            <Gadgets></Gadgets>
        </div>
    );
};

export default Home;