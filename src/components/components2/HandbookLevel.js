import React from 'react';
import './Handbook.css';

const HandbookLevel = ({ level, description }) => {
  return (
    <div className={`level-box ${level.toLowerCase()}`}>
      <h2>{level} Level</h2>
      <p>{description}</p>

      {/* Beginner Level Content */}
      {level === 'Beginner' && (
        <div className="additional-content">
          <p>Start here to learn how to use our platform for the first time. You'll get familiar with:</p>
          <ul>
            <li>Logging in and setting up your profile</li>
            <li>Basic navigation and menu options</li>
            <li>Submitting your first task</li>
          </ul>
        </div>
      )}

      {/* Intermediate Level Content */}
      {level === 'Intermediate' && (
        <div className="additional-content">
          <p>Enhance your knowledge and get hands-on with:</p>
          <ul>
            <li>Managing customer interactions and communication</li>
            <li>Tracking tasks and performance metrics</li>
            <li>Utilizing our internal support and feedback system</li>
          </ul>
        </div>
      )}

      {/* Advanced Level Content */}
      {level === 'Advanced' && (
        <div className="additional-content">
          <p>At this level, you'll dive into more complex features such as:</p>
          <ul>
            <li>Advanced team collaboration and task delegation</li>
            <li>Managing large customer databases</li>
            <li>Customizing the platform to fit specific departmental needs</li>
          </ul>
        </div>
      )}

      {/* Expert Level Content */}
      {level === 'Expert' && (
        <div className="additional-content">
          <p>As an expert, you're now ready to explore advanced automation and data analytics to supercharge your productivity:</p>
          <ul>
            <li>Creating custom reports</li>
            <li>Optimizing team workflows</li>
            <li>Using data to inform strategic decisions</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default HandbookLevel;
