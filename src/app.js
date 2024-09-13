const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8081;

// Serve static files (CSS, JS, images, etc.)
app.use(express.static(path.join(__dirname, '../public')));

// Route for Home Page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Route for Gadgets Page
app.get('/gadgets', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/gadgets.html'));
});

// Route for SIM Carrier Page
app.get('/sim-carrier', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/sim-carrier.html'));
});

// Route for About Us Page
app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/about.html'));
});

// Route for Contact Us Page
app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/contact.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
