import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar';
import NavBar2 from './components/components2/NavBar2';
import Welcome from './components/Welcome';
import PolicyPage from './components/PolicyPage';
import Login from './components/Login';
import AboutUs from './components/AboutUs';
import ContactUs from './components/Contactus';
import SignUp from './components/SignIn';
import Dashboard from './components/components2/Dashboard';
import Profile from './components/components2/Profile';
import SelfLearning from './components/components2/LiveStreaming';
import Assignments from './components/components2/Assignments';
import Calendar from './components/components2/Calendar';
import Resources from './components/components2/Resources';
import Support from './components/components2/Support';
import Feedback from './components/components2/Feedback';
import Logout from './components/components2/Logout';
import Handbook from './components/components2/Handbook';
import FAQPage from './components/components2/FAQPage';
import Chatbot from './components/components2/Chatbot';

function App() {
  
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  
  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <div>
      <BrowserRouter>
      <Chatbot/>
        
        {!isAuthenticated ? <NavBar /> : <NavBar2  />}

      
        <Routes>
          <Route path="/welcome" element={<Welcome onLogin={handleLogout}/>} />
          <Route path="/policy" element={<PolicyPage onLogin={handleLogout} />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/about-us" element={<AboutUs onLogin={handleLogout}/>} />
          <Route path="/contact-us" element={<ContactUs onLogin={handleLogout}/>} />
          <Route path="/signup" element={<SignUp onLogin={handleLogout}/>} />

          
          <Route path="/dashboard" 
                 element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} />
          <Route path="/profile" 
                 element={isAuthenticated ? <Profile /> : <Navigate to="/login" />} />
          <Route path="/livestreaming" 
                 element={isAuthenticated ? <SelfLearning /> : <Navigate to="/login" />} />
          <Route path="/assignments" 
                 element={isAuthenticated ? <Assignments /> : <Navigate to="/login" />} />
          <Route path="/calendar" 
                 element={isAuthenticated ? <Calendar /> : <Navigate to="/login" />} />
          <Route path="/resources" 
                 element={isAuthenticated ? <Resources /> : <Navigate to="/login" />} />
          <Route path="/support" 
                 element={isAuthenticated ? <Support /> : <Navigate to="/login" />} />
          <Route path="/feedback" 
                 element={isAuthenticated ? <Feedback /> : <Navigate to="/login" />} />
          <Route path="/handbook" 
                 element={isAuthenticated ? <Handbook /> : <Navigate to="/login" />} />
          <Route path="/logout" 
                 element={<Logout onLogout={handleLogout} />} />
           <Route path="/faqpage" 
                 element={isAuthenticated ? <FAQPage /> : <Navigate to="/login" />} />      
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

