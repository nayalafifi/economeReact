import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

const logo = process.env.PUBLIC_URL + '/EconoME.png';

const Login = ({ onLoginSuccess }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);

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

  // Register Submit Handler
  const handleRegisterSubmit = async (event) => {
    event.preventDefault();

    const userData = {
      user_id: Date.now(),
      name,
      email,
      password,
      dob: "2000-01-01", // Default DOB
      income: 0,         // Default income
    };

    console.log("Sending registration data:", userData);

    try {
      const response = await fetch("http://127.0.0.1:8000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Registration error:", errorData);
        throw new Error("Registration failed");
      }

      const data = await response.json();
      console.log("Registration successful:", data);

      // Save user ID in localStorage after registration
      localStorage.setItem("user_id", userData.user_id);

      // Redirect to dashboard page on successful registration
      navigate('/dashboard#');
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="login-container">
      <img src={logo} alt="EconoME Logo" className="logo" />
      <div className="login-register-forms">
        <button onClick={() => setIsRegistering(false)} className="toggle-button">Login</button>
        <button onClick={() => setIsRegistering(true)} className="toggle-button">Register</button>

        {isRegistering ? (
          <div className="register-form">
            <h2>Register</h2>
            <form onSubmit={handleRegisterSubmit}>
              <input type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} required />
              <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
              <button type="submit" className="register-button">Register</button>
            </form>
          </div>
        ) : (
          <div className="login-form">
            <h2>Login</h2>
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
