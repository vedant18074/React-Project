import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    alert("Login successful!");
    navigate("/"); 
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Welcome Back 👋</h2>
        <p>Please login to your account</p>

        <form className="login-form" onSubmit={handleLogin}>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" placeholder="Enter username" />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Enter password" />

          <button type="submit" className="login-btn">Login</button>

          <div className="register-link">
            <p>
              Don’t have an account? <Link to="/register">Register</Link>
            </p>
          </div>
        </form>

        <button className="back-home-btn" onClick={() => navigate("/")}>
          ← Back to Home
        </button>
      </div>
    </div>
  );
}

export default Login;
