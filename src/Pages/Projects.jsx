import React from 'react';
import { MdOutlineArrowOutward } from "react-icons/md";

function Projects() {
  const first = ['HTML', 'CSS', 'JavaScript', 'PHP'];
  const second = ['C#', '.net', 'MsSQL'];
  const third = ['React', 'Tailwind CSS', 'Java', 'MsSQL'];
  const fourth = ['NextJS','Tailwind CSS', 'Spotify API']

  return (
    <div className="min-h-screen font-Inter flex items-center justify-center">
      <div className="flex max-w-4xl mr-[10rem] gap-8 justify-center">
        <div className="w-1/3">
          <h1 className="text-[16px] mr-2 mt-[1rem] font-semibold text-blue-600 uppercase">My Projects</h1>
        </div>

        <div className="w-2/3 space-y-6">
          {/* The Gallery Café Restaurant Management System Card */}
          <div className='w-[550px] rounded-lg bg-opacity-40 text-teal-300 duration-100 transition-colors hover:bg-gray-600'>
            <div className='pt-4 pb-3'>
                <div className='ml-4'> {/* Wrap all content inside this div */}
              <h2 className="text-[15px] text-white transition-colors hover:text-teal-100">The Gallery Cafe Restaurant Management System <span><MdOutlineArrowOutward className='inline-block ml-3 mb-1' /></span> </h2>
              <h2 className='text-gray-400 mt-1'>2024</h2>
              <p className="text-gray-400 w-[450px] text-balance">A comprehensive management system for restaurant operations including reservations,menu management, and more.</p>
              <div className='flex text-[13px]'>
                <ul className="flex mt-4 space-x-4">
                  {first.map((language, index) => (
                    <li key={index} className="flex justify-center rounded-3xl w-auto px-2 py-1 bg-teal-950 font-medium text-teal-300">
                      {language}
                    </li>
                  ))}
                </ul>
              </div>
              </div>
            </div>
          </div>


          <div className='w-[550px] rounded-lg bg-opacity-40 text-teal-300 duration-100 transition-colors hover:bg-gray-600'>
            <div className='pt-4 pb-3'>
                <div className='ml-4'> 
              <h2 className="text-[15px] text-white transition-colors hover:text-teal-100">Spotify Clone <span><MdOutlineArrowOutward className='inline-block ml-3 mb-1' /></span></h2>
              <h2 className='text-gray-400 mt-1'>2024</h2>
              <p className="text-gray-400 w-[400px] text-balance">A comprehensive management system for restaurant operations including reservations,menu management, and more.</p>
              <div className='flex text-[13px]'>
                <ul className="flex mt-4 space-x-4">
                  {fourth.map((language, index) => (
                    <li key={index} className="flex justify-center rounded-3xl w-auto px-2 py-1 bg-teal-950 font-medium text-teal-300">
                      {language}
                    </li>
                  ))}
                </ul>
              </div>
              </div>
            </div>
          </div>


          <div className='w-[550px] rounded-lg bg-opacity-40 text-teal-300 duration-100 transition-colors hover:bg-gray-600'>
            <div className='pt-4 pb-3'>
                <div className='ml-4'> 
              <h2 className="text-[15px] text-white transition-colors hover:text-teal-100">Salon Yehelee Web App <span><MdOutlineArrowOutward className='inline-block ml-3 mb-1' /></span></h2>
              <h2 className='text-gray-400 mt-1'>2024</h2>
              <p className="text-gray-400 w-[400px] text-balance">A comprehensive management system for restaurant operations including reservations,menu management, and more.</p>
              <div className='flex text-[13px]'>
                <ul className="flex mt-4 space-x-4">
                  {third.map((language, index) => (
                    <li key={index} className="flex justify-center rounded-3xl w-auto px-2 py-1 bg-teal-950 font-medium text-teal-300">
                      {language}
                    </li>
                  ))}
                </ul>
              </div>
              </div>
            </div>
          </div>

          <div className='w-[550px] rounded-lg bg-opacity-40 text-teal-300 duration-100 transition-colors hover:bg-gray-600'>
            <div className='pt-4 pb-3'>
                <div className='ml-4'> {/* Wrap all content inside this div */}
              <h2 className="text-[15px] text-white transition-colors hover:text-teal-100">The Gallery Café Restaurant Management System <span><MdOutlineArrowOutward className='inline-block ml-3 mb-1' /></span></h2>
              <h2 className='text-gray-400 mt-1'>2024</h2>
              <p className="text-gray-400 w-[400px] text-balance">A comprehensive management system for restaurant operations including reservations,menu management, and more.</p>
              <div className='flex text-[13px]'>
                <ul className="flex mt-4 space-x-4">
                  {first.map((language, index) => (
                    <li key={index} className="flex justify-center rounded-3xl w-auto px-2 py-1 bg-teal-950 font-medium text-teal-300">
                      {language}
                    </li>
                  ))}
                </ul>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
