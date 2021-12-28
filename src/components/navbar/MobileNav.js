/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { ResponsiveNavLink } from "./ResponsiveNavLink";

export const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const auth = {
    check: true,
    user: {
      name: "Farhan Reizha Fauzan",
    },
  };
  return (
    <div className='flex md:hidden items-center justify-between py-2.5 px-4 border-b border-gray-700'>
      <a href='#' className='text-white font-semibold uppercase'>
        Brand
      </a>
      <div
        onClick={() => setIsOpen(false)}
        className={`${
          isOpen ? "block" : "hidden"
        } bg-transparent absolute w-full h-full inset-0`}
      ></div>
      <button
        onClick={() => setIsOpen((isOpen) => !isOpen)}
        className='focus:outline-none'
      >
        <FaBars className='text-white' />
      </button>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } bg-white absolute right-0 mr-12 top-0 mt-4 py-1 rounded-lg w-56 overflow-hidden`}
      >
        <div>
          <ResponsiveNavLink href='#'>Home</ResponsiveNavLink>
          <ResponsiveNavLink href='#'>Articles</ResponsiveNavLink>
          <ResponsiveNavLink href='#'>Gallery</ResponsiveNavLink>
          <ResponsiveNavLink href='#'>About</ResponsiveNavLink>
          <ResponsiveNavLink href='#'>Contact</ResponsiveNavLink>
        </div>
        {auth.check ? (
          <div>
            <div className='w-full h-px bg-gray-300 my-1' />
            <ResponsiveNavLink href='#'>{auth.user.name}</ResponsiveNavLink>
          </div>
        ) : (
          <div>
            <div className='w-full h-px bg-gray-300 my-1' />
            <ResponsiveNavLink href='#'>Sign in</ResponsiveNavLink>
            <ResponsiveNavLink href='#'>Sign up</ResponsiveNavLink>
          </div>
        )}
      </div>
    </div>
  );
};
