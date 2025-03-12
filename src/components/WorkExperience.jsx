import React from 'react';
import './WorkExperience.css';
import IMG_0000 from '../images/IMG_0000.jpg';

const WorkExperience = () => {
  return (
    <div className="work-experience">
        <h1>Work Experience</h1>
        
        {/* Job Entry 1 */}
        <div className="job-entry">
            <div className="job-left">
           {/*} <img src={IMG_0000} alt="Company Logo" />*/}
            </div>
            <div className="job-timeline">
            <span className="job-date">2022 - Present</span>
            </div>
            <div className="job-right">
            <h2>Senior Software Engineer</h2>
            <h3>Tech Company XYZ</h3>
            <ul>
                <li>Led development of a high-traffic application.</li>
                <li>Optimized system performance by 30%.</li>
                <li>Mentored junior developers.</li>
            </ul>
            </div>
        </div>
        
        {/* Job Entry 2 */}
        <div className="job-entry">
            <div className="job-left">
            {/*<img src={IMG_0000} alt="Company Logo" />*/}
            </div>
            <div className="job-timeline">
            <span className="job-date">2020 - 2022</span>
            </div>
            <div className="job-right">
            <h2>Software Engineer</h2>
            <h3>Another Tech Company</h3>
            <ul>
                <li>Developed internal tools.</li>
                <li>Collaborated on scalable solutions.</li>
            </ul>
            </div>
        </div>
    </div>
  );
};

export default WorkExperience;
