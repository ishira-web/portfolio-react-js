import React from 'react';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaGoodreads } from "react-icons/fa";

function Footer() {
  return (
    <div className='min-h-[10rem] font-Inter flex gap-[30rem] justify-center mt-10'>
      <div className='flex flex-row gap-3 mt-16 text-gray-500'>
        {/* Add your profile links in the href attributes */}
        <a href="https://github.com/your-github-profile" target="_blank" rel="noopener noreferrer">
          <FaGithub className='w-7 h-7 hover:text-gray-300 transition-colors duration-150' />
        </a>
        <a href="https://linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className='w-7 h-7 hover:text-gray-300 transition-colors duration-150' />
        </a>
        <a href="https://x.com/pahazara" target="_blank" rel="noopener noreferrer">
          <FaXTwitter className='w-7 h-7 hover:text-gray-300 transition-colors duration-150' />
        </a>
        <a href="https://instagram.com/your-instagram-profile" target="_blank" rel="noopener noreferrer">
          <FaInstagram className='w-7 h-7 hover:text-gray-300 transition-colors duration-150' />
        </a>
        <a href="https://www.goodreads.com/user/show/182993384?ref=nav_profile_l" target="_blank" rel="noopener noreferrer">
          <FaGoodreads className='w-7 h-7 hover:text-gray-300 transition-colors duration-150' />
        </a>
      </div>
      <div className='text-gray-500 w-[380px] text-sm  leading-[25px]'>
        <h1>
          Loosely designed in <span className='font-semibold text-gray-400'>Figma</span> and coded in <span className='font-semibold text-gray-400'>Visual Studio</span> Code by yours truly. Built with <span className='font-semibold text-gray-400'>React JS</span> and <span className='font-semibold text-gray-400'>Tailwind CSS</span>, deployed with Vercel. All text is set in the <span className='font-semibold text-gray-400'>Inter</span> Typeface.
        </h1>
      </div>
    </div>
  );
}

export default Footer;
