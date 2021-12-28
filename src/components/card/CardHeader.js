import React from "react";
export const CardHeader = ({ children }) => {
  return (
    <header className='px-4 py-2.5 border-b bg-gray-50/50'>
      {children}
    </header>
  );
};
