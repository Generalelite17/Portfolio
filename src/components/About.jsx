import React from "react";
import AboutCard from "./AboutCard";
import "./About.css";
import { IMG_0002, IMG_0005, IMG_0007, IMG_0003, IMG_1979 } from "../images"; // Adjust your imports as needed

const About = () => {
  return (
    <div className="about-wrapper">
      <div className="about-summary">
        <div className="about-summary-left">
          <h1>My Story</h1>
          <p>
            Passionate engineer with a strong drive for continuous learning and a curious mindset.
          </p>
          <p>
            Holder of an FE certificate and a Bachelor's Degree in Mechanical Engineering,
            currently pursuing a Master's in Computer Science.
          </p>
          <p>
            Enthusiastic about AI, machine learning, and data science, eager to contribute and thrive in roles at the
            intersection of technology and innovation.
          </p>
        </div>
      </div>
      <div className="about-container">
            <AboutCard
            title="Introducing Myself"
            note="Who am I?"
            summary="Hi, I'm Emmanuel Cardenas. Raised in Midland, Texas, I'm an outgoing extrovert..."
            details={`Hi, I'm Emmanuel Cardenas. I was raised in Midland, Texas, and proudly call West Texas home.
                                If you're not familiar with West Texas, think of endless oil fields, rugged landscapes, or the football movie "Permian."
                                I'm an outgoing extrovert who thrives on social interactions — I love attending events, joining new groups, and forging lasting friendships wherever I go.`}
            images={[IMG_0002]}
            alignRight={false}
            />

            <AboutCard
            title="Academic Journey"
            note="Where did I go to school?"
            summary="My academic journey began at UTPB, earning a Bachelor's Degree in Mechanical Engineering..."
            details={`I began my academic journey at the University of Texas of the Permian Basin (UTPB), where I earned my Bachelor's Degree in Mechanical Engineering. 
                        This laid the foundation for my analytical mindset and honed my problem-solving skills.
                        Shortly after, I earned my EIT certification, reinforcing my commitment to professional excellence.
                        A few years after graduating, I initially pursued an MBA but discovered my true passion lay in technology and problem-solving.`}
            images={[IMG_0005, IMG_0007]}
            alignRight={true}
            className="academic"
            />

            <AboutCard
            title="Hobbies"
            note="Who am I outside of work?"
            summary="I'm active in various ways—from golf and snowboarding to intense gym sessions..."
            details={`I stay active in various ways. While I'm not a fan of running, you'll often find me on the golf course, playing any sport, snowboarding, or pushing my limits in the weight room.
                        When I need to unwind, I enjoy exploring natural trails, relaxing by a lake, attending sporting events, and spending time with friends.

                        Even though I’m known for my active, social side, I let my inner nerd out. I live for marathon anime sessions—whether it's a light-hearted rom-com or an action-packed series.`}
            images={[IMG_1979, IMG_0003]}
            alignRight={false}
            className="hobbies"
            />
      </div>
    </div>
  );
};

export default About;
