import React, { createContext, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const productContext = createContext()
const GadgetContext = ({children}) => {
    const [carts, setCart] = useState([])
    const [wishlists, setWishlist] = useState([])
    const [amount, setAmount] = useState(0)

    const addToCart = (detailsData) =>{
        const newCart = [...carts, detailsData]
        setCart(newCart)
        const newAmount = parseInt(detailsData.price)
        setAmount(newAmount + amount)
        
        
        toast.success("Item added to Cart")
    }
    const addToWishlist = (detailsData) =>{
        const newWishlist= [...wishlists, detailsData]
       
        
        setWishlist(newWishlist)
        toast.info("Item added to Wishlist")
        
    }
    const handleSort = (carts) =>{
        const sortedArray = [...carts].sort((a,b)=> b.price - a.price)
        setCart(sortedArray)
    }

    


    return (
        <productContext.Provider value={{carts, addToCart, wishlists, addToWishlist, amount, handleSort}}>
        {children}
        <ToastContainer 
        position='top-center'
        autoClose={2000}
        theme='colored'
        />
      </productContext.Provider>
    );
};

export default GadgetContext;