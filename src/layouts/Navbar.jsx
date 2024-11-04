import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { BsCart3 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";

const Navbar = () => {
  const location = useLocation()
  console.log(location.pathname);
  
    const navElement = (
        <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/statistics">Statistics</NavLink></li>
        <li><NavLink to="/dashboard">DashBoard</NavLink></li>
        <li><NavLink to="others">Others</NavLink></li>
        </>
    )
    return (
       <div className= {` w-11/12 mx-auto mt-6 py-5 font-bold rounded-t-3xl ${location.pathname==='/'? 'bg-[#9538E2] text-white': 'bg-white text-[#0B0B0BB3]'}`}>
         <div class="navbar w-11/12 mx-auto">
  <div class="navbar-start">
    <div class="dropdown">
      <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabindex="0"
        class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {navElement}
      </ul>
    </div>
    <a class="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal px-1 gap-6">
     {navElement}
    </ul>
  </div>
  <div class="navbar-end gap-4">
    <button className=' btn p-4 rounded-full'><BsCart3 /></button>
    <button className='btn p-4 rounded-full'><FaRegHeart /></button>
  </div>
</div>
       </div>
    );
};

export default Navbar;