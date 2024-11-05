import React from 'react';
import './dashboard.css';

const Dashboard = ({ navigateTo }) => {
  return (
    <div className="dashboard-layout">
      <aside className="side-menu">
        <h1 className="app-title">EconoMe</h1>
        <nav>
          <ul>
            <li onClick={() => navigateTo('dashboard')} className="nav-link">
              Dashboard
            </li>
            <li onClick={() => navigateTo('profile')} className="nav-link">
              Your Profile
            </li>
            <li onClick={() => navigateTo('marketplace')} className="nav-link">
              MarketPlace
            </li>
            <li onClick={() => navigateTo('settings')} className="nav-link">
              Settings
            </li>
            <li onClick={() => navigateTo('GoalSetting')} className="nav-link">
              Goal Setting
            </li>
          </ul>
        </nav>
      </aside>

      <main className="dashboard-main">
        <header className="dashboard-header">
          <h2>Dashboard</h2>
          <button className="add-widget-button">Add widget</button>
        </header>

        <div className="progress-cards">
          {['Budget', 'Goal 1', 'Goal 2'].map((title, index) => (
            <div key={index} className="card">
              <h3>{title}</h3>
              <div className="circle">{[25, 79, 52][index]}%</div>
            </div>
          ))}
        </div>

        <div className="expenses-chart">
          <h3>Expenses</h3>
          <div className="line-chart"></div>
        </div>

        <div className="weekly-expenses">
          <h3>Weekly Expenses</h3>
          <table>
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
                <td><span className="status overdue">Overdue</span></td>
                <td>01 Dec 2023</td>
                <td><button className="edit-button">Edit</button></td>
              </tr>
              <tr>
                <td>Week 11</td>
                <td><span className="status completed">Completed</span></td>
                <td>11 Dec 2024</td>
                <td><button className="edit-button">Edit</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
