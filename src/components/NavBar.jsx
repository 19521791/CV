import { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { clown } from "constants"

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const toggleButtonRef = useRef(null);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);
  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        toggleButtonRef.current &&
        !toggleButtonRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      } 
    }

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    } else {
      document.removeEventListener("mousedown", handleClickOutside)
    }

    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isMenuOpen]);

  return (
    <div className="max-w-screen-xl text-base mx-auto absolute top-0 bg-transparent z-10 right-0 left-0">
      <header className="py-6 md:mr-9">
        <nav className="flex flex-row justify-between items-center relative">
          <NavLink
            to='/'
            className="basis-3/6 text-center text-2xl font-semibold cursor-pointer pr-10 md:pr-0 flex flex-row justify-center items-center gap-2"
          >
            <img src={clown} className="w-[30px] h-[30px]"/>
          </NavLink>
    
          <div
            id="top-menu"
            ref={menuRef}
            className={`${
              isMenuOpen ? "absolute flex flex-col items-center gap-1 py-2 top-6 z-50 left-8 right-8 bg-slate-200 animate-slideDown rounded-lg" : "hidden"
            } basis-3/6 lg:basis-2/6 md:flex md:items-center md:justify-end md:gap-10 uppercase text-gray-500 md:text-slate-800 font-medium`}  
          >
            <NavLink
              to='/about'
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 font-semibold"
                  : "top-menu-item"
              }
            >
              About
            </NavLink>

            <NavLink
              to='/projects'
              className={({ isActive }) =>
              isActive
                ? "text-blue-500 font-semibold"
                : "top-menu-item"
              }
            >
              Projects
            </NavLink>

            <NavLink
              to='/experience'
              className={({ isActive }) =>
              isActive
                ? "text-blue-500 font-semibold"
                : "top-menu-item"
              }
            >
              Experience
            </NavLink>

            <NavLink
              to='/skills'
              className={({ isActive }) =>
              isActive
                ? "text-blue-500 font-semibold"
                : "top-menu-item"
              }
            >
              Skills
            </NavLink>

            {/* <NavLink
              to='/cover-letter'
              className={({ isActive }) =>
              isActive
                ? "text-blue-500 font-semibold"
                : "top-menu-item"
              }
            >
              Letter
            </NavLink> */}
          </div>

          <div 
            id="top-menu-icon"
            ref={toggleButtonRef}
            className="basis-1/6 md:hidden flex items-center cursor-pointer px-4"
            onClick={toggleMenu}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
            </svg>
          </div>
        </nav>
      </header>
    </div>
  )
};

export default NavBar;
