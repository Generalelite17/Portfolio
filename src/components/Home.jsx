// src/components/Home.jsx
import React from 'react';
import './Home.css';
import { IMG_0000 } from '../images';



const Home = () => {
  return (
    <section className="home-container">
      <div className="background-image" style={{ backgroundImage: `url(${IMG_0000})` }}>
        <div className="home-wrapper-container">
          <h1>I'M EMMANUEL CARDENAS</h1>
          <p2>Welcome to my portfolio!</p2>
        </div>
      </div>
  </section>
  );
};

export default Home;
