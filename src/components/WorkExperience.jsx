import React from 'react';
import './WorkExperience.css';

const WorkExperience = () => {
  return (
    <div className="work-experience">
      {/* Card for Engineer II at Plummer Associate Inc */}
      <div className='container2'>
      <div className="work-card">
        <div className="card-header">
          <h3>Engineer II</h3>
          <span>Plummer Associate Inc - Austin, TX | Jan 2023 - Nov 2024</span>
        </div>
        <p className="paragraph-left-text">
          Successfully managed concurrent projects across diverse markets, including telecommunications infrastructure for private clients and municipal authorities.
        </p>
        <ul>
          <li>Design civil infrastructure for dry utilities (telecom) catering to both private and municipal clients.</li>
          <li>Provided expertise to resolve utility conflicts between existing and proposed infrastructure, including roadway, drainage, and other utilities.</li>
          <li>Maintain open communication and coordination with clients as necessary.</li>
          <li>Collaborate with engineers and technical experts to create plans, primarily utilizing AutoCAD and GIS applications.</li>
          <li>Lead and conduct interviews to identify and recruit talented individuals.</li>
          <li>Train new team members in our processes, documentation, and software utilization.</li>
        </ul>
      </div>
      </div>

      {/* Card for Project Manager at Oncor Electric Delivery */}
      <div className="work-card">
        <div className="card-header">
          <h3>Project Manager</h3>
          <span>Oncor Electric Delivery - Midland, TX | Jul 2020 - Aug 2022</span>
        </div>
        <p className="paragraph-left-text">
          Managed residential and commercial/industrial projects through the construction process, ensuring timely completion and accurate project documentation.
        </p>
        <ul>
          <li>Reduced project timelines by 33% compared to the company's average.</li>
          <li>Expertly handled a portfolio of up to 60 projects simultaneously, demonstrating outstanding multitasking abilities.</li>
          <li>Effectively managed projects ranging from $8,000 to $100,000 in value, totaling approximately $750,000.</li>
          <li>Demonstrated strong project coordination, documentation, and time management skills.</li>
        </ul>
      </div>
    </div>
  );
};

export default WorkExperience;
