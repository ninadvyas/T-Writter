import React from 'react';
import { useState } from 'react';
import logo from '../assets/twritter.png'; // Replace with the actual path to your logo image

function Navbar() {
  const [active, setActive] = useState(false);

  return (
    <div className="relative top-6 left-1/2 -translate-x-1/2 h-12 rounded-full px-4 text-white bg-black flex justify-center items-center">
      <div className="absolute top-0 left-20 min-[320px]:text-center max-[600px]:left-0">
        <a href="/" rel='logo'>
          <img src={logo} alt="Logo" className="h-12" />
        </a>
      </div>
      <ul className="flex justify-center gap-4 border border-blue-500 rounded-full px-5 py-3">
        <li className="cursor-pointer duration-300">
          <a
            href="/about"
            rel='about'
            className="text-lg hover:text-gray-500 duration-300"
            onClick={() => setActive(!active)}
          >
            About
          </a>
        </li>
        <li className="cursor-pointer duration-300">
          <a
            href="https://github.com/ninadvyas/T-Writter"
            target='_blank'
            rel='noreferrer'
            className="text-lg hover:text-gray-500 duration-300"
          >
            Github
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;