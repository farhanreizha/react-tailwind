import React from "react";

export const NavLink = ({ className, href, children }) => {
  return (
    <a
      href={href}
      className={`${
        className ? className : "hover:bg-gray-700/40"
      } md:text-sm lg:text-base px-4 py-2 text-gray-300 hover:text-white  rounded-lg`}
    >
      {children}
    </a>
  );
};
