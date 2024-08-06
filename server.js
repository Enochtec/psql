require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const knex = require('knex')(require('./knexfile').development);
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'register.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

// Register route
app.post('/register', (req, res) => {
  const { username, password, email, phone_number } = req.body;
  knex('users').insert({ username, password, email, phone_number })
    .then(() => res.redirect('/login'))
    .catch(err => res.status(400).send(`Error: ${err.message}`));
});

// Login route
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  knex('users').where({ username, password }).first()
    .then(user => {
      if (user) {
        res.redirect(`/dashboard?username=${encodeURIComponent(username)}`);
      } else {
        res.status(400).send('Invalid credentials');
      }
    })
    .catch(err => res.status(400).send(`Error: ${err.message}`));
});

// Dashboard route
app.get('/dashboard', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'dashboard.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
