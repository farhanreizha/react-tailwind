import React from "react";

export const CardFooter = ({ children, className }) => {
  return (
    <footer
      className={`${
        className ? className : "bg-gray-50/50"
      } px-4 py-2.5 border-t text-gray-500 `}>
      {children}
    </footer>
  );
};
