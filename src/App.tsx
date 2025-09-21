import React from 'react';
import { Link } from 'react-router-dom';
import './App.scss';
import Navbar from './Components/Navbar/Navbar';

const App: React.FC = () => {
  return (
    <div>
      <div className="signup-banner">
        <h5>Sign up and get 20% off to your first order. </h5>
        <Link to="/signup">Sign Up now</Link>
      </div>
      <div>
        <Navbar />
      </div>
    </div>
  );
};

export default App;
