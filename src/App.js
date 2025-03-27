import './App.css';
import React from 'react';

import Navbar from './components/Navbar';
import Home from './components/Home';
import WorkExperience from './components/WorkExperience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import About from './components/About';


function App() {
  return (
    <div className="App">
      <Navbar />
      <section id="home">
        <Home />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="work">
        <WorkExperience />
      </section>
      <section id="About">
        <About />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;
