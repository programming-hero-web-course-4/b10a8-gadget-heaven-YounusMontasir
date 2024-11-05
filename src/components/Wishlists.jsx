import React, { useContext } from 'react';


import { productContext } from '../Context/GadgetContext';
import Wishlist from './Wishlist';

const Wishlists = () => {
    const {wishlists} = useContext(productContext)
    return (
        <div className='w-10/12 mt-12 mx-auto mb-20'>
           <p className='text-2xl font-bold'>Wishlist</p>

            {
                wishlists.map(wishlist => <Wishlist key={wishlist.product_id} wishlist={wishlist}></Wishlist>)
            }
        </div>
    );
};

export default Wishlists;