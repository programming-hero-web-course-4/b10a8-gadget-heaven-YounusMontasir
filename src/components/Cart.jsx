import React, { useContext } from 'react';
import { MdDeleteForever } from "react-icons/md";
import { productContext } from '../Context/GadgetContext';

const Cart = ({cart}) => {
    const {handleDeleteCart} = useContext(productContext)
    const {product_id, product_title, product_image, category, price, description, Specification, availability, rating} = cart
    return (
       <div className='p-8 bg-gray-100 rounded-2xl mb-6 flex justify-between items-center'>
         <div className='flex gap-8 items-center'>
            <img className='w-[200px] h-[124px] object-cover' src={product_image} alt="" />
            <div>
                <h3 className='text-2xl font-semibold'>{product_title}</h3>
                <p className='text-[#09080F99] text-[18px] py-4'>{description}</p>
                <p className='text-[#09080FCC] text-xl font-semibold'>Price: ${price}</p>
            </div>
        </div>
        <button onClick={() => handleDeleteCart(product_id)}><MdDeleteForever className='h-5 w-5' /></button>
       </div>
    );
};

export default Cart;