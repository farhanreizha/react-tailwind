import React from 'react';

export default function Layout({ children, className }) {
  return (
    <div
      className={`${
        className ? className : ''
      } min-h-screen font-sans antialiased tracking-tighter bg-gray-100`}
    >
      {children}
    </div>
  );
}
