import React from 'react'
import { Link, Router, Routes } from 'react-router-dom'
import Home from './components/Home.jsx'
import About from './components/About'
import Contact from './components/Contact'

const Navbar = () => {
  return (
    <div>
      <Router>
        <nav>
            <li><Link to="/"></Link>Home</li>
            <li><Link to="/about" />About</li>
            <li><Link to="/contact" />Contact</li>       
        </nav>


        <Routes path="/" element={<Home />}/>
        <Routes path="/about" element={<About />}/>
        <Routes path="/contact" element={<Contact />}/>
      </Router>
    </div>
  )
}

export default Navbar
