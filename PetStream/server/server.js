const express = require('express');
const path = require('path');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Sample contact API endpoint
app.post('/api/contact', (req, res) => {
  const { name, email, phone, message } = req.body;

  // Simulate handling the contact form
  console.log('Contact form submitted:', { name, email, phone, message });

  res.status(200).json({
    success: true,
    message: 'Message received! We will contact you soon.',
  });
});

// Serve React build files in production
if (process.env.NODE_ENV === 'production') {
  const clientBuildPath = path.join(__dirname, '../client/build');
  app.use(express.static(clientBuildPath));

  app.get('*', (req, res) => {
    res.sendFile(path.join(clientBuildPath, 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
