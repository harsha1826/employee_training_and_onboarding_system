import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from './NavBar'; // Import NavBar component
import './AboutUs.css';

function AboutUs() {
  const navigate = useNavigate();

  const goToSignup = () => {
    navigate('/signup');
  };

  return (
    <div className="about-container">
      <NavBar />

      {/* Hero Section */}
      <header className="about-header">
        <div className="about-hero">
          <h1>Welcome to Our Company</h1>
          <p>Innovating the future, empowering businesses globally.</p>
        </div>
      </header>

      {/* Our Mission */}
      <section className="about-section">
        <div className="about-content">
          <div className="about-text">
            <h2>Our Mission</h2>
            <h1> hi hello</h1>
            <h2>Our Mission</h2>
            <h1> hi hello</h1>
            <h2>Our Mission</h2>
            <h1> hi hello</h1>
            <h4>Our Mission</h4>
            <h2>Our Mission</h2>
            <h2>Our Mission</h2>
            
            
            
            <p>
              At [Your Company], our mission is to push the boundaries of
              technology and innovation, driving impact across industries and
              communities globally. We aim to make a significant difference by
              leveraging technology to empower businesses and individuals alike.
            </p>
          </div>
          <div className="about-image">
            <img
              src="https://whatfix.com/blog/wp-content/uploads/2022/04/digital-onboarding.png"
              alt="Mission"
              className="responsive-img"
            />
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="about-content">
          <div className="about-text">
            <h2>Our Mission</h2>
            <p>
              At [Your Company], our mission is to push the boundaries of
              technology and innovation, driving impact across industries and
              communities globally. We aim to make a significant difference by
              leveraging technology to empower businesses and individuals alike.
            </p>
          </div>
          <div className="about-image">
            <img
              src="https://whatfix.com/blog/wp-content/uploads/2022/04/digital-onboarding.png"
              alt="Mission"
              className="responsive-img"
            />
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="about-section reverse">
        <div className="about-content">
          <div className="about-image">
            <img
              src="https://www.corporatevision-news.com/wp-content/uploads/2021/07/Onboarding.jpg"
              alt="Journey"
              className="responsive-img"
            />
          </div>
          <div className="about-text">
            <h2>Our Journey</h2>
            <p>
              Established in [Founding Year], [Your Company] began with a bold
              vision: to harness the power of the internet and make complex
              systems simple and accessible. Over the years, we have grown into
              a global leader in cloud computing, AI, and consumer services.
            </p>
          </div>
        </div>
      </section>

      {/* Commitment to Innovation */}
      <section className="about-section">
        <div className="about-content">
          <div className="about-text">
            <h2>Commitment to Innovation</h2>
            <p>
              Innovation is at the core of everything we do. We continually
              strive to lead the way in AI-driven solutions, cloud technologies,
              and creating groundbreaking products for businesses and
              consumers. Our research and development teams are shaping the
              future of technology.
            </p>
          </div>
          <div className="about-image">
            <img
              src="https://ik.imagekit.io/vrr7xcy4rw5/wp-content/uploads/2019/03/employee-onboarding-roadmap.jpg"
              alt="Innovation"
              className="responsive-img"
            />
          </div>
        </div>
      </section>

      {/* Our People */}
      <section className="about-section reverse">
        <div className="about-content">
          <div className="about-image">
            <img
              src="https://th.bing.com/th/id/OIP.cSurh_Hiox4jOde8EOZDbgHaGL?w=197&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
              alt="Team"
              className="responsive-img"
            />
          </div>
          <div className="about-text">
            <h2>Our People</h2>
            <p>
              Our people are the heart of our company. We bring together
              talented individuals from across the globe, each committed to
              pushing the boundaries of innovation. Our diverse and inclusive
              culture fuels creativity and drives success in all that we do.
            </p>
          </div>
        </div>
      </section>

      {/* Corporate Responsibility */}
      <section className="about-section">
        <div className="about-content">
          <div className="about-text">
            <h2>Corporate Responsibility</h2>
            <p>
              We take our responsibility to the planet and our communities
              seriously. Our sustainability and diversity initiatives aim to
              create a better future, focusing on reducing our carbon footprint
              and supporting local communities. We're committed to making the
              world a better place through our efforts.
            </p>
          </div>
          <div className="about-image">
            <img
              src="https://th.bing.com/th/id/OIP.uW8SlfGml1PAMYaojIzgXQHaFc?w=216&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
              alt="Responsibility"
              className="responsive-img"
            />
          </div>
        </div>
      </section>

      {/* Back to Home Button */}
      <div className="back-to-top">
        <button onClick={goToSignup}>Get Started</button>
      </div>

      {/* Footer */}
      <footer className="about-footer">
        <p>&copy; 2024 [Your Company]. All rights reserved. | Privacy Policy | Terms of Service</p>
      </footer>
    </div>
  );
}

export default AboutUs;
