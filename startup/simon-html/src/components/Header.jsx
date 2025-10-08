import React from "react";
import { Link } from "react-router-dom"; // <-- import Link
//import "./Header.css";

export default function Header() {
  return (
    <header>
      <h1>
        ToDo List<sup>&reg;</sup>
      </h1>

      <nav>
        <ul>
          <li><Link to="/list">ToDo List</Link></li>
          <li><Link to="/friends">Friends</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/">Logout</Link></li>
        </ul>
      </nav>

      <hr />
    </header>
  );
}
