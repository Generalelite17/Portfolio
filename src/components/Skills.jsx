import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = {
    programmingLanguages: ["Java", "Python", "JavaScript", "HTML", "CSS", "SQL", "TypeScript"],
    frameworksLibraries: ["React.js", "Node.js", "Express", "Flask", "FastAPI", "Tailwind CSS"],
    databases: ["MongoDB", "SQL"],
    devOpsCI_CD: ["GitHub Actions", "Git", "Docker", "AWS", "GCP", "Heroku"],
    softwareTools: ["Eclipse", "AutoCAD", "ArcGIS", "Postman", "VS Code", "IntelliJ IDEA"],
    professional: ["Project Management", "Civil Engineering", "Mechanical Engineering", "Software Engineering", "Data Analysis"],
    languages: ["English", "Spanish"]
  };

  return (
    <div className='skills-wrapper'> 
        <div className="skills-container">
            <h2 className="skills-header">Technical Skills</h2>
            <div className="skills-grid">
                <SkillCategory title="Programming Languages" skills={skills.programmingLanguages} />
                <SkillCategory title="Frameworks & Libraries" skills={skills.frameworksLibraries} />
                <SkillCategory title="Databases" skills={skills.databases} />
                <SkillCategory title="DevOps & CI/CD" skills={skills.devOpsCI_CD} />
                <SkillCategory title="Software & Tools" skills={skills.softwareTools} />
                <SkillCategory title="Professional Skills" skills={skills.professional} />
                <SkillCategory title="Languages" skills={skills.languages} />
            </div>
        </div>
    </div>    
  );
};

const SkillCategory = ({ title, skills }) => (
  <div className="skill-category">
    <h3 className="category-title">{title}</h3>
    <ul className="skill-list">
      {skills.map((skill, index) => (
        <li key={index}>{skill}</li>
      ))}
    </ul>
  </div>
);

export default Skills;

