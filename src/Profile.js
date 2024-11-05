import React from 'react';
import './Profile.css';

const Profile = () => {
  return (
    <div className="profile-container">
      <h2>User Profile</h2>
      <div className="profile-details">
        <div className="profile-info">
          <h3>Personal Information</h3>
          <p><strong>Name:</strong> John Doe</p>
          <p><strong>Email:</strong> johndoe@example.com</p>
          <p><strong>Member Since:</strong> January 2023</p>
        </div>
        
        <div className="finance-stats">
          <h3>Financial Summary</h3>
          <div className="stat">
            <span>Total Budget:</span>
            <span>$20,000</span>
          </div>
          <div className="stat">
            <span>Spent This Month:</span>
            <span>$1,200</span>
          </div>
          <div className="stat">
            <span>Savings:</span>
            <span>$5,500</span>
          </div>
        </div>
      </div>

      <div className="recent-activity">
        <h3>Recent Activity</h3>
        <ul>
          <li>Groceries - $50</li>
          <li>Gym Membership - $30</li>
          <li>Utilities - $75</li>
          <li>Dining Out - $40</li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
