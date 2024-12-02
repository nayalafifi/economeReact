import React, { useEffect, useState } from "react";
import "./dashboard.css";

const logo = process.env.PUBLIC_URL + "/econoMe_logo.png";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const userId = localStorage.getItem("user_id"); // Get user_id from localStorage
      if (!userId) {
        setError("No user data found. Please log in again.");
        return;
      }

      try {
        const response = await fetch(`http://127.0.0.1:8000/users/${userId}`);
        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setError(error.message);
      }
    };

    fetchUser();
  }, []);

  if (error) return <div className="error-message">{error}</div>;
  if (!user) return <div>Loading...</div>;

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h2>Dashboard</h2>
        <button className="btn btn-primary">Add widget</button>
        {/* <img src={logo} alt="EconoME Logo" className="logo" /> */}
      </header>

      <main className="main-content">
        {/* User Information */}
        <div className="user-info">
          <h3>User Information</h3>
          <div className="user-card">
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Date of Birth:</strong> {user.dob}</p>
            <p><strong>Income:</strong> ${user.income}</p>
          </div>
        </div>

        {/* Progress Cards */}
        <div className="card-grid">
          <div className="card">
            <h3 className="card-title">Budget</h3>
            <div className="card-content">
              <span className="percentage">25%</span>
            </div>
          </div>
          <div className="card">
            <h3 className="card-title">Goal 1</h3>
            <div className="card-content">
              <span className="percentage">79%</span>
            </div>
          </div>
          <div className="card">
            <h3 className="card-title">Goal 2</h3>
            <div className="card-content">
              <span className="percentage">52%</span>
            </div>
          </div>
        </div>

        {/* Expenses Chart */}
        <div className="card">
          <h3 className="card-title">Expenses</h3>
          <div className="chart-placeholder">[Chart Placeholder]</div>
        </div>

        {/* Weekly Expenses Table */}
        <div className="card">
          <h3 className="card-title">Weekly Expenses</h3>
          <table className="table">
            <thead>
              <tr>
                <th>Week</th>
                <th>Type</th>
                <th>Dates</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Week 12</td>
                <td><span className="badge badge-overdue">Overdue</span></td>
                <td>01 Dec 2023</td>
                <td><button className="btn btn-link">Edit</button></td>
              </tr>
              <tr>
                <td>Week 11</td>
                <td><span className="badge badge-completed">Completed</span></td>
                <td>11 Dec 2024</td>
                <td><button className="btn btn-link">Edit</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
