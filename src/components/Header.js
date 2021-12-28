/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { NavLink } from "./navbar/NavLink";
import { FaAngleDown } from "react-icons/fa";
import { Hero } from "./Hero";
import { MobileNav } from "./navbar/MobileNav";

export const Header = () => {
  const auth = {
    check: true,
    user: {
      name: "Farhan Reizha Fauzan",
    },
  };
  return (
    <div className='bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900'>
      <MobileNav />
      <div className='hidden md:block border-b border-white/10 py-4'>
        <div className='container'>
          <nav className='flex items-center justify-between'>
            <div className='flex items-center gap-x-2'>
              <a href='#' className='text-white font-semibold uppercase mr-6'>
                Brand
              </a>
              <NavLink href='#'>Home</NavLink>
              <NavLink href='#'>Articles</NavLink>
              <NavLink href='#'>Gallery</NavLink>
              <NavLink href='#'>About</NavLink>
              <NavLink href='#'>Contact</NavLink>
            </div>
            {auth.check ? (
              <div className='flex items-center gap-x-2'>
                <NavLink
                  className='flex items-center gap-x-2 hover:bg-transparent'
                  href='#'
                >
                  {auth.user.name} <FaAngleDown />
                </NavLink>
              </div>
            ) : (
              <div className='flex items-center gap-x-2'>
                <NavLink href='#'>Sign in</NavLink>
                <NavLink href='#'>Sign up</NavLink>
              </div>
            )}
          </nav>
        </div>
      </div>
      <Hero />
    </div>
  );
};
