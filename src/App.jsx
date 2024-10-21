import { useState } from 'react'
import './index.css'
import Hero from './Pages/Hero'
import Personal from './Pages/Personal'
import Backgorund from './Pages/Backgorund'
import Project from './Pages/Project'
import Projects from './Pages/Projects'

function App() {
  return (
    <Backgorund>
      <Hero/>
      <Personal/>
      <Project/>
      <Projects/>
    </Backgorund>
    
    
    
  )
}

export default App
