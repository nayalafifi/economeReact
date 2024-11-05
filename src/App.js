import React, { useState } from 'react';
import Dashboard from './dashboard';
import Profile from './Profile';
import GoalSetting from './GoalSetting';
import Login from './login';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('login');

  return (
    <div className="App">
      {currentPage === 'login' && <Login />}
      {currentPage === 'dashboard' && <Dashboard navigateTo={setCurrentPage} />}
      {currentPage === 'profile' && <Profile />}
      {currentPage === 'GoalSetting' && <GoalSetting />}
    </div>
  );
}

export default App;
