import React, { useEffect, useState } from "react";
import "./Profile.css";

const Profile = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        // Get the email from localStorage
        const email = localStorage.getItem("email");
        if (!email) {
          setError("User email not found. Please log in again.");
          return;
        }

        // Fetch the user details using the email
        const emailResponse = await fetch(`http://127.0.0.1:8000/users/email/${email}`);
        if (!emailResponse.ok) throw new Error("Failed to fetch user ID");

        const emailData = await emailResponse.json();

        // Fetch the user details using the user_id
        const userId = emailData.user_id;
        const userResponse = await fetch(`http://127.0.0.1:8000/users/${userId}`);
        if (!userResponse.ok) throw new Error("Failed to fetch user info");

        const userData = await userResponse.json();
        setUserInfo(userData);
      } catch (error) {
        console.error("Error fetching user info:", error);
        setError(error.message);
      }
    };

    fetchUserInfo();
  }, []);

  if (error) return <div>Error: {error}</div>;
  if (!userInfo) return <div>Loading...</div>;

  return (
    <div className="profile-container">
      <h2>User Profile</h2>
      <div className="profile-details">
        <div className="profile-info">
          <h3>Personal Information</h3>
          <p><strong>Name:</strong> {userInfo.name}</p>
          <p><strong>Email:</strong> {userInfo.email}</p>
          <p><strong>DOB:</strong> {userInfo.dob}</p>
        </div>

        <div className="finance-stats">
          <h3>Financial Summary</h3>
          <div className="stat"><span>Total Budget:</span><span>${userInfo.income}</span></div>
          <div className="stat"><span>Spent This Month:</span><span>$1,200</span></div>
          <div className="stat"><span>Savings:</span><span>$5,500</span></div>
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
