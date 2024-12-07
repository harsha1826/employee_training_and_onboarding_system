import React from 'react';
import './Home.css'; // Importing CSS for styling
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
  const navigate = useNavigate();

  const goToAboutUs = () => {
    navigate('/about-us');
  };
  return (
    <div className="homepage">
      {/* Video Background */}
      <video autoPlay muted loop id="myVideo">
      <source src="https://v.ftcdn.net/04/35/49/36/700_F_435493637_wjBT9WZyZc3r7HyKzZaKmI9aYgIChzRU_ST.mp4" type="video/mp4" />

        Your browser does not support HTML5 video.
      </video>

      {/* Header Section */}
      <header className="header glass">
        <div className="logo">Company Logo</div>
        <nav className="nav">
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#training">Training Programs</a></li>
            <li><a href="#onboarding">Onboarding Resources</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <div className="auth-buttons">
          <button className="login-btn">Login</button>
          <button className="signup-btn">Sign Up</button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero glass">
        <div className="hero-content">
          <h1>Welcome to Our Employee Training and Onboarding System</h1>
          <h1>Welcome to Our Employee Training and Onboarding System</h1>
          
          <p>Streamline employee onboarding and training with ease.</p>
          <button onClick={goToAboutUs} className="cta-button">Get Started</button>
        </div>
      </section>

      {/* Features Section */}
      <section className="features glass">
        <h2>Key Features</h2>
        <div className="feature-cards">
          <div className="feature-card glass">
            <h3>Customizable Training Modules</h3>
            <p>Tailor training content for different roles and departments.</p>
          </div>
          <div className="feature-card glass">
            <h3>Progress Tracking</h3>
            <p>Monitor employee progress with interactive dashboards.</p>
          </div>
          <div className="feature-card glass">
            <h3>Resource Library</h3>
            <p>Access a wide range of resources to enhance learning.</p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer glass">
        <p>&copy; 2024 Your Company. All Rights Reserved.</p>
        <div className="footer-links">
          <a href="/policy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
        </div>
      </footer>
    </div>
  );
};

export default Welcome;
