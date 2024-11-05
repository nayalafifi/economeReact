import React, { useState } from 'react';
import Dashboard from './dashboard';
import Profile from './Profile';
import GoalSetting from './GoalSetting';
import Login from './login';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('login');

  const navigateToDashboard = () => setCurrentPage('dashboard');

  return (
    <div className="App">
      {currentPage === 'login' && <Login onLoginSuccess={navigateToDashboard} />}
      {currentPage === 'dashboard' && <Dashboard navigateTo={setCurrentPage} />}
      {currentPage === 'profile' && <Profile />}
      {currentPage === 'GoalSetting' && <GoalSetting />}
    </div>
  );
}

export default App;
