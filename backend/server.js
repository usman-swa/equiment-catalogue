const express = require('express');
const cors = require('cors'); // Add this line
const app = express();
const port = 3000;

app.use(cors());

// Serve static JSON data
app.get('/search', (req, res) => {
  const number = req.query.number;
  const data = [
    { id: 1, name: 'Item 1', number: 123 },
    { id: 2, name: 'Item 2', number: 456 },
    { id: 3, name: 'Item 3', number: 789 },
    // Add more data as needed
  ];
  
  const result = data.find(item => item.number === +number);
  if (result) {
    res.json(result);
  } else {
    res.status(404).json({ error: 'Item not found' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
