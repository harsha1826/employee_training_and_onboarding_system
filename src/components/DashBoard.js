import React from 'react';
import { useNavigate } from 'react-router-dom';
import './DashBoard.css';

function Dashboard() {
  const navigate = useNavigate();

  /*const handleLogout = () => {
    // Perform logout logic here, such as clearing user data
    // Redirect to the login page
    navigate('/');
  };*/

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Welcome to the Dashboard!</h1>

      <div style={{ margin: '20px 0' }}>
        <h2>Admin Info</h2>
        {/* You can dynamically fetch and display user information here */}
        <p>Email: 2300031826@kluniversity.in</p>
        <p>Role: Admin</p>
      </div>

      <div>
        <h2>Navigation</h2>
        <button style={buttonStyle} onClick={() => navigate('/profile')}>Profile</button>
        <button style={buttonStyle} onClick={() => navigate('/settings')}>Settings</button>
        <button style={buttonStyle} onClick={() => navigate('/home')}>Home</button>
      </div>

      {/*<div style={{ marginTop: '20px' }}>
        <button style={{ ...buttonStyle, backgroundColor: 'red' }} onClick={handleLogout}>
          Logout
        </button>
      </div>*/}
    </div>
  );
}

const buttonStyle = {
  padding: '10px 20px',
  margin: '10px',
  backgroundColor: '#4CAF50',
  
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  
};

export default Dashboard;
