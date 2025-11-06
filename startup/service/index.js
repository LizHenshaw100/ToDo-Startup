const express = require("express");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const { v4: uuidv4 } = require("uuid");
const path = require("path");

const app = express();
const port = process.argv.length > 2 ? process.argv[2] : 4000;

// ------------------------
// Middleware
// ------------------------
app.use(express.json());
app.use(cookieParser());

// ------------------------
// In-memory user storage
// ------------------------
const users = [];
const findUser = (username) => users.find((u) => u.username === username);

// ------------------------
// Auth endpoints
// ------------------------

// Registration
app.post("/api/auth/create", async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) return res.status(400).json({ message: "Missing fields" });
  if (findUser(username)) return res.status(400).json({ message: "User already exists" });

  const passwordHash = await bcrypt.hash(password, 10);
  const id = uuidv4();
  users.push({ id, username, passwordHash });
  res.json({ message: "User created", id, username });
});

// Login
app.post("/api/auth/login", async (req, res) => {
  const { username, password } = req.body;
  const user = findUser(username);
  if (!user) return res.status(401).json({ message: "Invalid credentials" });

  const valid = await bcrypt.compare(password, user.passwordHash);
  if (!valid) return res.status(401).json({ message: "Invalid credentials" });

  res.cookie("auth", user.id, { httpOnly: true });
  res.json({ message: "Logged in" });
});

// Logout
app.post("/api/auth/logout", (req, res) => {
  res.clearCookie("auth");
  res.json({ message: "Logged out" });
});

// Secret endpoint
app.get("/api/secret", (req, res) => {
  const userId = req.cookies.auth;
  if (!userId || !users.find((u) => u.id === userId)) {
    return res.status(401).json({ message: "Access denied" });
  }
  res.json({ message: "This is a secret message for authenticated users only!" });
});

// Test endpoint
app.get("/api/test", (req, res) => {
  res.json({ message: "Service working!" });
});

app.get("/api/quote", async (req, res) => {
  try {
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch quote" });
  }
});

// ------------------------
// Serve React frontend
// ------------------------
const DIST_PATH = path.join(__dirname, "../dist");
app.use(express.static(DIST_PATH));

// SIMPLE CATCH-ALL: Serve index.html for any route that's not an API route
app.use((req, res, next) => {
  if (req.path.startsWith('/api/')) {
    return next(); // Let API routes handle themselves
  }
  res.sendFile(path.join(DIST_PATH, "index.html"));
});

// ------------------------
// Start server
// ------------------------
app.listen(port, () => {
  console.log(`Service started on port ${port}`);
});