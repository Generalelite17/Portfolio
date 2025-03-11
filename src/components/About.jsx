// src/components/About.jsx
import React from 'react';
import './About.css'; // Optional: if you want component-specific styles
import { IMG_0000, IMG_0002, IMG_0003, IMG_1979, IMG_0004} from '../images';


const About = () => {
    return (
      <>
        <div className="header-section">
          <img src={IMG_0000} alt="header-image" />
        </div>
        <div className = "container">
          <div className="about-content">
            <div className="intro-section">
                <div className = "intro-text">
                    <h1>Introducing Myself</h1>
                    <p>
                        Hi, I'm Emmanuel Cardenas. I was raised in Midland, Texas, and proudly call West Texas home. If you're not familiar with West Texas, think of endless oil fields, rugged landscapes, or the football movie "Permain." 
                        I'm an outgoing extrovert who thrives on social interactions—I love attending events, joining new groups, and forging lasting friendships wherever I go. I eagerly embrace hard tasks and challenging problems, constantly seeking opportunities to learn and grow. Whether it's through engaging conversations, new adventures, or tackling complex challenges, I’m always driven to expand my knowledge and refine my problem-solving skills.
                    </p>
                </div>
                <img src = {IMG_0002}
                    alt = "personal_content"
                    className = "intro-img"
                />
            </div>
            
            <div className="professional">
              <h1>Academic Journey</h1>
              <p>
                I began my academic journey at the University of Texas of the Permian Basin (UTPB), where I earned my Bachelor's Degree in Mechanical Engineering. This laid the foundation for my analytical mindset and honed my problem-solving skills. During my time at UTPB, I actively engaged in hands-on projects and collaborative work, which helped me understand the practical applications of engineering principles.
              </p>
              <p>
                Shortly after, I earned my EIT certification, reinforcing my commitment to professional excellence. This milestone not only validated my technical abilities but also set the stage for my future endeavors in the field.
              </p>
              <p>
                A few years after graduating, I initially pursued an MBA to broaden my business acumen and gain a strategic perspective on operations and management. However, as I delved deeper into my studies and professional experiences, my passion for deep problem-solving and technology became undeniable. I realized that leveraging software could be the key to innovative solutions in engineering and beyond.
              </p>
              <p>
                Today, I'm channeling that drive by pursuing a Master's in Computer Science, with an expected graduation in May 2025. This transition marks a significant pivot in my career—a deliberate move towards blending my engineering background with modern software development. I am excited about the prospect of developing cutting-edge solutions that integrate analytical rigor with technological innovation, and I look forward to applying these skills in roles that challenge me to think critically and creatively.
              </p>
            </div>
            <div className="hobbie-section">
                {/* Left Column */}
                <div className="hobbie-col1">
                    <div className="hobbie-text">
                    <h1>Hobbies</h1>
                    <p>
                        I stay active in various ways. While I'm not a fan of running, you'll often find me on the golf course, playing any sport, snowboarding or pushing my limits in the weight room. When I need to unwind, I enjoy exploring a natural trail, relaxing by a lake, attending sporting events, and spending time with my friends.
                    </p>
                    </div>
                    <img
                        src={IMG_0004}
                        alt="Hobbies illustration"
                        className="hobbie-img"
                    />
                </div>

                {/* Right Column */}
                <div className="hobbie-col2">
                    <img
                        src={IMG_1979}
                        alt="Hobbies illustration"
                        className="hobbie-img"
                    />
                    <img
                        src={IMG_0003}
                        alt="Hobbies illustration"
                        className="hobbie-img"
                    />
                    <div className="hobbie-text">
                        <p>
                        Even though I’m known for my active, social side, I let my inner nerd out. I live for marathon anime sessions—whether it's a light-hearted rom-com like Golden Hour or an action-packed series like Solo Leveling. 
                        And when I'm not watching anime, you can catch me playing strategy games like Civilization VI or Age of Wonders IV. 
                        </p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default About;
  