// Dashboard.js
import React, { useEffect, useState } from 'react';
import { fetchUsers } from './api';
import './dashboard.css';

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const userData = await fetchUsers();
        setUsers(userData);
      } catch (error) {
        console.error("Error fetching users:", error);
        setError("Failed to load users");
      } finally {
        setLoading(false);
      }
    };

    loadUsers();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="dashboard">
      <main className="main-content">
        <header className="header">
          <h2>Dashboard</h2>
          <button className="btn btn-primary">Add widget</button>
        </header>

        {/* Progress Cards */}
        <div className="card-grid">
          {['Budget', 'Goal 1', 'Goal 2'].map((title, index) => (
            <div key={index} className="card">
              <h3 className="card-title">{title}</h3>
              <div className="card-content">
                <span className="percentage">{[25, 79, 52][index]}%</span>
              </div>
            </div>
          ))}
        </div>

        {/* Expenses Chart */}
        <div className="card">
          <h3 className="card-title">Expenses</h3>
          <div className="chart-placeholder"></div>
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
