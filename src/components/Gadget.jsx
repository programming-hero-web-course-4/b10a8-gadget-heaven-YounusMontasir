import React from 'react';
import { Link } from 'react-router-dom';

const Gadget = ({gadget}) => {
    const {product_id, product_title, product_image, category, price, description, Specification, availability, rating} = gadget

    return (
        <div class="card card-compact bg-base-100  shadow-xl">
  <figure>
    <img className='h-[180px]'
      src={product_image}
      alt="" />
  </figure>
  <div class="card-body">
    <h2 class="card-title text-2xl font-semibold">{product_title}</h2>
    <p className='text-[#09080F99] font-medium'>${price}</p>
    <div class="card-actions justify-start">

      <Link to= {`gadgets/${product_id}`}>
      <button class="btn btn-primary rounded-full text-[#9538E2] bg-white hover:text-white font-semibold">View Details</button>
      </Link>
      
    </div>
  </div>
</div>
    );
};

export default Gadget;