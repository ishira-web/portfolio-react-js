import React, { useState, useEffect } from 'react';
import Hero from './Hero';
import Personal from './Personal';
// import { Canvas } from '@react-three/fiber'
// import { Environment, OrbitControls } from '@react-three/drei'
// import Robot from '../assets/Images/Scene'
import Project from './Project';
import Projects from './Projects';
import Footer from './Footer';


function Background() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0F172A] overflow-x-hidden overflow-y-auto">
      <div
        className="fixed w-60 h-60 bg-gradient-to-r from-indigo-600  to-purple-600   opacity-40 rounded-full blur-3xl pointer-events-none transition-all ease-out duration-0"
        style={{
          left: `${mousePosition.x - 96}px`, 
          top: `${mousePosition.y - 96}px`,
        }}
      ></div>
      <div className="relative z-10">
        <Hero />
        <Personal />
        <Project/>
        <Projects/>
        <Footer/>
      </div>
    </div>
  );
}

export default Background;
