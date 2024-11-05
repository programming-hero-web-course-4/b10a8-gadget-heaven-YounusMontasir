import React, { useContext, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { productContext } from '../Context/GadgetContext';
import Carts from '../components/Carts';
import Wishlists from '../components/Wishlists';


const Dashboard = () => {
    const {carts, wishlists} = useContext(productContext)
    const [isToggle, setIsToggle] = useState(true)
    const handleToggle = value => {
        setIsToggle(value)
    }

    return (
       <div>
         <div className='w-full  mx-auto bg-[#9538E2] pt-12 pb-12'>
        <h1 className='text-white text-[32px] font-bold text-center w-full mx-auto'>Dashboard </h1>
        <p className='text-white text-center w-full lg:w-6/12 mx-auto my-6'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
        <div className='flex justify-center gap-6'>
            <button onClick={() => handleToggle(true)} className={`btn rounded-full text-[18px] font-semibold px-8 ${isToggle ? 'bg-white text-[#9538E2] ' : 'bg-[#9538E2] text-white border-2 border-white'}`}>Cart</button>
            <button onClick={() => handleToggle(false)} className={`btn rounded-full text-[18px] font-semibold px-7 ${isToggle ? 'bg-[#9538E2] text-white border-2 border-white' : 'bg-white text-[#9538E2]'}`}>Wishlist</button>
        </div>
          
        </div>
        {isToggle== true ? <Carts></Carts> : <Wishlists></Wishlists>}
       </div>
    );
};

export default Dashboard;