// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import components with proper capitalization
import Login from "./login/Index";          // Index.jsx
import List from "./list/List";             // List.jsx
import FriendsList from "./friends_list/FriendsList"; // Friends_List.jsx
import About from "./about/About";          // About.jsx

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Default page */}
        <Route path="/" element={<Login />} />

        {/* Other pages */}
        <Route path="/list" element={<List />} />
        <Route path="/friends" element={<FriendsList />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}
