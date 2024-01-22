// src/components/ContactForm.js
import React, { useState } from 'react';

const ContactForm = ({ selectedDevice, selectedModel, selectedProblem, onSubmit }) => {
  const [userNumber, setUserNumber] = useState('');

  const handleSubmit = () => {
    // Here, you can send user information to the owner's number or a backend server
    // You may need to use a backend service for sending SMS or handle it server-side
    const userData = {
      device: selectedDevice,
      model: selectedModel,
      problem: selectedProblem,
      userNumber,
    };

    // Call the onSubmit function passed as a prop
    onSubmit(userData);
  };

  return (
    <div>
      <h2>Contact Information:</h2>
      <p>Selected Device: {selectedDevice}</p>
      <p>Selected Model: {selectedModel}</p>
      <p>Selected Problem: {selectedProblem}</p>
      <label>
        Your Phone Number:
        <input type="text" value={userNumber} onChange={(e) => setUserNumber(e.target.value)} />
      </label>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default ContactForm;
