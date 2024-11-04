import React, { createContext, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const productContext = createContext()
const GadgetContext = ({children}) => {
    const [carts, setCart] = useState([])
    const [wishlists, setWishlist] = useState([])

    const addToCart = (detailsData) =>{
        const newCart = [...carts, detailsData]
        setCart(newCart)
        toast.success("Item added to Cart")
    }
    const addToWishlist = (detailsData) =>{
        const newWishlist= [...wishlists, detailsData]
        console.log(detailsData)
        
        setWishlist(newWishlist)
        toast.info("Item added to Wishlist")
        
    }

    


    return (
        <productContext.Provider value={{carts, addToCart, wishlists, addToWishlist}}>
        {children}
        <ToastContainer 
        position='top-center'
        theme='colored'/>
      </productContext.Provider>
    );
};

export default GadgetContext;