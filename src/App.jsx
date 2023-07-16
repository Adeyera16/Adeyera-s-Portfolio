import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import SideNav from './components/SideNav';
import './index.css';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills'

function App() {
  return (
    <BrowserRouter>
          <SideNav />
          <Hero />
          <About /> 
          <Projects />
          <Skills />
    </BrowserRouter>
    
  )
}

export default App