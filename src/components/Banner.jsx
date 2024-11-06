import React from 'react';
import { useNavigate } from 'react-router-dom';
import bannerImg from "./../assets/assets/banner.jpg"

const Banner = () => {
    const navigateToDashBoard = useNavigate();
    const handleShopNow = () =>{
        navigateToDashBoard("/dashboard")
    }
    return (
        <div className='w-full lg:w-11/12 mx-auto bg-[#9538E2] pt-12 pb-56 relative mb-52 lg:mb-[480px]'>
            <h1 className='text-white text-4xl lg:text-[56px] font-bold text-center w-full lg:w-9/12 mx-auto leading-[60px]'>Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
            <p className='text-white text-center w-full lg:w-6/12 mx-auto my-6'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
           <div className='flex justify-center'>
           <button onClick={handleShopNow} className='btn text-[#9538E2] text-center rounded-3xl font-bold '>Shop Now</button>
           </div>
           <div className='absolute flex justify-center  lg:w-8/12 lg:h-[563px]  lg:left-60 border-2 border-white p-6 mt-12  rounded-3xl '>
           <img className=' w-full object-cover mb-20  rounded-3xl'  src={bannerImg} alt="" />
           </div>
        </div>
    );
};

export default Banner;