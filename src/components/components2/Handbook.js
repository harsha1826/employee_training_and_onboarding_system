import React from 'react';
import HandbookLevel from './HandbookLevel';
import './Handbook.css';


const Handbook = () => {
  const levels = [
    { level: 'Beginner', description: 'Learn the fundamentals of our system' },
    { level: 'Intermediate', description: 'Build on the basics with real-world scenarios' },
    { level: 'Advanced', description: 'Deep dive into more complex use cases' },
    { level: 'Expert', description: 'Master the system with expert-level guidance' }
  ];
 

  return (
    <div className="handbook-container">
      <h1>Employee Training Handbook</h1>
      <p>Welcome to the employee training and onboarding handbook. Whether you are a new hire or looking to expand your skills, this guide will walk you through everything.</p>
      
      <div className="level-section">
        {levels.map((item, index) => (
          <HandbookLevel key={index} level={item.level} description={item.description} />
        ))}
      </div>
    </div>
  );
};

export default Handbook;
