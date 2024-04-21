// index.js

// Import required modules
const express = require('express');
const bodyParser = require('body-parser');

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Define routes
app.get('/', (req, res) => {
  res.send('Welcome to the Animal Intrusion Detection System!');
});

// Handle POST request for image processing
app.post('/process-image', (req, res) => {
  // Extract image data from request body
  const imageData = req.body.imageData;

  // Perform image processing
  // Add your image processing code here

  // Respond with processed image data or result
  res.json({ message: 'Image processing complete' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
