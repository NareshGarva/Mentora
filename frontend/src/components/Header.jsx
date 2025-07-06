import React, {useEffect,useRef} from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
    
    const headerRef = useRef(null);        
        useEffect(()=>{
            const header = headerRef.current;
            if(!header) return;
  window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        header.classList.add("m-0","md:px-28","px-0");
        header.classList.remove("mx-2","md:mx-40", "my-2", "rounded-xl");
      } else {
        header.classList.remove("m-0", "md:px-28","px-0");
        header.classList.add("mx-2","md:mx-40", "my-2", "rounded-xl");
      }

        });

    });



 const opneMenu = () => {
    const nav = document.getElementById('nav');
    nav.classList.remove("hidden");
    nav.classList.add("top-0", "left-0", "w-full", "absolute", "h-fit", "p-5", "bg-white", "rounded-xl", "mt-2", "z-50");
    setTimeout(() => {
      nav.classList.remove("-translate-y-full");
      nav.classList.add("translate-y-0");
    }, 10);
  };

  const closeMenu = () => {
    const nav = document.getElementById('nav');
    nav.classList.remove("translate-y-0");
    nav.classList.add("-translate-y-full");

    setTimeout(() => {
      nav.classList.add("hidden");
      nav.classList.remove("top-0", "left-0", "w-full", "absolute", "h-fit", "p-5", "bg-white", "rounded-xl", "mt-2", "z-50");
    }, 300); 
  };
  
   

  return (
    <header ref={headerRef} className="relative mx-2 md:mx-40 my-2 rounded-xl py-2.5 px-5 bg-white sticky top-0 transition-all duration-300 ease-in-out"
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="logo flex items-center justify-start gap-2">
          <svg onClick={opneMenu} xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu-icon lucide-menu bg-indigo-500 p-1 rounded text-white cursor-pointer md:hidden"><path d="M4 12h16"/><path d="M4 18h16"/><path d="M4 6h16"/></svg>
          <span className="text-indigo-500">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart-handshake-icon lucide-heart-handshake"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66"/><path d="m18 15-2-2"/><path d="m15 18-2-2"/></svg>
          </span>
          <h1 className="font-semibold text-xl">Mentora</h1>
        </div>

        {/* Navigation Links */}
        <div id='nav' className="nav transform -translate-y-full hidden md:block transition-all duration-300 ease-in-out md:translate-y-0 md:relative">

            <div className="logo md:hidden flex items-center justify-between border-b-1 mb-5 pb-3">
          <div className='flex items-center justify-start gap-2'>
            <span className="text-indigo-500">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart-handshake-icon lucide-heart-handshake"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66"/><path d="m18 15-2-2"/><path d="m15 18-2-2"/></svg>
          </span>
          <h1 className="font-semibold text-sm">Mentora</h1>
          </div>
          <svg onClick={closeMenu} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x-icon lucide-x cursor-pointer"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        </div>

          <ul className="md:flex md:items-center md:justify-center md:gap-10">
            <li className="text-gray-800 cursor-pointer my-3 md:my-1">
              <NavLink to="/" className={({ isActive }) =>
    `transition duration-100 ease-in-out ${
      isActive ? 'text-indigo-500 font-semibold' : 'text-gray-800 hover:text-indigo-500'
    } mb-4 md:mb-0`
  }>Home</NavLink>
            </li>
            <li className="text-gray-800 cursor-pointer my-3 md:my-1">
              <NavLink to="/browse-mentor" className={({ isActive }) =>
    `transition duration-100 ease-in-out ${
      isActive ? 'text-indigo-500 font-semibold' : 'text-gray-800 hover:text-indigo-500'
    } mb-4 md:mb-0`
  }>Browse Mentor</NavLink>
            </li>
            <li className="text-gray-800 cursor-pointer my-3 md:my-1">
              <NavLink to="/about-us" className={({ isActive }) =>
    `transition duration-100 ease-in-out ${
      isActive ? 'text-indigo-500 font-semibold' : 'text-gray-800 hover:text-indigo-500'
    } mb-4 md:mb-0`
  }>About Us</NavLink>
            </li>
             <li className="text-gray-800 cursor-pointer my-3 md:my-1">
              <NavLink to="/contact" className={({ isActive }) =>
    `transition duration-100 ease-in-out ${
      isActive ? 'text-indigo-500 font-semibold' : 'text-gray-800 hover:text-indigo-500'
    } mb-4 md:mb-0`
  }>Contact</NavLink>
            </li>
          </ul>
        </div>

        {/* Login Button */}
        <div className="login bg-gray-200 rounded-full py-1 pb-1.5 px-3 border border-gray-300 transition duration-300 hover:text-indigo-500 hover:scale-105">
          <NavLink className="flex items-center justify-end gap-1" to="/login">
            Login
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-move-right -mb-1"
              >
                <path d="M18 8L22 12L18 16" />
                <path d="M2 12H22" />
              </svg>
            </span>
          </NavLink>
        </div>
      </div>
    </header>
  );
}

export default Header;
