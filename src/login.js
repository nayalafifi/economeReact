import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

const logo = process.env.PUBLIC_URL + 'econoMe_logo.png';

const Login = () => {
  const navigate = useNavigate();
  const [isRegistering, setIsRegistering] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');


  // Handle Login Submit
  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage('');

    try {
      const response = await fetch("http://127.0.0.1:8000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        setErrorMessage(
          response.status === 401
            ? "Invalid email or password. Please try again."
            : "An error occurred while logging in. Please try again later."
        );
        return;
      }

      const data = await response.json();
      console.log("Login successful:", data);

      // Store JWT token in localStorage
      localStorage.setItem("access_token", data.access_token);

      // Redirect to dashboard
      navigate('/dashboard');
    } catch (error) {
      console.error("Error during login:", error);
      setErrorMessage("An unexpected error occurred. Please try again later.");
    }
  };

  // Handle Register Submit
  const handleRegisterSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage('');

    try {
      const response = await fetch("http://127.0.0.1:8000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
          dob: "2000-01-01", // Placeholder date
          income: 0, // Placeholder income
        }),
      });

      if (!response.ok) {
        setErrorMessage("Registration failed. Please try again.");
        return;
      }

      const data = await response.json();
      console.log("Registration successful:", data);

      // Switch to login mode
      setIsRegistering(false);
    } catch (error) {
      console.error("Error during registration:", error);
      setErrorMessage("An unexpected error occurred. Please try again later.");
    }
  };

  return (
    <div className="login-container">
      <img src={logo} alt="EconoME Logo" className="logo" />
      <div className="login-register-forms">
        {errorMessage && <p className="error-message">{errorMessage}</p>}

        {isRegistering ? (
          <div className="register-form">
            <h2>Register</h2>
            <form onSubmit={handleRegisterSubmit}>
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button type="submit" className="register-button">Register</button>
            </form>
          </div>
        ) : (
          <div className="login-form">
            <h2>Login</h2>
            <form onSubmit={handleLoginSubmit}>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button type="submit" className="login-button">Login</button>
            </form>
          </div>
        )}
      </div>

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
    </div>
  );
};

export default Login;
