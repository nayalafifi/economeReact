import React from 'react';

function Sidebar({ navigateTo }) {
  return (
    <div className="sidebar">
      <h2>FinanceApp</h2>
      <ul>
        <li onClick={() => navigateTo('dashboard')}>Dashboard</li>
        <li onClick={() => navigateTo('register')}>Register</li>
        <li onClick={() => navigateTo('profile')}>Profile</li>
      </ul>
    </div>
  );
}

export default Sidebar;
