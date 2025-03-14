// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="Navbar">
      <ul>
        <li><Link to="/">Home</Link></li> 
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/work">Work Experience</Link></li>
        <li><Link to="/about">About Me</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
