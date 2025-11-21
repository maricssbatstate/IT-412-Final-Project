
const express = require('express');
const path = require('path');

const app = express();

const fullName = process.env.FULL_NAME || 'Maricar Esto Panganiban';
const classSection = 'BA 4101';
const quote = process.env.QUOTE || 'Never be afraid to try something new, life gets boring when you stay within the limit of what you already know.- Anonymous';

// Serve static assets from the `public` folder (CSS, images, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Root route - returns a small, responsive HTML page
app.get('/', (req, res) => {
  res.send(`<!doctype html>
  <html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${fullName} — ${classSection}</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="/style.css">
  </head>
  <body>
    <main class="container">
      <div class="card">
        <div class="image-placeholder">
          <img src="/marics.jpg" alt="${fullName}" class="profile-image">
        </div>
        <h1 class="name">${fullName}</h1>
        <p class="section">${classSection}</p>
        <blockquote class="quote">"${quote}"</blockquote>
      </div>
    </main>
  </body>
  </html>`);
});

// Use PORT env var for compatibility with hosting platforms (Render, Heroku, etc.)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
