import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './WelcomeStyles.css';

function WelcomeMSG() {
  const [name, setName] = useState('');

  const GreetingMessage = ({ userName }) => {
    const timeOfDay = new Date().getHours() < 12 ? 'Morning' : 'Evening';
    return (
      <h1>
        {userName ? `Welcome Mr ${userName}` : `Good ${timeOfDay}`}
      </h1>
    );
  };

  GreetingMessage.propTypes = {
    userName: PropTypes.string,
  };

  return (
    <div className='welcome-container'>
      <div className='Welcome'>
        <h3 style={{color: 'red'}}>Please Enter in The Field Your Name</h3>
        <input 
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <GreetingMessage userName={name} />
      </div>
      <div className="button-container">
    <button className="go-back-btn" onClick={() => window.history.back()}>Go Back To Home</button>
  </div>
    </div>
  );
}

export default WelcomeMSG;