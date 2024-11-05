import React from 'react';
import { MdDeleteForever } from "react-icons/md";

const Wishlist = ({wishlist}) => {
    const {product_id, product_title, product_image, category, price, description, Specification, availability, rating} = wishlist
    return (
        <div className='p-8 bg-gray-100 rounded-2xl mb-6 flex justify-between items-center'>
        <div className='flex gap-8 items-center'>
           <img className='w-[200px] h-[124px] object-cover' src={product_image} alt="" />
           <div>
               <h3  className='text-2xl font-semibold'>{product_title}</h3>
               <p className='text-[#09080F99] text-[18px] py-4'>{description}</p>
               <p className='text-[#09080FCC] text-xl font-semibold'>{price}</p>
           </div>
       </div>
       <button className=''><MdDeleteForever className='h-5 w-5'/></button>
      </div>
    );
};

export default Wishlist;