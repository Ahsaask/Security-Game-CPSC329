import React, { useState } from 'react';
import './App.css';

const PasswordChecker = () => {
  const [password, setPassword] = useState('');
  const [strength, setStrength] = useState('');
  const [tips, setTips] = useState([]);

  const strengthEmoji = {
    'Very Weak': '🚫',
    'Weak': '🤔',
    'Small':'🚫',
    'Strong': '👍',
    'Very Strong':'🔒',
    'Excellent':'🔐'
  };

  const evaluatePassword = (pwd) => {
    let strength = '';
    let tips = [];

    const commonPasswords = [
      'password123', '123456', 'qwerty', 'letmein', 'password1', 
      'admin', 'welcome', 'sunshine', 'iloveyou', 'monkey',
      '123456789', 'football', '12345', '12345678', 'abc123',
      '1234567', 'password', '123123', 'baseball', 'superman',
      '1qaz2wsx', 'dragon', 'master', 'michael', 'football1',
      'password!', '1234', 'shadow', '666666', 'qwerty123',
      '696969', 'batman', 'trustno1', 'hottie', 'jordan23',
      'jennifer', 'zxcvbnm', 'asdfgh', 'hunter', 'buster',
      'soccer', 'harley', 'batman', 'andrew', 'tigger',
      'sunshine', 'iloveyou', '2000', 'charlie', 'robert',
      'thomas', 'hockey', 'ranger', 'daniel', 'starwars',
      'klaster', '112233', 'george', 'computer', 'michelle'
    ]; 

    const ExcellentCriteria = (
      pwd.length > 12 &&
      /[A-Z]/.test(pwd) &&
      /[a-z]/.test(pwd) &&
      /[0-9]/.test(pwd) &&
      /[\W_]/.test(pwd) &&
      !commonPasswords.includes(pwd)
    );

    const VeryStrongCriteria = (
      pwd.length > 8 &&
      /[a-z]/.test(pwd) &&
      /[0-9]/.test(pwd) &&
      /[\W_]/.test(pwd) &&
      !commonPasswords.includes(pwd)
    );

    const StrongCriteria = (
      pwd.length > 6 &&
      /[a-z]/.test(pwd) &&
      /[0-9]/.test(pwd) &&
      /[\W_]/.test(pwd) &&
      !commonPasswords.includes(pwd)
    );
      
    if (ExcellentCriteria) {
      strength = 'Excellent';
    } else if (VeryStrongCriteria) {
      strength = 'Very Strong';
    } else if (StrongCriteria) {
      strength = 'Strong';
    } else if (pwd.length<8) {
      strength = 'Small';
      tips.push('Password should be at least 8 characters.');
    }else{
      strength = 'Weak'
    }

    // To @shaim- also we can make the logic more specific for password check. 
    if (!/[A-Z]/.test(pwd)) tips.push('Include at least one uppercase letter.');
    if (!/[a-z]/.test(pwd)) tips.push('Include at least one lowercase letter.');
    if (!/[0-9]/.test(pwd)) tips.push('Include at least one number.');
    if (!/[\W_]/.test(pwd)) tips.push('Include at least one symbol.');

    
    if (commonPasswords.includes(pwd)) {
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
      {/* <p className="password-desc">How ninja is your password? Let's find out! 🥷</p> */}
      <input
        className="password-input"
        type="text"
        maxLength={25}
        value={password}
        placeholder="Type in your password"
        onChange={handlePasswordChange}
      />
      <p className="password-feedback">
        <span className="emoji">{strengthEmoji[strength]}</span> 
         {strength}
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
