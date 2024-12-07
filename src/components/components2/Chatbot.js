// Chatbot.js
import React, { useState } from 'react';
import ChatBot from 'react-chatbotify';

const Chatbot = () => {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const handleSendMessage = async () => {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message }),
    });
    const data = await response.json();
    setResponse(data.response);
  };

  return (
    <div>
      <ChatBot
        flow={{
          start: {
            message: 'Hello, how can I assist you?',
            trigger: 'askName',
          },
          askName: {
            user: true,
            trigger: 'askAge',
          },
          askAge: {
            user: true,
            trigger: 'displayResult',
          },
          displayResult: {
            message: 'Your name is {name} and you are {age} years old.',
            end: true,
          },
        }}
      />
      
      
    </div>
  );
};

export default Chatbot;