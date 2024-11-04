import React, { useContext } from 'react';
import { productContext } from '../Context/GadgetContext';
import Cart from './Cart';
import { GrSort } from "react-icons/gr";

const Carts = () => {
    const {carts} = useContext(productContext)
    console.log(carts);
    
    return (
        <div className='w-10/12 mt-12 mx-auto'>
             <div className='flex justify-between items-center'>
                <p>Cart</p>
                <div className='flex gap-6 items-center mb-8'>
                    <p>Total Cost</p>
                    <button className='btn'>Sort by Price <GrSort /></button>
                    <button className='btn'>Purchase</button>
                </div>
            </div>
            {
                carts.map(cart => <Cart key={cart.product_id} cart={cart}></Cart>)
            }
        </div>
    );
};

export default Carts;