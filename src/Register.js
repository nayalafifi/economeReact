import React from 'react';

function Register() {
  return (
    <div className="register-form">
      <h2>Register</h2>
      <input type="text" placeholder="Full Name" />
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button>Register</button>
    </div>
  );
}

export default Register;
