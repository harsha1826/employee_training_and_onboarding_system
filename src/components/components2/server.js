// server.js
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/api/chat', (req, res) => {
  const message = req.body.message;
  // Chatbot logic goes here
  res.send({ response: 'Hello, how can I assist you?' });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});