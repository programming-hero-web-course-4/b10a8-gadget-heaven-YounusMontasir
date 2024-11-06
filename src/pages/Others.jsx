import React from 'react';
import { Helmet } from 'react-helmet';

const Others = () => {
    return (
        <div className=' mx-auto'>
            <Helmet>
        <title>About Us | Gadget Heaven</title>
        <meta
          name="description"
          content="Explore our selection of the latest gadgets and accessories at Gadget Heaven."
        />
      </Helmet>
           
         <div className='w-full  mx-auto bg-[#9538E2] pt-12 pb-12'>
        <h1 className='text-white text-[32px] font-bold text-center w-full mx-auto'>About Us</h1>
        <p className='text-white text-center w-full lg:w-8/12 font-semibold  mx-auto my-6'>Welcome to Gadget Heaven—your go-to spot for the latest in tech! We specialize in a range of gadgets, including phones, laptops, Macs, iPhones, watches, and essential accessories. Our mission is to make top-tier technology accessible and affordable for all, offering products that enhance your lifestyle and keep you connected. Discover your next must-have gadget with us today!</p>
       
       </div>
            {/* Accordion */}
<div>
<div class="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" checked="checked" />
  <div class="collapse-title text-xl font-medium">Click to open this one and close others</div>
  <div class="collapse-content">
    <p>hello</p>
  </div>
</div>
<div class="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" />
  <div class="collapse-title text-xl font-medium">Click to open this one and close others</div>
  <div class="collapse-content">
    <p>hello</p>
  </div>
</div>
<div class="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" />
  <div class="collapse-title text-xl font-medium">Click to open this one and close others</div>
  <div class="collapse-content">
    <p>hello</p>
  </div>
</div>
</div>
{/* Login Form */}
<div class="hero bg-base-200 min-h-screen">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <div class="text-center lg:text-left">
      <h1 class="text-5xl font-bold">Login now!</h1>
      <p class="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
    <div class="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div class="card-body">
        <div class="form-control">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" class="input input-bordered" required />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" class="input input-bordered" required />
          <label class="label">
            <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div class="form-control mt-6">
          <button class="btn btn-primary">Login</button>
        </div>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Others;