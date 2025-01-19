import { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";

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
      if (window.innerWidth >= 1024) {
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
    <div className="max-w-screen-2xl text-base mx-auto absolute top-0 bg-transparent z-10 right-0 left-0">
      <header className="py-6 lg:mr-9">
        <nav className="flex flex-row justify-between items-center relative">
          <NavLink
            to='/'
            className="basis-3/6 text-center text-2xl font-semibold cursor-pointer"
          >
            All In!
          </NavLink>
    
          <div
            id="top-menu"
            ref={menuRef}
            className={`${
              isMenuOpen ? "absolute flex flex-col items-center top-10 z-50 left-8 right-8 bg-slate-200 animate-slideDown rounded-lg" : "hidden"
            } basis-3/6 lg:basis-2/6 lg:flex lg:items-center lg:justify-end lg:gap-8 uppercase text-gray-500 lg:text-slate-800 font-medium`}  
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
          </div>

          <div 
            id="top-menu-icon"
            ref={toggleButtonRef}
            className="basis-1/6 lg:hidden flex items-center cursor-pointer px-4"
            onClick={toggleMenu}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 inline-block">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
            </svg>
          </div>
        </nav>
      </header>
    </div>
  )
};

export default NavBar;
