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
<div className='w-9/12 mx-auto my-16 '>
<h1 className='text-[#9538E2] font-bold text-5xl text-center mb-10'>Frequently Asked Question</h1>
<div class="collapse collapse-arrow bg-base-200 mb-4 p-4">
  <input type="radio" name="my-accordion-2" checked="checked" />
  <div class="collapse-title text-2xl font-medium">What types of gadgets do you sell?</div>
  <div class="collapse-content">
    <p>At Gadget Heaven, we offer a wide range of gadgets, including phones, laptops, MacBooks, smartwatches, and various accessories to enhance your tech experience.</p>
  </div>
</div>
<div class="collapse collapse-arrow bg-base-200 mb-4 p-4">
  <input type="radio" name="my-accordion-2" />
  <div class="collapse-title text-2xl font-medium">Do you provide warranties on your products?</div>
  <div class="collapse-content">
    <p>Yes, all our products come with a manufacturer’s warranty. The duration and terms depend on the specific gadget, and detailed warranty information is available on each product page.</p>
  </div>
</div>
<div class="collapse collapse-arrow bg-base-200 mb-4 p-4">
  <input type="radio" name="my-accordion-2" />
  <div class="collapse-title text-2xl font-medium">How long does shipping usually take?</div>
  <div class="collapse-content">
    <p>We aim to deliver all orders within 3–7 business days, depending on your location. Once your order is shipped, you'll receive tracking information so you can follow its journey.</p>
  </div>
</div>
<div class="collapse collapse-arrow bg-base-200 mb-4 p-4">
  <input type="radio" name="my-accordion-2" />
  <div class="collapse-title text-2xl font-medium">What is your return policy?</div>
  <div class="collapse-content ">
    <p>If you’re not satisfied with your purchase, you can return it within 30 days for a full refund, provided it’s in unused condition with all original packaging. Visit our Return Policy page for detailed instructions.</p>
  </div>
</div>
</div>
{/* Login Form */}
<div className='w-9/12 mx-auto my-16'>
<h1 className='text-[#9538E2] font-bold text-5xl text-center mb-10'>Contact With Us</h1>
<div class="hero bg-base-200  w-9/12 mx-auto rounded-xl">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <div class="text-center lg:text-left">
      <h1 class="text-5xl font-bold">Contact Us</h1>
      <p class="py-6">
      Have questions or need assistance? Reach out to us through our Contact Us form, and we'll be happy to help with any inquiries about our products or services!
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
          <button class="btn text-white font-semibold bg-[#9538E2]">Login</button>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
        </div>
    );
};

export default Others;