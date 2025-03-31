import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <div className="skills-container">
      
      {/* Programming Languages */}
      <div className="skill-box">
        <div className="title-wrap flex">
          <div className="icon">
            <span className="mdi mdi-code-tags"></span>
          </div>
          <div className="title">
            <span className="top">Programming Languages</span>
          </div>
        </div>
        <div className="body-wrap">
          <div className="body">
            <ul>
              <li>Java</li>
              <li>Python</li>
              <li>JavaScript</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>SQL</li>
              <li>TypeScript</li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Frameworks & Libraries */}
      <div className="skill-box">
        <div className="title-wrap flex">
          <div className="icon">
            <span className="mdi mdi-library"></span>
          </div>
          <div className="title">
            <span className="top">Frameworks &amp; Libraries</span>
          </div>
        </div>
        <div className="body-wrap">
          <div className="body">
            <ul>
              <li>React.js</li>
              <li>Node.js</li>
              <li>Express</li>
              <li>Flask</li>
              <li>FastAPI</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Databases */}
      <div className="skill-box">
        <div className="title-wrap flex">
          <div className="icon">
            <span className="mdi mdi-database"></span>
          </div>
          <div className="title">
            <span className="top">Databases</span>
          </div>
        </div>
        <div className="body-wrap">
          <div className="body">
            <ul>
              <li>MongoDB</li>
              <li>SQL</li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* DevOps & CI/CD */}
      <div className="skill-box">
        <div className="title-wrap flex">
          <div className="icon">
            <span className="mdi mdi-cogs"></span>
          </div>
          <div className="title">
            <span className="top">DevOps &amp; CI/CD</span>
          </div>
        </div>
        <div className="body-wrap">
          <div className="body">
            <ul>
              <li>GitHub Actions</li>
              <li>Git</li>
              <li>Docker</li>
              <li>AWS</li>
              <li>GCP</li>
              <li>Heroku</li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Software & Tools */}
      <div className="skill-box">
        <div className="title-wrap flex">
          <div className="icon">
            <span className="mdi mdi-toolbox"></span>
          </div>
          <div className="title">
            <span className="top">Software &amp; Tools</span>
          </div>
        </div>
        <div className="body-wrap">
          <div className="body">
            <ul>
              <li>Eclipse</li>
              <li>AutoCAD</li>
              <li>ArcGIS</li>
              <li>Postman</li>
              <li>VS Code</li>
              <li>IntelliJ IDEA</li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Professional Skills */}
      <div className="skill-box">
        <div className="title-wrap flex">
          <div className="icon">
            <span className="mdi mdi-briefcase-check"></span>
          </div>
          <div className="title">
            <span className="top">Professional Skills</span>
          </div>
        </div>
        <div className="body-wrap">
          <div className="body">
            <ul>
              <li>Project Management</li>
              <li>Civil Engineering</li>
              <li>Mechanical Engineering</li>
              <li>Software Engineering</li>
              <li>Data Analysis</li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Languages */}
      <div className="skill-box">
        <div className="title-wrap flex">
          <div className="icon">
            <span className="mdi mdi-translate"></span>
          </div>
          <div className="title">
            <span className="top">Languages</span>
          </div>
        </div>
        <div className="body-wrap">
          <div className="body">
            <div>English, Spanish</div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Skills;
