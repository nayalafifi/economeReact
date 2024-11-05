import React from 'react';
import './dashboard.css';

const Dashboard = ({ navigateTo }) => {
  return (
    <div className="dashboard">
      {/* Sidebar */}
      <aside className="sidebar">
        <h1 className="logo">EconoMe</h1>
        <nav className="nav">
          <ul>
            <li><a href="#" className="nav-link active">Dashboard</a></li>
            <li><a href="#" className="nav-link">Your Profile</a></li>
            <li><a href="#" className="nav-link">MarketPlace</a></li>
            <li><a href="#" className="nav-link">Settings</a></li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
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
