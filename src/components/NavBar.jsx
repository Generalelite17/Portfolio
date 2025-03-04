// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="Navbar" style={{ background: 'lightblue', padding: '10px' }}>
      <ul>
        <li><Link to="/">Home</Link></li> 
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/work">WorkExperience</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
