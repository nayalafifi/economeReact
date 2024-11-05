import React from 'react';
import './login.css';

const Login = () => {
  return (
    <div className="login-container">
      <h1 className="app-title">EconoMe</h1>
      <div className="login-register-forms">
        <div className="login-form">
          <h2>Login</h2>
          <form>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button type="submit" className="login-button">Login</button>
          </form>
        </div>
        
        <div className="register-form">
          <h2>Register</h2>
          <form>
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button type="submit" className="register-button">Register</button>
          </form>
        </div>
      </div>
      {/* <footer className="footer">
        <p>© 2023 FinanceApp. All rights reserved.</p>
      </footer> */}
    </div>
  );
};

export default Login;
