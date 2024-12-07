// Profile.js
import React, { useState } from 'react';
import './Profile.css';

export default function Profile() {
  const [name, setName] = useState('Durga Prasad');
  const [email, setEmail] = useState('2300031561@kluniversity.com');
  const [jobTitle, setJobTitle] = useState('Front-End Developer');

  return (
    <div className="profile-container">
      <h1>Profile</h1>
      <div className="profile-info">
        <h2>Personal Information</h2>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <p>Job Title: {jobTitle}</p>
      </div>

      <div className="profile-settings">
        <h2>Settings</h2>
        <button>Edit Profile</button>
      </div>
    </div>
  );
}
