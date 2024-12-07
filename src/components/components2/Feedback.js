import React, { useState } from 'react';
import './Feedback.css';

export default function Feedback() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rating: '',
    category: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Feedback submitted:', formData);
    // Here you can handle form submission, for example, by making an API call
  };

  return (
    <div className="feedback-container">
      <h1>Employee Training & Onboarding Feedback</h1>
      <form onSubmit={handleSubmit}>
        {/* Name */}
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          placeholder="Your name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />

        {/* Email */}
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Your email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />

        {/* Rating */}
        <label htmlFor="rating">Rate the Experience</label>
        <select name="rating" value={formData.rating} onChange={handleInputChange} required>
          <option value="">Select rating</option>
          <option value="5">★★★★★ (Excellent)</option>
          <option value="4">★★★★ (Good)</option>
          <option value="3">★★★ (Average)</option>
          <option value="2">★★ (Below Expectations)</option>
          <option value="1">★ (Poor)</option>
        </select>

        {/* Feedback Category */}
        <label htmlFor="category">Feedback Category</label>
        <select name="category" value={formData.category} onChange={handleInputChange} required>
          <option value="">Select a category</option>
          <option value="training">Training Quality</option>
          <option value="onboarding">Onboarding Experience</option>
          <option value="support">Support Provided</option>
          <option value="resources">Training Materials</option>
          <option value="tools">Tools & Platform</option>
          <option value="other">Other</option>
        </select>

        {/* Feedback Message */}
        <label htmlFor="message">Your Feedback</label>
        <textarea
          name="message"
          rows="4"
          placeholder="Write your feedback about the training or onboarding experience..."
          value={formData.message}
          onChange={handleInputChange}
          required
        ></textarea>

        {/* Submit Button */}
        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  );
}
