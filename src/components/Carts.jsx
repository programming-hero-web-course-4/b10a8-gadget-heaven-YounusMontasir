import React, { useContext } from 'react';
import { productContext } from '../Context/GadgetContext';
import Cart from './Cart';
import { GrSort } from "react-icons/gr";
import { useNavigate } from 'react-router-dom';

const Carts = () => {
    const {carts,amount,handleSort,handlePerchase,modalOpen,closeModal} = useContext(productContext)
    const navigateToHome = useNavigate()

    const goToHome = () =>{
        navigateToHome("/")
    }
    
    return (
        <div className='w-10/12 mt-12 mx-auto mb-20'>
             <div className='flex justify-between items-center'>
                <p className='text-2xl font-bold'>Cart</p>
                <div className='flex gap-6 items-center mb-8'>
                    <p className='text-2xl font-bold'>Total Cost: {amount}</p>
                    <button onClick={()=>handleSort(carts)} className={`rounded-full text-[18px] font-semibold ${carts.length > 0 ? ' btn text-[#9538E2]  font-semibold border-2 border-[#9538E2] rounded-full' : 'btn disabled'}`} disabled={carts.length ===0} >
                        Sort by Price <GrSort /></button>
                    <button onClick={() => handlePerchase(carts)} className={`btn  border-2 rounded-full ${carts.length > 0 ? 'text-white bg-[#9538E2]' : 'btn disabled'}`} disabled={carts.length ===0}>Purchase</button>
                </div>
            </div>
            {
                carts.map(cart => <Cart key={cart.product_id} cart={cart}></Cart>)
            }
            
            {modalOpen && (
                 <dialog open className="modal">
                 <div className="modal-box">
                     <h3 className="text-2xl font-bold text-center">Payment Successfully</h3>
                     <p className="py-4 text-[#09080F99] text-center">Thanks for perchasing.</p>
                     <p className='text-[#09080F99] text-center'>Total: {amount}</p>
                     <div className="modal-action">
                         <button onClick={() =>{closeModal(), goToHome()}} className="btn flex justify-center w-full font-bold">Close</button>
                     </div>
                 </div>
             </dialog>
            )}
        </div>
    );
};

export default Carts;