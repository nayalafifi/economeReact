import React, { useState } from 'react';  // Import React and useState
import Dashboard from './dashboard';      // Import Dashboard component
import Profile from './Profile';          // Import Profile component
import GoalSetting from './GoalSetting';  // Import GoalSetting component
import './App.css';                       // Import CSS

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');

  return (
    <div className="App">
      {currentPage === 'dashboard' && <Dashboard navigateTo={setCurrentPage} />}
      {currentPage === 'profile' && <Profile />}
      {currentPage === 'GoalSetting' && <GoalSetting />}
    </div>
  );
}

export default App;
