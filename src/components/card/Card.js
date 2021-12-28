import React from "react";

export const Card = ({children}) => {
  return (
    <div className='max-w-lg'>
      <div className='overflow-hidden bg-white border shadow-sm rounded-xl'>
        {children}
      </div>
    </div>
  );
};
