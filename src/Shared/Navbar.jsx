import React, { useContext } from "react";
import logo from '../assets/logo.svg'
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const Navbar = () => {

  const {user, logOut} = useContext(AuthContext);

  const handleLogOut = () =>{
    logOut()
    .then(()=>{})
    .catch(error=> console.log(error))
  }

    const links = <>
        <li className="font-bold text-xl mr-2"><Link to='/'>Home</Link></li>
        <li className="font-bold text-xl mr-2"><Link to='/about'>About</Link></li>
        <li className="font-bold text-xl mr-2"><Link to='/services'>Services</Link></li>
        <li className="font-bold text-xl mr-2"><Link to='/blogs'>Blogs</Link></li>
        <li className="font-bold text-xl mr-2"><Link to='/contact'>Contact Us</Link></li>
        {
          user?.email ? <>
          <li className="underline font-bold text-xl mr-2"><Link to='/bookings'>My Bookings</Link></li>
          <li><button  class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={handleLogOut}>Log Out</button></li>
          </> : <li className="btn btn-secondary font-bold text-lg"><Link to='/login'>Log In</Link></li>
        }
    </>

  return (
    <div>
      <div className="navbar bg-base-100 h-28 mb-5">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
                {links}
            </ul>
          </div>
          <Link to='/' className="btn btn-ghost text-xl">
          <img src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          <a class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Appointment</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
