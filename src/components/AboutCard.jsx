import React, { useState } from "react";
import "./About.css";
import Modal from "./Modal";
import Carousel from "./Carousel";

const AboutCard = ({ title, note, summary, details, details1, details2, images, alignRight, className }) => {
  const [modalOpen, setModalOpen] = useState(false); // Define state for modal

  return (
    <>
      <div
        className={`grid-item ${alignRight ? "align-right" : "align-left"} ${className || ""}`}
        onClick={() => setModalOpen(true)}
        tabIndex="0"
        role="button"
        aria-expanded={modalOpen}
      >
        <div className="card-wrap waypoint animated slide-up">
          <div className="overflow-wrap">
            <div className="card">
              <img src={images[0]} alt={title} />
            </div>
          </div>
          <div className="text">
            <div className="bold">{title}</div>
            <div className="text-overlay">
              <div className="highlight">{note}</div>
              <div className="slideup">Click for More</div>
            </div>
          </div>
        </div>
      </div>

      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
          <div className="carousel-container">
            <Carousel slides={images} />
          </div>
          <div className="modal-content-text">
            <h2>{title}</h2>
            <p>{details}</p>
            <p>{details1}</p>
            <p>{details2}</p> 
          </div> 
      </Modal>
    </>
  );
};

export default AboutCard;
