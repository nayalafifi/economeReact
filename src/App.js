import React from 'react';
import { Routes, Route, Navigate, Outlet, useNavigate } from 'react-router-dom';
import Dashboard from './dashboard';
import Profile from './Profile';
import GoalSetting from './GoalSetting';
import Login from './login';
import Marketplace from './Marketplace';
import Landing from './landing';
import Sidebar from './sidebar'; 

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Define route for the landing page */}
        <Route path="/" element={<Landing />} />

        {/* Define route for the login page with an enhanced component */}
        <Route path="/login" element={<LoginWrapper />} />

        {/* Define a layout route for the dashboard with nested routes */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />
          <Route path="goalSetting" element={<GoalSetting />} />
          <Route path="marketplace" element={<Marketplace />} />
        </Route>
      </Routes>
    </div>
  );
}

function LoginWrapper() {
  const navigate = useNavigate();
  const handleLoginSuccess = () => {
    navigate('/dashboard'); 
  };
  return <Login onLoginSuccess={handleLoginSuccess} />;
}

function DashboardLayout() {
  return (
    <div className="dashboard">
      <Sidebar />  
      <main className="main-content">
        <Outlet /> 
      </main>
    </div>
  );
}

export default App;
