// Sidebar.js
import React from 'react';
import './sidebar.css'; // Import sidebar styles

const Sidebar = ({ navigateTo, currentPage }) => {
  return (
    <aside className="sidebar">
      <h1 className="logo">EconoMe</h1>
      <nav className="nav">
        <ul>
          <li>
            <a
              href="#"
              className={`nav-link ${currentPage === 'dashboard' ? 'active' : ''}`}
              onClick={() => navigateTo('dashboard')}
            >
              Dashboard
            </a>
          </li>
          <li>
            <a
              href="#"
              className={`nav-link ${currentPage === 'profile' ? 'active' : ''}`}
              onClick={() => navigateTo('profile')}
            >
              Your Profile
            </a>
          </li>
          <li>
            <a
              href="#"
              className={`nav-link ${currentPage === 'marketplace' ? 'active' : ''}`}
              onClick={() => navigateTo('marketplace')}
            >
              MarketPlace
            </a>
          </li>
          <li>
            <a
              href="#"
              className={`nav-link ${currentPage === 'goalSetting' ? 'active' : ''}`}
              onClick={() => navigateTo('goalSetting')}
            >
              Goal Setting
            </a>
          </li>
          <li>
            <a
              href="#"
              className={`nav-link ${currentPage === 'settings' ? 'active' : ''}`}
              onClick={() => navigateTo('settings')}
            >
              Settings
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
