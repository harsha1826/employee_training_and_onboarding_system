import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulating form submission and success response
    if (name && email && password) {
      setMessage('Sign up successful! Welcome to our platform.');
      setName('');
      setEmail('');
      setPassword('');
    } else {
      setMessage('Please fill out all fields.');
    }
  };

  return (
    <div className="signup-container">
      <div className="form-box">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label htmlFor="password">Re-Enter Password:</label>
          <input
            type="password"
            placeholder="Re-enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="signup-btn">
            Sign Up
          </button>
        </form>
        {message && <p className="message">{message}</p>}
        <p className="redirect">
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
