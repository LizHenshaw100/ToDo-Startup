import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // <-- import this
import "./login.css";

export default function Login() {
  const [error, setError] = useState("");
  const navigate = useNavigate(); // <-- create navigate function

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const username = formData.get("username");
    const password = formData.get("password");

    if (username === "admin" && password === "password123") {
      setError(""); 
      // redirect to /list after successful login
      navigate("/list");
    } else {
      setError("❌ Invalid username or password");
    }
  };

  return (
    <>
      <main>
        <h1
          style={{
            color: "#1E88E5",
            fontSize: "2.5rem",
            fontFamily: "'Segoe UI','Arial Rounded MT Bold',Arial,sans-serif",
            textAlign: "center",
            marginBottom: "1rem",
            textShadow:
              "1px 2px 8px rgba(25,118,210,0.10), 0 1px 0 #fff",
          }}
        >
          ToDo List
        </h1>
        <p
          style={{
            color: "#1E88E5",
            textAlign: "center",
            marginTop: "0.5rem",
          }}
        >
          To log in, enter <strong>admin</strong> as the username and{" "}
          <strong>password123</strong> as the password.
        </p>

        <form id="loginForm" onSubmit={handleSubmit}>
          <div>
            <span>@</span>
            <input type="text" name="username" placeholder="your@email.com" />
          </div>
          <div>
            <span>🔒</span>
            <input type="password" name="password" placeholder="password" />
          </div>
          <button type="submit">Login</button>
          <button type="button">Create</button>
        </form>

        {error && <div id="errorMsg" style={{ color: "red" }}>{error}</div>}
      </main>

      <footer>
        <hr />
        <p
          style={{
            color: "#fff",
            textAlign: "center",
            marginTop: "0.5rem",
          }}
        >
          <strong>Liz Henshaw</strong>
        </p>
        <br />
        <a href="https://github.com/LizHenshaw100/ToDo-Startup">
          ToDo-Startup GitHub
        </a>
      </footer>
    </>
  );
}
