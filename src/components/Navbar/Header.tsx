'use client'
import brandLogo from '../../../public/assets/img/header/logo.svg';

import { ImLocation2 } from "react-icons/im";
import { FaPhone } from "react-icons/fa6";
import { IoIosArrowForward, IoIosArrowBack  } from "react-icons/io";
import { CiSearch } from "react-icons/ci";


import React, { useState } from 'react';

import Image from 'next/image';

import { Link } from 'react-scroll';

export const Header = () => {


  const [isToggleMenuOpen, setIsToggleMenuOpen] = useState(false);

  const toggleMenu = () => {
      setIsToggleMenuOpen(!isToggleMenuOpen);
  }

  const mobileNavItem = [
        {link: "Home", path: "/home"},
        {link: "Dentist", path: "/dentist"},
        {link: "Our Services", path: "/services"},
        {link: "Blog", path: "/blog"},
        {link: "Careers", path: "/careers"},
  ];

  const desktopNavItem = [
    {link: "Home", path: "/home"},
    {link: "Dentist", path: "/dentist"},
    {link: "Our Services", path: "/services"},
    {link: "Blog", path: "/blog"},
    {link: "Careers", path: "/careers"},
];
  


  return (
    <>
    <header className='py-8 lg:pt-6 lg:pb-14 bg-white xl:sticky xl:-top-[100px] z-50'>
        <div className='container mx-auto lg:relative flex flex-col lg:flex-row lg:justify-between
            gap-y-4 lg:gap-y-0'>
            {/* Brand Logo */}
            <div className='flex justify-center lg:justify-normal'>
                <a href="/">
                <Image src={brandLogo} alt="" />
                </a>
            </div>
            <div className='flex flex-col gap-y-4 lg:flex-row lg:gap-x-10 lg:gap-y-0'>
                {/* Location */}
                <div className='flex justify-center items-center gap-x-2 lg:justify-normal'>
                <ImLocation2 className='text-2xl text-accent'/>
                <div className='text-secondary'>Davao City, Philppines</div> 
                </div>
                {/* Phone */}
                <div className='flex justify-center items-center gap-x-2 lg:justify-normal'>
                <FaPhone className='text-2xl text-accent'/>
                <div className='text-secondary'>(+63) 912 3456 789</div>
                </div>

                {/* btn */}
                <div className='flex flex-wrap items-center justify-center gap-2'>
                <Link to='/appointment' key='/appointment' spy={true} smooth={true} duration={500} offset={50} > <button className='btn btn-sm btn-outline w-[240px] lg:w-auto mx-auto lg:mx-0'>Book Now</button></Link>
                <Link to='/register' key='/register' spy={true} smooth={true} duration={500} offset={50} > <button className='btn btn-sm btn-outline w-[240px] lg:w-auto mx-auto lg:mx-0'>Login</button></Link>
                </div>
                
                {/* mobile nav */}
                <nav className={`mnav bg-white ${isToggleMenuOpen ? "fixed w-[300px] top-0 h-screen left-0 shadow-2xl lg:hidden transition-all duration-300 z-20" : "fixed w-[300px] top-0 h-screen -left-[300px] shadow-2xl lg:hidden transition-all duration-300 z-20"}`}>
                  {/* nav toggle btn */}
                  <div className='mnav__close-btn bg-primary w-8 h-8 relative -right-full top-8
                  flex justify-center items-center rounded-tr-lg rounded-br-lg cursor-pointer
                  transition-all'>
                    <button onClick={toggleMenu}>
                      {
                       isToggleMenuOpen ?( <IoIosArrowBack className='mnav__close-btn-icon text-2xl text-white'/> ) : ( <IoIosArrowForward className='mnav__close-btn-icon text-2xl text-white'/> )
                      }
                    </button>
                  </div>

                  {/* logo, list, form */}
                  <div className='px-12 flex flex-col gap-y-12 h-full'>
                    <a href="#something">
                      <Image src={brandLogo} alt="" />
                    </a>
                    {/* list */}
                    <ul className='flex flex-col gap-y-5'>
                      {
                        mobileNavItem.map(({link, path}) => 
                          <Link to={path} key={path} spy={true} smooth={true} duration={500} offset={50} className='text-secondary hover:text-accent transition-all duration-300'>
                            {link}
                          </Link>
                        )
                      }
                    </ul>

                    {/* form */}
                    <form className='relative flex gap-x-[10px]'>
                      <label htmlFor="mnav-search-input">
                        <CiSearch className='text-2xl text-accent' />
                      </label>
                      <input 
                      type="text" 
                      id='mnav-search-input' 
                      placeholder='Search...'
                      className='search-btn'
                      />
                    </form>
                  </div>
                </nav>

                {/* desktop nav */}
                <nav className='bg-white absolute w-full left-0 -bottom-[86px] shadow-custom1
                h-16 rounded-[10px] hidden lg:flex lg:items-center lg:justify-between lg:px-[50px]'>
                  <ul className='flex gap-x-4'>
                      {
                        desktopNavItem.map(({link, path}) => 
                          <Link to={path} key={path} spy={true} smooth={true} duration={500} offset={50} className='border-r pr-4 text-secondary hover:text-accent transition-all duration-300 hover:cursor-pointer'>
                            {link}
                          </Link>
                        )
                      }
                          <Link to='/about' key='/about' spy={true} smooth={true} duration={500} offset={50} className='pr-4 text-secondary hover:text-accent transition-all duration-300 hover:cursor-pointer'>
                            About Us
                          </Link>
                  </ul>

                  {/* form */}
                  <form className='relative flex gap-x-[10px]'>
                      <label htmlFor="searh-input" className='flex justify-center items-center group'>
                        <CiSearch className='text-2xl text-accent' />
                      </label>
                      <input 
                      type="text" 
                      id='search-input' 
                      placeholder='Search...'
                      className='outline-none w-[100px] border-b-2 focus:w-[180px] focus:border-b-2
                      focus:border-accent placeholder:italic placeholder:text-base transition-all duration-150'
                      />
                  </form>
                </nav>
            </div>
        </div>
    </header>
    </>
  )
}

