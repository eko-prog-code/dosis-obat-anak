// File: src/pages/Home.js
import React from 'react';
import LostAcef from './LostAcef';
import './Home.css'; // Import the CSS file for styling

const Home = () => {
  return (
    <div className="home-container">
      <h1>Dosis Obat Anak</h1>
      <p>This is the Home page of the application.</p>
      <LostAcef />
    </div>
  );
};

export default Home;
