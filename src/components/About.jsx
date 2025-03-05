// src/components/About.jsx
import React from 'react';
import './About.css'; // Optional: if you want component-specific styles
import IMG_8071 from '../images/IMG_8071.jpg'; // Adjust the path as necessary

const About = () => {
  return (
    <div className='page about'>
      <h1>About Me</h1>
      <div className="about-content">
            <img
                src={IMG_8071}
                alt='Personal Professional'
                className='about-image'
            />
            <div className='intro'>
                <p> Hi, I'm Emmanuel Cardenas. I was raised in Midland, Texas, and proudly call West Texas home. If you're not familiar with West Texas, think of endless oil fields, rugged landscapes, or the football movie "Permain." 
                    I'm an outgoing extrovert who thrives on social interactions—I love attending events, joining new groups, and forging lasting friendships wherever I go. I eagerly embrace hard tasks and challenging problems, constantly seeking opportunities to learn and grow. Whether it's through engaging conversations, new adventures, or tackling complex challenges, I’m always driven to expand my knowledge and refine my problem-solving skills.
                </p>
            </div> 
            <div className='professional'>
                <p>I began my academic journey at the University of Texas of the Permian Basin (UTPB), where I earned my Bachelor's Degree in Mechanical Engineering. This laid the foundation for my analytical mindset and honed my problem-solving skills. During my time at UTPB, I actively engaged in hands-on projects and collaborative work, which helped me understand the practical applications of engineering principles.
                </p>
                <p>Shortly after, I earned my EIT certification, reinforcing my commitment to professional excellence. This milestone not only validated my technical abilities but also set the stage for my future endeavors in the field.
                </p>
                <p>A few years after graduating, I initially pursued an MBA to broaden my business acumen and gain a strategic perspective on operations and management. However, as I delved deeper into my studies and professional experiences, my passion for deep problem-solving and technology became undeniable. I realized that leveraging software could be the key to innovative solutions in engineering and beyond.
                </p>
                <p>Today, I'm channeling that drive by pursuing a Master's in Computer Science, with an expected graduation in May 2025. This transition marks a significant pivot in my career—a deliberate move towards blending my engineering background with modern software development. I am excited about the prospect of developing cutting-edge solutions that integrate analytical rigor with technological innovation, and I look forward to applying these skills in roles that challenge me to think critically and creatively.
                </p>
            </div>

            <div className='hobbies'>
                <p>
                I stay active in a variety of ways. While I'm not a fan of running, you'll often find me on the golf course, playing volleyball or basketball, or pushing my limits in the weight room. 
                I believe that staying physically active not only energizes me but also keeps my mind sharp. When I need to unwind, I enjoy long walks or small hikes that help me reset and clear my head.
                </p>
                <p>
                Even though I’m known for my active, social side, I let my inner nerd out. I live for marathon anime sessions—whether it's a light-hearted rom-com like Golden Hour or an action-packed series like Solo Leveling. 
                And when I'm not watching anime, you can catch me playing strategy games like Civilization VI or Age of Wonders IV.
                </p>
            </div>
        </div>
    </div>
  );
};

export default About;
