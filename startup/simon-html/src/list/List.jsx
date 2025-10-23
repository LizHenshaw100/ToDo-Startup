import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../style.css";

export default function List() {
  const [items, setItems] = useState(["Thing 1", "Thing 2", "Thing 3"]);
  const [newItem, setNewItem] = useState("");
  const [completed, setCompleted] = useState([]);

  const handleAdd = () => {
    if (newItem.trim() === "") return;
    setItems([...items, newItem]);
    setNewItem("");
  };

  const toggleComplete = (item) => {
    setCompleted((prev) =>
      prev.includes(item)
        ? prev.filter((i) => i !== item)
        : [...prev, item]
    );
  };

  const handleDelete = (item) => {
    setItems(items.filter((i) => i !== item));
    setCompleted(completed.filter((i) => i !== item));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAdd();
    }
  };

  return (
    <>
      <Header />
      <main>
        <div className="list">List:</div>

        <ul className="notification">
          {items.map((item, index) => (
            <li
              key={index}
              className="player-name"
              onClick={() => toggleComplete(item)}
              style={{
                textDecoration: completed.includes(item)
                  ? "line-through"
                  : "none",
                color: completed.includes(item) ? "gray" : "inherit",
                cursor: "pointer",
              }}
            >
              {item}{" "}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleDelete(item);
                }}
                style={{
                  marginLeft: "0.5rem",
                  background: "transparent",
                  border: "none",
                  color: "red",
                  cursor: "pointer",
                }}
              >
                ❌
              </button>
            </li>
          ))}
        </ul>

        <div style={{ marginTop: "1rem" }}>
          <input
            type="text"
            placeholder="Add thing..."
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            onKeyDown={handleKeyDown}
            style={{
              marginRight: "0.5rem",
              padding: "0.4rem 0.6rem",
              borderRadius: "6px",
              border: "1px solid #1E88E5",
            }}
          />
          <button
            onClick={handleAdd}
            style={{
              backgroundColor: "#1E88E5",
              color: "#fff",
              border: "none",
              borderRadius: "6px",
              padding: "0.45rem 1rem",
              cursor: "pointer",
              fontWeight: "600",
              transition: "background-color 0.2s ease",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#1565C0")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#1E88E5")}
          >
            ➕ Add
          </button>
        </div>
      </main>
      <Footer />
    </>
  );
}
