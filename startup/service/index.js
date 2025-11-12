const express = require("express");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const { v4: uuidv4 } = require("uuid");
const path = require("path");
const { connectToDatabase, getDb } = require("./database");


const app = express();
let db;

connectToDatabase()
  .then((database) => {
    db = database;
    console.log("✅ Connected to MongoDB");

    app.listen(port, () => {
      console.log(`Service started on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("❌ Failed to connect to MongoDB", err);
    process.exit(1);
  });


const port = process.argv.length > 2 ? process.argv[2] : 4000;

// ------------------------
// Middleware
// ------------------------
app.use(express.json());
app.use(cookieParser());

// ------------------------
// Data base memory
// ------------------------
const findUser = async (username) => {
  return await db.collection("users").findOne({ username });
};

// ------------------------
// Auth endpoints
// ------------------------

// Registration
app.post("/api/auth/create", async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) return res.status(400).json({ message: "Missing fields" });

  const existing = await findUser(username);
  if (existing) return res.status(400).json({ message: "User already exists" });

  const passwordHash = await bcrypt.hash(password, 10);
  const id = uuidv4();
  await db.collection("users").insertOne({ id, username, passwordHash });
  res.json({ message: "User created", id, username });
});


// Login
app.post("/api/auth/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await findUser(username);
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
app.get("/api/secret", async (req, res) => {
  const userId = req.cookies.auth;
  const user = await db.collection("users").findOne({ id: userId });
  if (!user) return res.status(401).json({ message: "Access denied" });
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
// To-Do list endpoints
// ------------------------

app.get("/api/todos", async (req, res) => {
  const userId = req.cookies.auth;
  if (!userId) return res.status(401).json({ message: "Not authenticated" });

  const doc = await db.collection("todos").findOne({ userId });
  res.json(doc ? doc.items : []);
});

app.post("/api/todos", async (req, res) => {
  const userId = req.cookies.auth;
  if (!userId) return res.status(401).json({ message: "Not authenticated" });

  const { items } = req.body;
  await db
    .collection("todos")
    .updateOne(
      { userId },
      { $set: { items } },
      { upsert: true } // create if not exists
    );
  res.json({ message: "Saved" });
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