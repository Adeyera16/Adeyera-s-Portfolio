import React from 'react';
import SideNav from './components/SideNav';
import './index.css';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';

function App() {
  return (
    <div 
    className=''>
      <SideNav />
      <Hero />
      {/* <About /> */}
      <Projects />
    </div>
  )
}

export default App