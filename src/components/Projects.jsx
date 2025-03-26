import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import "./Projects.css";

const Projects = () => {
    return (
        <div className="projects">
            <h1>Projects</h1>
            <p>Welcome to my project tab</p>
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="2022 - Present"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<i className="fas fa-code"></i>}
                >
                    <h3 className="vertical-timeline-element-title">Project One</h3>
                    <h4 className="vertical-timeline-element-subtitle">Web Development</h4>
                    <p>
                        A brief description of project one. You can mention the technologies used, challenges faced, and any notable features.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2020 - 2022"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<i className="fas fa-desktop"></i>}
                >
                    <h3 className="vertical-timeline-element-title">Project Two</h3>
                    <h4 className="vertical-timeline-element-subtitle">App Development</h4>
                    <p>
                        A description of project two, highlighting its key features and the impact it made.
                    </p>
                </VerticalTimelineElement>
                {/* Add more VerticalTimelineElement components for additional projects */}
            </VerticalTimeline>
        </div>
    );
};

export default Projects;
