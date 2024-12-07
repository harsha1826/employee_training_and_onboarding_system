import React from 'react';
import './PolicyPage.css'; // Custom styling

const PolicyPage = () => {
  return (
    <div className="policy-container">
      <h1>Privacy Policy</h1>
      <p className="policy-intro">
        Welcome to our privacy policy page. Your privacy is critically important to us. 
        We are committed to protecting your personal data and your right to privacy.
      </p>
      
      <h2>Information We Collect</h2>
      <p>
        We collect personal information that you provide to us such as name, address, contact information, 
        passwords and security data, and payment information.
      </p>

      <h2>How We Use Your Information</h2>
      <ul>
        <li>Facilitate account creation and logon process</li>
        <li>Send administrative information to you</li>
        <li>Fulfill and manage your orders</li>
        <li>Post testimonials with your consent</li>
        <li>Request feedback</li>
        <li>To enforce our terms, conditions, and policies</li>
      </ul>

      <h2>Sharing of Information</h2>
      <ul>
        <li>Compliance with laws</li>
        <li>Business transfers</li>
        <li>Service providers</li>
      </ul>

      <h2>Your Rights</h2>
      <p>
        You have certain rights regarding your personal data, including the right to access, correct, 
        or delete your information.
      </p>

      <h2>Changes to This Policy</h2>
      <p>
        We may update this policy from time to time. We encourage you to review this policy periodically 
        to stay informed about how we are protecting your information.
      </p>

      <p>
        If you have any questions about this privacy policy, please <a href="/contact">contact us</a>.
      </p>
    </div>
  );
};

export default PolicyPage;
