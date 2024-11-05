import React, { createContext, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const productContext = createContext()
const GadgetContext = ({children}) => {
    const [carts, setCart] = useState([])
    const [wishlists, setWishlist] = useState([])
    const [amount, setAmount] = useState(0)
    const [modalOpen, setModalOpen] = useState(false)
    const [isDisable, setIsDisable] = useState(false)

    const addToCart = (detailsData) =>{
        const newCart = [...carts, detailsData]
        setCart(newCart)
        const newAmount = parseInt(detailsData.price)
        setAmount(newAmount + amount)
        
        
        toast.success("Item added to Cart")
    }
    const addToWishlist = (detailsData) =>{
        console.log(detailsData);
        
        // const newId = parseInt(detailsData.product_id)
        const existWishlist = wishlists.find(wishlist => wishlist.product_id === detailsData.product_id)
        if(!existWishlist)
        {
            const newWishlist= [...wishlists, detailsData]
            setWishlist(newWishlist)
            toast.info("Item added to Wishlist")
            setIsDisable(true)
        }
        
    }
    
    const handleSort = (carts) =>{
        const sortedArray = [...carts].sort((a,b)=> b.price - a.price)
        setCart(sortedArray)
    }

    const handlePerchase = (carts) =>{
       
        setCart([])
        setModalOpen(true)
    
    }

    const closeModal = () => {
        setModalOpen(false);
        setAmount(0);
    };
    

    


    return (
        <productContext.Provider value={{carts, addToCart, wishlists, addToWishlist, amount, handleSort,handlePerchase, modalOpen,closeModal,isDisable}}>
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