import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Importing CSS for styling
import NavBar from './NavBar'; // Import the NavBar for public routes

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple check for login credentials
    if (username === 'admin' && password === 'password') {
      onLogin(); // Call the onLogin function passed as a prop to update login state
      navigate('/dashboard'); // Redirect to dashboard after successful login
    } else {
      alert('Invalid username or password');
    }
  };

  // Navigate to sign-up page
  const goToSignUp = () => {
    navigate('/signup');
  };

  return (
    <div className="auth-page">
      <NavBar />
      <div className="auth-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username or Email:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <button type="submit" className="login-button">
              Login
            </button>
          </div>
        </form>

        <h3>
          Don't have an account?
          <button onClick={goToSignUp} className="toggle-button">
            Sign Up
          </button>
        </h3>
      </div>
    </div>
  );
};

export default Login;
