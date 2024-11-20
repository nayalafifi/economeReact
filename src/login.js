import React, { useState } from 'react';
import './login.css';

const logo = process.env.PUBLIC_URL + 'econoMe_logo.png';

const Login = ({ onLoginSuccess }) => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  // Handle Login Submit
  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://127.0.0.1:8000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      if (!response.ok) throw new Error("Login failed");

      const data = await response.json();
      console.log("Login successful:", data);
      
      // Store user ID
      localStorage.setItem("user_id", data.user.user_id);
      onLoginSuccess(); // Navigate to dashboard
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Handle Register Submit
  const handleRegisterSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://127.0.0.1:8000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user_id: Date.now(), name, email, password, dob: "2000-01-01", income: 0 }),
      });
      if (!response.ok) throw new Error("Registration failed");

      const data = await response.json();
      console.log("Registration successful:", data);
      
      setIsRegistering(false); // Switch back to login after registering
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="login-container">
      <img src={logo} alt="EconoME Logo" className="logo" />
      <div className="toggle-buttons">
        <button 
          onClick={() => setIsRegistering(false)} 
          className={`toggle-button ${!isRegistering ? 'active' : ''}`}
        >
          Login
        </button>
        <button 
          onClick={() => setIsRegistering(true)} 
          className={`toggle-button ${isRegistering ? 'active' : ''}`}
        >
          Register
        </button>
      </div>
      <div className="login-register-forms">
        {isRegistering ? (
          <div className="register-form">
            <form onSubmit={handleRegisterSubmit}>
              <input type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} required />
              <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
              <button type="submit" className="register-button">Register</button>
            </form>
          </div>
        ) : (
          <div className="login-form">
            <form onSubmit={handleLoginSubmit}>
              <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
              <button type="submit" className="login-button">Login</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
