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
         <div className='w-full  mx-auto bg-[#9538E2] pt-12 '>
        <h1 className='text-white text-[56px] font-bold text-center w-full lg:w-9/12 mx-auto'>Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
        <p className='text-white text-center w-full lg:w-6/12 mx-auto my-6'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
        <div className='flex justify-center'>
            <button onClick={() => handleToggle(true)} className={`btn ${isToggle ? 'bg-black' : 'bg-green'}`}>Cart</button>
            <button onClick={() => handleToggle(false)} className={`btn ${isToggle ? 'bg-green' : 'bg-black'}`}>Wishlist</button>
        </div>
          
        </div>
        {isToggle== true ? <Carts></Carts> : <Wishlists></Wishlists>}
       </div>
    );
};

export default Dashboard;