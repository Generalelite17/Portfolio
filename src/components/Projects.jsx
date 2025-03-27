import React from "react";
import "./Projects.css";
import { IMG_0013, IMG_0014, IMG_0015, IMG_0016, IMG_0017, IMG_0018} from '../images';


const Projects = () => {
  // Array of project objects – update the details as needed
  const projects = [
    {
      id: 1,
      title: "Stock Prediction App",
      description:
        "A machine learning project that predicts stock trends using historical data. Built with Python, Pandas, and scikit-learn, this project showcases my analytical and technical skills.",
      image: IMG_0013,
      link: "https://github.com/Generalelite17/Stock-Price-Prediction"
    },
    {
      id: 2,
      title: "Peer-to-Peer Network",
      description:
        "A decentralized peer-to-peer networking application for secure data sharing. This project demonstrates my knowledge in distributed systems and networking.",
      image: IMG_0014,
      link: "https://github.com/Generalelite17/Peer2Peer",
    },
    {
      id: 3,
      title: "Algorithm Performance Comparison",
      description:
        "Implemented and compared sorting, searching, shortest paths, MST, and max flow algorithms to evaluate running times and identify performance strengths.",
      image: IMG_0016,
      link: "https://github.com/Generalelite17",
    },
    {
        id: 4,
        title: "Bluetooth/Zigbee Handshake Simulator",
        description:
          "Simulated a Bluetooth/ZigBee handshake using a TCP client-server model to establish a shared session key and exchange encrypted packets.",
        image: IMG_0017,
        link: "https://github.com/Generalelite17",
      },
    {
      id: 5,
      title: "WPA3 Handshake Simulator",
      description:
        "Simulated the WPA3 client-AP four-way handshake using a TCP server and client to establish a shared session key and exchange encrypted packets via built-in cryptography libraries.",
      image: IMG_0018,
      link: "https://github.com/Generalelite17",
    },
    {
      id: 6,
      title: "Explore More on GitHub",
      description:
        "Discover a range of innovative projects, experiments, and code samples that showcase my passion for software development. Click here to explore my full portfolio of work on GitHub.",
      image: IMG_0015,
      link: "https://github.com/Generalelite17",
    },


  ];

  const gridClass = projects.length < 3 ? "projects-grid few" : "projects-grid";


  return (
    <div className="projects-container">
      <h1 className="header">Projects</h1>
      <div className={gridClass}>
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div
              className="project-image"
              style={{ backgroundImage: `url(${project.image})` }}
            />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
