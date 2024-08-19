import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const hideTimeoutRef = useRef(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
      setIsVisible(true); // Show the navbar as soon as someone scrolls
      resetHideTimeout();
    } else {
      setIsScrolled(false);
      setIsVisible(true); // Ensure navbar is visible when at the top
      clearTimeout(hideTimeoutRef.current); // Clear the timeout when not scrolled
    }
  };

  const handleMouseMove = () => {
    if (isScrolled) {
      setIsVisible(true);
      resetHideTimeout();
    }
  };

  const resetHideTimeout = () => {
    clearTimeout(hideTimeoutRef.current);
    hideTimeoutRef.current = setTimeout(() => {
      setIsVisible(false);
    }, 5000);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(hideTimeoutRef.current);
    };
  }, [isScrolled]);

  return (
    <div className="relative w-full">
      <div className={`flex w-full justify-between items-center h-12 md:h-16 bg-none md:bg-gray-200 z-10 md:bg-opacity-25  p-4 transition-transform duration-500 ${isScrolled ? 'fixed top-0 left-0 right-0 bg-opacity-75 bg-black z-20' : ''} ${isScrolled && !isVisible ? '-translate-y-full' : 'translate-y-0'}`}>
        <Link to='home' smooth={true} duration={500} className='hover:cursor-pointer text-white font-italiana text-2xl'>
          Hairdresser
        </Link>
        <div className="md:hidden flex justify-center">
          <button onClick={handleToggle} className="text-white focus:outline-none">
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
        <ul className="hidden md:flex flex-wrap justify-center space-x-4 md:space-x-16 z-[20] font-italiana text-md md:text-2xl text-white font-light tracking-wide">
          <li>
            <Link to="home" smooth={true} duration={500} className="hover:text-gray-400 hover:cursor-pointer">
              HOME
            </Link>
          </li>
          <li>
            <Link to="gallery" smooth={true} duration={500} className="hover:text-gray-400 hover:cursor-pointer">
              GALLERIE
            </Link>
          </li>
          <li>
            <Link to="preise" smooth={true} duration={500} className="hover:text-gray-400 hover:cursor-pointer">
              PREISE
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500} className="hover:text-gray-400 hover:cursor-pointer">
              KONTAKT
            </Link>
          </li>
          <li>
            <Link to="Shop" smooth={true} duration={500} className="hover:text-gray-400 hover:cursor-pointer">
              SHOP
            </Link>
          </li>
        </ul>
      </div>

      <div className={`fixed top-0 left-0 w-full h-full bg-gradient-to-b from-black to-gray-400 text-white flex flex-col justify-center items-center z-20 transition-transform duration-500 ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <ul className="flex flex-col space-y-8 font-italiana text-2xl text-white font-light tracking-wide">
          <li>
            <Link to="home" smooth={true} duration={500} className="hover:text-gray-400 hover:cursor-pointer" onClick={handleToggle}>
              HOME
            </Link>
          </li>
          <li>
            <Link to="gallery" smooth={true} duration={500} className="hover:text-gray-400 hover:cursor-pointer" onClick={handleToggle}>
              GALLERIE
            </Link>
          </li>
          <li>
            <Link to="preise" smooth={true} duration={500} className="hover:text-gray-400 hover:cursor-pointer" onClick={handleToggle}>
              PREISE
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500} className="hover:text-gray-400 hover:cursor-pointer" onClick={handleToggle}>
              KONTAKT
            </Link>
          </li>
          <li>
            <Link to="Shop" smooth={true} duration={500} className="hover:text-gray-400 hover:cursor-pointer" onClick={handleToggle}>
              SHOP
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
