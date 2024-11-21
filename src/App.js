import React from 'react';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import Sidebar from './sidebar';
import Dashboard from './dashboard';
import Profile from './Profile';
import GoalSetting from './GoalSetting';
import Login from './login';
import Marketplace from './Marketplace';
import Landing from './landing';
import './App.css';
import './dashboard.css';
import './landing.css';

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Define route for the landing page */}
        <Route path="/" element={<Landing />} />

        {/* Define route for the login page */}
        <Route path="/login" element={<Login onLoginSuccess={() => <Navigate to="/dashboard#" />} />} />

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

function DashboardLayout() {
  return (
    <div className="dashboard">
      <Sidebar />
      <main className="main-content">
        {/* The <Outlet /> component will render the nested routes defined in App.js */}
        <Outlet />
      </main>
    </div>
  );
}

export default App;
