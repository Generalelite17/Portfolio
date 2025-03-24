// src/components/WorkExperience.jsx
import React from 'react';
import './WorkExperience.css';

const WorkExperience = () => {
  return (
    <div className="work-experience">
      <h1>Work Experience</h1>
      <div className="timeline">
        <div className="timeline-block">
          <div className="top-timeline" data-day="1986">
            <img
              src="https://optiver.com/wp-content/uploads/2022/06/oude-beurs-vloer-1-1.jpg"
              alt="Our first trade"
            />
          </div>
          <div className="bottom-timeline">
            <div className="timeline-day upper">1986</div>
            <h2>Our first trade</h2>
            <p>
              The Optiver story begins with a single trader on the floor of Amsterdam’s European Options Exchange.
            </p>
          </div>
        </div>
        <div className="timeline-block">
          <div className="top-timeline">
            <img
              src="https://optiver.com/wp-content/uploads/2022/06/166A7524-2048x1453-1.jpg"
              alt="Sydney office"
            />
          </div>
          <div className="bottom-timeline">
            <div className="timeline-day upper">1996</div>
            <h2>Sydney office</h2>
            <p>
              Optiver opens its Sydney office.
            </p>
          </div>
        </div>
        {/* Add more timeline blocks as needed */}
      </div>
    </div>
  );
};

export default WorkExperience;
