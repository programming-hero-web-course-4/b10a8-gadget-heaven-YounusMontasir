import React, { useContext } from 'react';
import { productContext } from '../Context/GadgetContext';
import Cart from './Cart';
import { GrSort } from "react-icons/gr";

const Carts = () => {
    const {carts,amount,handleSort} = useContext(productContext)
    console.log(carts);
    
    return (
        <div className='w-10/12 mt-12 mx-auto'>
             <div className='flex justify-between items-center'>
                <p>Cart</p>
                <div className='flex gap-6 items-center mb-8'>
                    <p>Total Cost: {amount}</p>
                    <button onClick={()=>handleSort(carts)} className={`rounded-full text-[18px] font-semibold ${carts.length > 0 ? ' btn text-[#9538E2]  font-semibold border-2 border-[#9538E2] rounded-full' : 'btn disabled'}`} disabled={carts.length ===0} >
                        Sort by Price <GrSort /></button>
                    <button className={`btn  border-2 rounded-full ${carts.length > 0 ? 'text-white bg-[#9538E2]' : 'btn disabled'}`} disabled={carts.length ===0}>Purchase</button>
                </div>
            </div>
            {
                carts.map(cart => <Cart key={cart.product_id} cart={cart}></Cart>)
            }
        </div>
    );
};

export default Carts;