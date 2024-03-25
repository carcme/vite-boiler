import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Spin as Hamburger } from "hamburger-react";
import { FaRegCalendarAlt, FaEnvelope } from "react-icons/fa";
import Logo from "../assets/hammer3_logo.svg";
import navbarLinks from "../data/navbarLinks";
import useScrollPosition from "../hooks/useScrollPosition";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { i18n, t } = useTranslation();

  const [isOpen, setOpen] = useState(false);

  const scrollPosition = useScrollPosition();

  return (
    <div
      className={`flex fixed justify-between items-center h-16 xl:px-40 mx-auto px-2 text-white 
       top-0 z-50 w-full transition-colors ease-in-out duration-700
      ${scrollPosition < 100 && !isOpen ? "bg-[#151515]" : "bg-[#151515]/95"} `}
    >
      {/* Logo */}
      <Link to="/" className="pl-4 sm:pl-12">
        <img
          src={Logo}
          alt="hammer3-logo"
          className="rounded-full h-14 w-14 hover:text-red-900 "
        />
      </Link>{" "}
      {/* Desktop Navigation */}
      <ul className="hidden hover-diagonal-line md:flex text-neutral-500">
        {navbarLinks.map((item, index) => (
          <li key={index} className="p-4 m-2 duration-300 cursor-pointer ">
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                isActive ? "relative text-white" : "relative"
              }
            >
              {t(item.text)}
            </NavLink>
          </li>
        ))}
      </ul>
      <div
        id="big-nav-buttons"
        className="flex justify-end flex-grow px-4 mb-4 text-white"
      >
        <div className="items-end mt-4 space-x-4">
          <Link to="/mystery">
            <button
              className="bg-transparent hover:bg-[#404040] border-[#404040] border-2 p-3 rounded-full transition duration-300 hover:cursor-pointer"
              aria-label="Show mysteries"
            >
              <FaRegCalendarAlt size={16} color="#ddd" />
            </button>
          </Link>
          <Link to="/contact">
            <button
              className="bg-[#404040] hover:bg-transparent/20 border-[#404040] border-2 p-3 rounded-full transition duration-300 hover:cursor-pointer"
              aria-label="Contact"
            >
              <FaEnvelope size={16} color="#ddd" />
            </button>
          </Link>
        </div>
      </div>
      {/* Mobile Navigation Icon */}
      <div className="block transition duration-700 ease-in-out md:hidden">
        <Hamburger toggled={isOpen} toggle={setOpen} color="#aaa" size={20} />
      </div>
      {/* Mobile Navigation Menu */}
      <ul
        className={`top-[64px] md:hidden left-0 w-[60%] p-10 bg-[#151515]/95 text-neutral-500 fixed
           h-full z-50 ease-in-out duration-700 
        ${
          isOpen
            ? "translate-x-0 bg-[#151515]/95"
            : "-translate-x-full bg-transparent"
        }`}
      >
        {/* Mobile Navigation Items */}
        {navbarLinks.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className={({ isActive }) => (isActive ? " text-white " : "")}
          >
            <li className="z-50 p-4 duration-300 border-b cursor-pointer hover:border-red-700 hover:font-extrabold hover:text-white border-neutral-500">
              {item.text}
            </li>
          </NavLink>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
