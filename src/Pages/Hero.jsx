import React, { Suspense } from 'react'
import hi from '../assets/Images/wave.png'
import pointRight from '../assets/Images/pointright.png'
import man from '../assets/Images/man.png'
import star from '../assets/Images/star.json'
import Lottie from 'lottie-react'


function Hero() {
  return (
    <div className=' min-h-screen font-Inter'>

        <div className=' flex flex-col w-[41rem] text-left h-auto ml-72'>
            <div className='mt-[15rem] text-white'>
            <div className='text-5xl  '>Hello ! <img src={hi} alt='wave' className='inline-block ml-2 w-10 h-10  ' /></div>
            <div className='text-4xl font-normal  mt-16 leading-[4rem]'>I'm <span className='bg-yellow-300  text-gray-900 p-2 font-medium' >Ishira Pahasara</span>,a design-minded <Lottie animationData={star} loop={true} className='inline-block w-[3.5rem] h-[3.5rem] animate-spin  ' /> front-end software engineer focused on building beautiful interfaces & experiences. <img src={man} alt="man" className='inline-block  w-12 h-12 ' /> </div>
            <div className='text-2xl font-medium mt-24'>Get in touch  <img src={pointRight} alt='pointright' className='inline-block mb-2 ml-2 w-6 h-6  ' /><a 
  href="mailto:ishira.pahasara@icloud.com?subject=Hello%20Ishira&body=Hi%20there,%20I%20wanted%20to%20get%20in%20touch%20with%20you!" 
  className='border-b-4 ml-2 border-blue-500 hover:bg-blue-500 hover:text-white transition duration-300'>
  ishira.pahasara@icloud.com
</a></div>
            </div>
        
        </div>

    </div>
  )
}

export default Hero   