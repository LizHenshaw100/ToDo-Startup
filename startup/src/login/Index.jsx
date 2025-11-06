// src/login/Index.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

function Footer() {
  return (
    <footer style={{ textAlign: "center", marginTop: "2rem" }}>
      <hr />
      <p><strong>Liz Henshaw</strong></p>
      <a
        href="https://github.com/LizHenshaw100/ToDo-Startup"
        target="_blank"
        rel="noopener noreferrer"
      >
        ToDo-Startup GitHub
      </a>
    </footer>
  );
}

function Login() {
  const [error, setError] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const username = formData.get("username");
    const password = formData.get("password");

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      if (res.ok) {
        setError("");
        // Redirect to list page on successful login
        navigate("/list");
      } else {
        const data = await res.json();
        setError(data.message || "Login failed");
      }
    } catch (err) {
      setError("Network error");
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const username = formData.get("username");
    const password = formData.get("password");

    try {
      const res = await fetch("/api/auth/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();
      setMessage(data.message || "User created");
      // Switch back to login after successful registration
      if (res.ok) {
        setTimeout(() => setIsRegistering(false), 2000);
      }
    } catch (err) {
      setMessage("Network error");
    }
  };

  if (isRegistering) {
    return (
      <>
        <main>
          <h2>Register</h2>
          <form onSubmit={handleRegister}>
            <input type="text" name="username" placeholder="Username" required />
            <input type="password" name="password" placeholder="Password" required />
            <button type="submit">Create Account</button>
          </form>
          {message && <div style={{ color: message.includes("error") ? "red" : "green" }}>{message}</div>}
          <p>
            Already have an account?{" "}
            <button 
              type="button" 
              onClick={() => setIsRegistering(false)}
              style={{ background: "none", border: "none", color: "blue", textDecoration: "underline", cursor: "pointer" }}
            >
              Login here
            </button>
          </p>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <main>
        <h1>ToDo List</h1>
        <form onSubmit={handleLogin}>
          <div>
            <span>@</span>
            <input type="text" name="username" placeholder="your@email.com" required />
          </div>
          <div>
            <span>🔒</span>
            <input type="password" name="password" placeholder="password" required />
          </div>
          <button type="submit">Login</button>
        </form>
        {error && <div style={{ color: "red" }}>{error}</div>}
        <p>
          Don't have an account?{" "}
          <button 
            type="button" 
            onClick={() => setIsRegistering(true)}
            style={{ background: "none", border: "none", color: "blue", textDecoration: "underline", cursor: "pointer" }}
          >
            Register here
          </button>
        </p>
      </main>
      <Footer />
    </>
  );
}

export default Login;