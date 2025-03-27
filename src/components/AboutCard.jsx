import React, { useState } from "react";
import "./About.css";

const AboutCard = ({ title, summary, details, images, alignRight }) => {
  const [open, setOpen] = useState(false);
  
  return (
    <div className={`about-card ${alignRight ? "align-right" : "align-left"}`} onClick={() => setOpen(!open)}>
      <h2>{title}</h2>
      <p>{summary}</p>
      {open && (
        <div className="expanded-details">
          <p>{details}</p>
          <div className="image-scroll">
            {images.map((src, index) => (
              <img key={index} src={src} alt={`${title} - ${index + 1}`} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutCard;
