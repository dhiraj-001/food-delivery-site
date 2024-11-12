import React, { useState } from 'react';
import img1 from '../img/Aahar-lg.png'
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" fixed w-full z-20 top-0 start-0  h-16">
      <div className="lg:px-40 flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://dhiraj-001.github.io/food-delivery-site/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={img1} className="h-28" alt="Maihang Logo" />

        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        <div className="log-sign">
                <li className="li">
                  <NavLink className="login" to="/food-delivery-site/Login">
                    Login
                  </NavLink>
                </li>
                <li className="li">
                  <NavLink className="signup" to="/food-delivery-site/signup">
                    Signup
                  </NavLink>
                </li>
              </div>
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            // aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
        <div className={`items-center justify-between ${isOpen ? 'flex' : 'hidden'} w-full md:flex md:w-auto md:order-1`} id="navbar-sticky">
          <ul className="flex lg:px-9 gap-7 backdrop-blur-md flex-col p-4 md:p-2 mt-4 font-medium border-4 border-gray-100  rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900/80 dark:border-gray-700">
            <li>
              <NavLink to="/food-delivery-site" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</NavLink>
            </li>
            <li>
              <NavLink to="/food-delivery-site/dishes" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Dishes</NavLink>
            </li>
            <li>
              <NavLink to="/food-delivery-site/locations" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Locations</NavLink>
            </li>
            <li>
              <NavLink to="/food-delivery-site/orders" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</NavLink>
            </li>
          </ul>
        </div>
       

      </div>
    </nav>
  );
};

export default Navbar;