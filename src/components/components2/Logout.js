// Logout.js
import { useNavigate } from 'react-router-dom';

const Logout = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Add your logout logic here
    // For example, clearing any tokens or user data
    localStorage.removeItem('token'); // Remove the token from local storage
    onLogout(); // Call the onLogout function to update the authentication state in App.js
    navigate('/welcome', { replace: true }); // Redirect to the welcome page
  };

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
