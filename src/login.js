import React from 'react';
import './login.css';

const logo = process.env.PUBLIC_URL + '/EconoME.png';

const Login = ({ onLoginSuccess }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    onLoginSuccess(); //navigate to dashboard
  };

  return (
    <div className="login-container">
      <img src={logo} alt="EconoME Logo" className="logo" />
      {/* <h1 className="app-title">EconoMe</h1> */}
      <div className="login-register-forms">
        {/* Login Form */}
        <div className="login-form">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <button type="submit" className="login-button">Login</button>
          </form>
        </div>

        {/* Register Form */}
        <div className="register-form">
          <h2>Register</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <button type="submit" className="register-button">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;