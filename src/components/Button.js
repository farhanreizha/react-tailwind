import React from "react";

export const Button = ({ children, className, ...props }) => {
  return (
    <button
      {...props}
      className={`${
        className ? className : "font-semibold hover:bg-sky-500 bg-sky-400"
      }  flex justify-center items-center px-4 py-2.5  shadow-md rounded-md text-white hover:text-gray-100 transition duration-300`}>
      {children}
    </button>
  );
};
