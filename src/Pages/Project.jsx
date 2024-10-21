import React, { useState, useEffect } from 'react';
import Resume from '../assets/Folder/resume2016.pdf';
import { MdOutlineArrowOutward } from 'react-icons/md';

function Project() {
  const [animate, setAnimate] = useState(false);

  // Function to handle the floating arrow effect
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate((prev) => !prev); // Toggle animation state
    }, 1000); // Animation duration
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    
    <div className="mt-20 ml-[48rem] h-28">
      <a href={Resume} download className="relative border inline-flex items-center text-white font-semibold py-3 px-4   ">
        View Full Resume`
        <span className={`ml-2 ${animate ? 'translate-y-1' : '-translate-y-1'} transition-transform duration-500 ease-in-out`}>
          <MdOutlineArrowOutward size={24} />
        </span>
      </a>
    </div>
    
  );
}

export default Project;

