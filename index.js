const express = require('express');
const path = require('path');
const app = express();

// Define the port to run the server on
const PORT = process.env.PORT || 8080;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Route to serve the main HTML file (if it's named differently, e.g., main.html)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'HomePage.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
