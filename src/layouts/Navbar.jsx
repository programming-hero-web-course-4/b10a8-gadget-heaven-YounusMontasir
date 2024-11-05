import React, { useContext } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { BsCart3 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { productContext } from '../Context/GadgetContext';

const Navbar = () => {
  const {carts, wishlists} = useContext(productContext)
  const location = useLocation();
  console.log(location.pathname);
console.log(carts.length, wishlists.length);

  const navElement = (
    <>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/statistics">Statistics</NavLink></li>
      <li><NavLink to="/dashboard">DashBoard</NavLink></li>
      <li><NavLink to="/others">Others</NavLink></li>
    </>
  );

  return (
    <div className={`w-11/12 mx-auto mt-6 py-5 font-bold rounded-t-3xl ${location.pathname === '/' ? 'bg-[#9538E2] text-white' : 'bg-white text-[#0B0B0BB3]'}`}>
      <div className="navbar w-11/12 mx-auto justify-between">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex="0"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              {navElement}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-6">
            {navElement}
          </ul>
        </div>
        <div className="navbar-end gap-4">
         <div className='relative'> 
          <Link to="/dashboard"><button className='btn p-4 rounded-full'><BsCart3 /></button></Link>
          {carts.length > 0 &&  <p className= 'text-[#0B0B0BB3] absolute top-0 left-9 bg-white rounded-full px-2'>{carts.length}</p>}
         </div>
         <div className='relative'> 
         <Link to="/dashboard"><button className='btn p-4 rounded-full'><FaRegHeart /></button></Link>
          {wishlists.length > 0 &&  <p className= ' text-[#0B0B0BB3] absolute top-0 left-9 bg-white rounded-full px-2'>{wishlists.length}</p>}
         </div>
          
        </div>
      </div>
     </div>
  );
};

export default Navbar;
