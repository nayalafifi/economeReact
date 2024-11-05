import React, { useState } from 'react';
import Dashboard from './dashboard';
import Profile from './Profile';
import GoalSetting from './GoalSetting';
import Login from './login';
import Marketplace from './Marketplace'; // Import the Marketplace component
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');

  const navigateToDashboard = () => setCurrentPage('dashboard');

  return (
    <div className="App">
      {currentPage === 'login' && <Login onLoginSuccess={navigateToDashboard} />}
      {currentPage === 'dashboard' && <Dashboard navigateTo={setCurrentPage} />}
      {currentPage === 'profile' && <Profile />}
      {currentPage === 'GoalSetting' && <GoalSetting />}
      {currentPage === 'marketplace' && <Marketplace />} {/* Add Marketplace */}
      
      {/* Add a navigation button to go to the Marketplace */}
      {currentPage !== 'login' && (
        <div className="navigation">
          <button onClick={() => setCurrentPage('dashboard')}>Dashboard</button>
          <button onClick={() => setCurrentPage('profile')}>Profile</button>
          <button onClick={() => setCurrentPage('GoalSetting')}>Goal Setting</button>
          <button onClick={() => setCurrentPage('marketplace')}>Marketplace</button>
        </div>
      )}
    </div>
  );
}

export default App;
