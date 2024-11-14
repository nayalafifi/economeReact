import React, { useState } from 'react';
import Sidebar from './sidebar';
import Dashboard from './dashboard';
import Profile from './Profile';
import GoalSetting from './GoalSetting';
import Login from './login';
import Marketplace from './Marketplace';
import './App.css';
import './dashboard.css';

function App() {
  const [currentPage, setCurrentPage] = useState('login');

  const navigateTo = (page) => setCurrentPage(page);

  return (
    <div className="App">
      {currentPage === 'login' ? (
        <Login onLoginSuccess={() => setCurrentPage('dashboard')} />
      ) : (
        <div className="dashboard">
          <Sidebar navigateTo={navigateTo} currentPage={currentPage} />
          <main className="main-content">
            {currentPage === 'dashboard' && <Dashboard />}
            {currentPage === 'profile' && <Profile />}
            {currentPage === 'goalSetting' && <GoalSetting />}
            {currentPage === 'marketplace' && <Marketplace />}
          </main>
        </div>
      )}
    </div>
  );
}

export default App;
