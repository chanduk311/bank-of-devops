const express = require('express');
const app = express();
app.use(express.json()); // allows JSON body parsing

// Simple GET endpoint
app.get('/hello', (req, res) => {
  res.send('Welcome to Bank of DevOps!');
});

// Example REST API: GET account balance
app.get('/balance', (req, res) => {
  res.json({ accountId: 12345, balance: 5000 });
});

// Example REST API: POST new transaction
app.post('/transaction', (req, res) => {
  const { amount, type } = req.body;
  res.json({ message: `Transaction of ${amount} as ${type} recorded successfully.` });
});

// Start server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});