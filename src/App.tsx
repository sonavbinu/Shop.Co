import React from 'react';
import { Link } from 'react-router-dom';
import './App.scss';

const App: React.FC = () => {
  return (
    <div className="signup-banner">
      <h5>Sign up and get 20% off to your first order. </h5>
      <Link to="/signup">Sign Up now</Link>
    </div>
  );
};

export default App;
