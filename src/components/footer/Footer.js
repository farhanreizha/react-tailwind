/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { FaRegCopyright } from 'react-icons/fa';

export default function Footer() {
  return (
    <div className='bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900'>
      <div className='border-t border-white/10 py-4'>
        <div className='container'>
          <footer className='flex items-center justify-center'>
            <div className='flex items-center gap-x-2'>
              <div className='flex items-center text-white gap-x-2'>
                Copyringht <FaRegCopyright /> Created By
                <a
                  href='#https://instagram.com/farhand.rf'
                  className='text-cyan-400 hover:text-cyan-500'
                >
                  FarhanReizha
                </a>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
