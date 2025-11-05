// service/index.js

const express = require('express');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const { v4: uuidv4 } = require('uuid');

const app = express();
const port = process.argv.length > 2 ? process.argv[2] : 4000;

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.static('public'));

// In-memory user storage
const users = [];

// --------------------
// Authentication Endpoints
// --------------------

// Registration: /api/auth/create
app.post('/api/auth/create', async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password required' });
  }

  if (users.find(u => u.username === username)) {
    return res.status(400).json({ message: 'Username already taken' });
  }

  const passwordHash = await bcrypt.hash(password, 10);
  const newUser = { id: uuidv4(), username, passwordHash };
  users.push(newUser);

  res.json({ message: 'User created successfully', userId: newUser.id });
});

// Login: /api/auth/login
app.post('/api/auth/login', async (req, res) => {
  const { username, password } = req.body;

  const user = users.find(u => u.username === username);
  if (!user) return res.status(400).json({ message: 'Invalid username or password' });

  const isValid = await bcrypt.compare(password, user.passwordHash);
  if (!isValid) return res.status(400).json({ message: 'Invalid username or password' });

  // Set simple cookie to track login
  res.cookie('userId', user.id, { httpOnly: true });
  res.json({ message: 'Login successful' });
});

// Logout: /api/auth/logout
app.post('/api/auth/logout', (req, res) => {
  res.clearCookie('userId');
  res.json({ message: 'Logged out successfully' });
});

// --------------------
// Protected Route Example
// --------------------
function requireAuth(req, res, next) {
  const userId = req.cookies.userId;
  if (!userId || !users.find(u => u.id === userId)) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  next();
}

app.get('/api/secret', requireAuth, (req, res) => {
  res.json({ secret: 'This is a protected secret!' });
});

// --------------------
// Test Endpoint
// --------------------
app.get('/api/test', (req, res) => {
  res.json({ message: 'Service working!' });
});

// --------------------
// Start server
// --------------------
app.listen(port, () => {
  console.log(`Service started on port ${port}`);
});
