import React, { useState } from 'react';
import './WorkExperience.css';

const experiences = [
  {
    id: 1,
    title: "Engineer II",
    jobdates: "Jan 2023 - Nov 2024",
    companyInfo: "Plummer Associate - Remote",
    description:
      "Successfully managed concurrent projects across diverse markets, including telecommunications infrastructure for private clients and municipal authorities.",
    details: [
      "Designed civil infrastructure for dry utilities (telecom) catering to both private and municipal clients.",
      "Provided expertise to resolve utility conflicts between existing and proposed infrastructure (roadway, drainage, etc.).",
      "Maintained open communication and coordination with clients.",
      "Collaborated with engineers and technical experts to create plans using AutoCAD and GIS applications.",
      "Led and conducted interviews to identify and recruit talented individuals.",
      "Trained new team members in processes, documentation, and software utilization."
    ]
  },
  {
    id: 2,
    title: "Project Manager",
    jobdates: "Jul 2020 - Aug 2022",
    companyInfo: "Oncor Electric Delivery - Midland, TX",
    description:
      "Managed residential and commercial/industrial projects through the construction process, ensuring timely completion and accurate project documentation.",
    details: [
      "Reduced project timelines by 33% compared to the company's average.",
      "Expertly handled a portfolio of up to 60 projects simultaneously.",
      "Managed projects ranging from $8,000 to $100,000 in value, totaling approximately $750,000.",
      "Demonstrated strong project coordination, documentation, and time management skills."
    ]
  }
];

const WorkExperience = () => {
  const [activeId, setActiveId] = useState(null);

  const toggleAccordion = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className="experience-wrapper">
    <div className="work-experience">
      <h1 className="header">Professional Experience</h1>
      {experiences.map((exp) => (
        <div key={exp.id} className={`accordion ${activeId === exp.id ? "active" : ""}`}>
          <div className="title" onClick={() => toggleAccordion(exp.id)}>
            <div className="title-info">
              <div className="job-title">{exp.title}</div>
              <div className="dates-toggle">
                <div className='job-dates'>{exp.jobdates}</div>
                <div className="plus-minus-toggle">{activeId === exp.id ? "-" : "+"}</div>
                {/* <div className="company-info">{exp.companyInfo}</div> */}
              </div>
            </div>  
          </div>
          <div
            className="expand"
            style={{
              maxHeight: activeId === exp.id ? "1000px" : "0",
              opacity: activeId === exp.id ? 1 : 0,
            }}
          >
            <div className="inner">
              <div className='inner-info'>
                <div className="company-info">{exp.companyInfo}</div>
              </div>
              <p>{exp.description}</p>
              <ul>
                {exp.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>  
  );
};

export default WorkExperience;
