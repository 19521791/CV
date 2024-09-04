import { useState } from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header relative">
      <NavLink
        to="/"
        className="w-20 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center font-bold shadow-lg transition-transform hover:scale-105"
      >
        <p className="text-white text-xl">All In!</p>
      </NavLink>
      <div className="lg:hidden">
        <button
          onClick={toggleMenu}
          className="text-black border-2 border-blue-500 rounded-lg p-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
      <nav
        className={`${
          isMenuOpen ? "block" : "hidden"
        } lg:flex lg:flex-row flex flex-col text-lg gap-4 font-medium fixed top-16 left-0 w-full bg-slate-50 shadow-lg p-4 z-1000 lg:relative lg:top-auto lg:left-auto lg:w-auto lg:bg-transparent lg:shadow-none lg:p-0`}
      >
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `${isActive ? "text-blue-500 border-b-2 border-blue-500" : "text-black-700"} hover:text-blue-600 transition-colors`
          }
          onClick={closeMenu}
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            `${isActive ? "text-blue-500 border-b-2 border-blue-500" : "text-black-700"} hover:text-blue-600 transition-colors`
          }
          onClick={closeMenu}
        >
          Projects
        </NavLink>
        <NavLink
          to="/experience"
          className={({ isActive }) =>
            `${isActive ? "text-blue-500 border-b-2 border-blue-500" : "text-black-700"} hover:text-blue-600 transition-colors`
          }
          onClick={closeMenu}
        >
          Experience
        </NavLink>
        <NavLink
          to="/skills"
          className={({ isActive }) =>
            `${isActive ? "text-blue-500 border-b-2 border-blue-500" : "text-black-700"} hover:text-blue-600 transition-colors`
          }
          onClick={closeMenu}
        >
          Skills
        </NavLink>
      </nav>
    </header>
  );
};

export default NavBar;
