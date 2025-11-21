
const express = require('express');
const path = require('path');

const app = express();

// Serve static assets from the `public` folder (CSS, images, HTML, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Root route - serves the index.html file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Use PORT env var for compatibility with hosting platforms (Render, Heroku, etc.)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
