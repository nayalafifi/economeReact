import React from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink from react-router-dom
import './sidebar.css'; // Import sidebar styles

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h1 className="logo">EconoMe</h1>
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
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
