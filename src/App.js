// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Dashboard from './dashboard';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          {/* Redirect root path to /dashboard */}
          <Route path="/" element={<Navigate to="/index" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
