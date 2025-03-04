import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import WorkExperience from './components/WorkExperience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import About from './components/About';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/work" element={<WorkExperience />} />
        <Route path="/contact" element={<Contact />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
