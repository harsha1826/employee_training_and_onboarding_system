import React, { useState } from 'react';
import './FAQPage.css';

const FAQPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'What is the Employee Training and Onboarding System?',
      answer: 'This system is designed to help new employees get familiar with the company’s tools, resources, and processes efficiently.'
    },
    {
      question: 'How do I access the training modules?',
      answer: 'You can access the training modules from the dashboard after logging in. The modules are divided into beginner, intermediate, advanced, and expert levels.'
    },
    {
      question: 'Can I retake the training sessions?',
      answer: 'Yes, you can retake any training session at any time by visiting the training module section of the platform.'
    },
    {
      question: 'What should I do if I encounter an issue during training?',
      answer: 'If you encounter any issues, please reach out to your assigned mentor or contact support using the in-app chat feature.'
    },
    {
      question: 'How is my progress tracked?',
      answer: 'Your progress is automatically tracked and recorded in your profile, and you will receive certifications for completed levels.'
    }
  ];

  return (
    <div className="faq-container">
      <h1>Frequently Asked Questions</h1>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className={`faq-item ${activeIndex === index ? 'active' : ''}`}>
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              {faq.question}
            </div>
            {activeIndex === index && <div className="faq-answer">{faq.answer}</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQPage;
