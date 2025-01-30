// the url should take the user to the default countdown -> today to 2025-03-21
// use ejs to render the countdown page
// play my song, "79"
// display should be like the inside of a bomb to defuse

// build out "Start a NEW Countdown" button and functionality later
// user inputs the date for the countdown to begin
// is there a spinner?


// app.js
require('dotenv').config();
const PORT = process.env.PORT || 3000;
const express = require('express');
const path = require('path');
const app = express();
const port = PORT;

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));  // serve files from the public directory

app.get('/', (req, res) => {
  const targetDate = new Date('March 21, 2025 09:00:00 GMT-0600'); // Mountain Time
  const now = new Date();
  const diffTime = targetDate - now;

  // Calculate time components
  const days = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diffTime / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diffTime / (1000 * 60)) % 60);
  const seconds = Math.floor((diffTime / 1000) % 60);
  res.render('index', { days, hours, minutes, seconds });
});

app.use((req, res) => {
  res.status(404).render('404');
});

app.listen(port, () => {
  console.log(`Server is ticking on port ${port}`);
});
