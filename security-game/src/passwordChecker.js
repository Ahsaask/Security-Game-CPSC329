import React, { useState } from 'react';
import './App.css';

const PasswordChecker = () => {
  const [password, setPassword] = useState('');
  const [strength, setStrength] = useState('');
  const [tips, setTips] = useState([]);

  const strengthEmoji = {
    'Very Weak': '🚫',
    'Weak': '🤔',
    'Good': '👍'
  };

  const evaluatePassword = (pwd) => {
    let strength = '';
    let tips = [];


    if (pwd.length >= 8) {
      strength = 'Good';
    } else {
      strength = 'Weak';
      tips.push('Password should be at least 8 characters.');
    }

    // To @shaim- also we can make the logic more specific for password check. 
    if (!/[A-Z]/.test(pwd)) tips.push('Include at least one uppercase letter.');
    if (!/[a-z]/.test(pwd)) tips.push('Include at least one lowercase letter.');
    if (!/[0-9]/.test(pwd)) tips.push('Include at least one number.');
    if (!/[\W_]/.test(pwd)) tips.push('Include at least one symbol.');

    // Common password- To @shaim, if you can add more common passwords from the course.
    if (['password123', '123456', 'qwerty'].includes(pwd)) {
      strength = 'Very Weak';
      tips.push('This is a commonly used password. Please choose another one.');
    }

    setStrength(strength);
    setTips(tips);
  };

  const handlePasswordChange = (e) => {
    const pwd = e.target.value;
    setPassword(pwd);
    evaluatePassword(pwd);
  };

  return (
    <div className="password-container">
      <h2 className="password-heading">Password Game Time! 🎮</h2>
      <p className="password-desc">How ninja is your password? Let's find out! 🥷</p>
      <input
        className="password-input"
        type="text"
        value={password}
        placeholder="Type in your password"
        onChange={handlePasswordChange}
      />
      <p className="password-feedback">
        <span className="emoji">{strengthEmoji[strength]}</span> 
        Password Strength: {strength}
      </p>
      <ul className="feedback-tips">
        {tips.map((tip, index) => (
          <li key={index}>{tip}</li>
        ))}
      </ul>
    </div>
  );
};

export default PasswordChecker;
