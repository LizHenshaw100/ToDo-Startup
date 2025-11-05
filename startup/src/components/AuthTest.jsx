import React, { useState } from "react";

const AuthTest = () => {
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [message, setMessage] = useState("");

const handleFetch = async (endpoint, data = {}) => {
try {
const res = await fetch(endpoint, {
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify(data),
credentials: "include" // ensures cookies are sent
});
const json = await res.json();
setMessage(JSON.stringify(json));
} catch (err) {
setMessage("Error: " + err.message);
}
};

const handleRestricted = async () => {
try {
const res = await fetch("/api/secret", { credentials: "include" });
const json = await res.json();
setMessage(JSON.stringify(json));
} catch (err) {
setMessage("Error: " + err.message);
}
};

return (
<div style={{ border: "2px solid #888", padding: "16px", margin: "16px 0" }}> <h3>Auth Test</h3>
<input
placeholder="Username"
value={username}
onChange={e => setUsername(e.target.value)}
style={{ marginRight: "8px" }}
/>
<input
type="password"
placeholder="Password"
value={password}
onChange={e => setPassword(e.target.value)}
style={{ marginRight: "8px" }}
/>
<div style={{ marginTop: "8px" }}>
<button onClick={() => handleFetch("/api/auth/create", { username, password })}>
Register </button>
<button onClick={() => handleFetch("/api/auth/login", { username, password })} style={{ marginLeft: "8px" }}>
Login </button>
<button onClick={() => handleFetch("/api/auth/logout")} style={{ marginLeft: "8px" }}>
Logout </button>
<button onClick={handleRestricted} style={{ marginLeft: "8px" }}>
Restricted </button> </div>
<p style={{ marginTop: "12px", color: "#444" }}>{message}</p> </div>
);
};

export default AuthTest;
