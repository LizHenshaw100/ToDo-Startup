import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../style.css";
import confetti from "canvas-confetti";

export default function List() {
  const [items, setItems] = useState(["Thing 1", "Thing 2", "Thing 3"]);
  const [newItem, setNewItem] = useState("");

  // 🎉 Confetti burst from both corners
  const fireConfetti = () => {
    const duration = 500;
    const end = Date.now() + duration;

    const shoot = () => {
      // Left bottom corner
      confetti({
        particleCount: 10,
        startVelocity: 30,
        spread: 70,
        origin: { x: 0, y: 1 },
      });
      // Right bottom corner
      confetti({
        particleCount: 10,
        startVelocity: 30,
        spread: 70,
        origin: { x: 1, y: 1 },
      });
      if (Date.now() < end) requestAnimationFrame(shoot);
    };
    shoot();
  };

  const handleAdd = () => {
    if (newItem.trim() === "") return;
    setItems([...items, newItem]);
    setNewItem("");
  };

  const handleDelete = (item) => {
    setItems(items.filter((i) => i !== item));
    fireConfetti(); // celebrate deletion
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
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "0.4rem 0",
                borderBottom: "1px solid #eee",
              }}
            >
              <span>{item}</span>
              <button
                onClick={() => handleDelete(item)}
                style={{
                  background: "transparent",
                  border: "none",
                  color: "red",
                  cursor: "pointer",
                  fontSize: "1.1rem",
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
