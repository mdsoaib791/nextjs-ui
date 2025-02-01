"use client"
import React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import { IoMdLogIn } from 'react-icons/io';
import { IoCartOutline } from 'react-icons/io5';
import { RiMenuFill } from "react-icons/ri";
import { RiMenu3Fill } from "react-icons/ri";
const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navigationAreaStyle = isOpen
    ? 'translate-x-{0}'
    : '-translate-x-full';


  return (
    <div className="bg-blue-700 text-lime-50 relative">
      <div className="container py-5 flex items-center justify-between gap-1">
        <div className="logo_area">
          <a href="/" title="Home">
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
        <ul className={`navigation_area flex flex-col transition-all  lg:lg:translate-x-0 absolute top-0 left-0 min-h-screen w-[240px] bg-black z-10 lg:relative lg:teft-auto lg:flex-row lg:bg-transparent lg:min-h-0 lg:w-auto lg:gap-3 lg:translate-x-{0} ${navigationAreaStyle}`}>
          <li>
            <a href="/" className='px-2 py-3 transition-all w-full block border-b-2 border-slate-100 hover:bg-slate-200 hover:text-black focus:bg-slate-200 focus:text-black lg:border-0 lg:px-0 lg:py-0 lg:hover:bg-transparent'>Home</a>
          </li>

          <li>
            <a href="about" className='px-2 py-3 transition-all w-full block border-b-2 border-slate-200 hover:bg-slate-200 hover:text-black focus:bg-slate-200 focus:text-black lg:border-0 lg:px-0 lg:py-0 lg:hover:bg-transparent'>About</a>
          </li>
          <li>
            <a href="contact" className='px-2 py-3 transition-all w-full block border-b-2 border-slate-200 hover:bg-slate-200 hover:text-black focus:bg-slate-200 focus:text-black lg:border-0 lg:px-0 lg:py-0 lg:hover:bg-transparent'>Contact</a>
          </li>
        </ul>
        <div className="login_area flex justify-end items-cennter aitems-center gap-5">
        <div className="ca_rt">
            <a href="cart" title="Cart" className='block text-2xl p-2 rounded-sm bg-white  
            bg-opacity-10 hover:bg-opacity-20  transition-al'>
              <IoCartOutline />
            </a>
          </div>
          <div className="log_in">
            <a href="login" title="Login" className='block text-2xl p-2 rounded-sm bg-white  
            bg-opacity-10 hover:bg-opacity-20  transition-al'>
              <IoMdLogIn />
            </a>
          </div>
          <div className="humburger_menu block text-4xl lg:hidden">
            <button className="hamburger-icon" onClick={toggleMenu}>
              {isOpen ? <RiMenu3Fill /> : <RiMenuFill />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
