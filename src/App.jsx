import React from 'react';
import {
  Routes,
  Route,
} from "react-router-dom"
import SideNav from './components/SideNav';
import './index.css';
import Home from './pages/Home';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Home />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/sidenav" element={<SideNav />} />
        <Route path="/hero" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/footer" element={<Footer />} />

      </Routes>
    </>
  )
}

export default App