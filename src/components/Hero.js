/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

export const Hero = () => {
  return (
    <div>
      <div class='container'>
        <div class='w-full md:w-2/3'>
          <header class='text-white sm:py-8 py-4 md:py-16'>
            <h1 className='text-xl md:text-3xl font-bold'>New Revolution</h1>
            <p className='text-base md:text-xl leading-relaxed font-light mt-4 mb-6'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.{"{"}" "
              {"}"}
              <a
                href='#'
                className='underline decoration-sky-500 text-sky-400 font-medium'
              >
                Dolorem quam
              </a>
              , recusandae quis dolorum veritatis nulla, nemo consequuntur
              temporibus quisquam expedita libero est facere ipsum laboriosam
              eveniet itaque. Rem, dicta temporibus?
            </p>
            <a
              href='#'
              className='bg-white hover:bg-gray-50 hover:text-blue-600 transition duration-300 text-gray-900 px-4 py-2 text-sm md:text-base md:px-6 md:py-2.5 rounded-md font-medium inline-flex shadow-inner shadow-gray-300 md:shadow-gray-400'
            >
              Browse
            </a>
          </header>
        </div>
      </div>
    </div>
  );
};
