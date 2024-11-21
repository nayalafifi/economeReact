import React from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink from react-router-dom
import './sidebar.css'; // Import sidebar styles

const logo = process.env.PUBLIC_URL + 'econoMe_logo.png'; 

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <nav className="nav">
        <ul>
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/profile"
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              Your Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/marketplace"
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              MarketPlace
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/goalSetting"
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              Goal Setting
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/settings"
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              Settings
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
