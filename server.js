const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Define a route for the root URL "/"
app.get('/', (req, res) => {
  res.send('Welcome to my website!');
});

// Start the server on the specified port
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
