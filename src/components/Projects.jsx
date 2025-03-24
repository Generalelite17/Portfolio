import React from "react";
import "./Projects.css";
import {IMG_0011} from "../images";

const Projects = () => {
    return (
        <>
            <section class = "header-section">
            <div 
                    style={{
                        backgroundImage: `url(${IMG_0011})`,
                        backgroundSize: "100%",
                        backgroundPosition: "0 -950px",
                        backgroundRepeat: "no-repeat",
                        width: "100%",
                        height: "375px",
                        transform: "scale(1)"
                        
                    }}
                />
            </section>
            <div> 
                <h1>Projects</h1>
                <p> Welcome to my project tab</p>
            </div>
        </> 
    );
};

export default Projects;