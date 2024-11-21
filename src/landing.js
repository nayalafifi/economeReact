import React from 'react';
import './landing.css';
import { useNavigate } from 'react-router-dom';


function Landing() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/login'); // Programmatic navigation
  };

  return (
    <div className="landing-container">
      <div className="brand-name">EconoME</div>
      <div className="landing-content">
        <div className="text-content">
          <h1>
            Finance made <span className="highlight">personal</span>
          </h1>
          <p>
            Automatically download & categorize transactions from all your accounts for a
            complete picture of your finances.
          </p>
          <button onClick={handleGetStarted} className="get-started-button">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Landing;
