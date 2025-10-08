import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../style.css";

export default function List() {
  return (
    <>
      <Header />
      <main>
        <div className="list">List:</div>

        <ul className="notification">
          <li className="player-name">Thing 1</li>
          <li className="player-name">Thing 2</li>
          <li className="player-name">Thing 3</li>
          <li className="player-name">Add thing</li>
        </ul>

        <br />
        <br />

        <div>
          <button>Previous</button>
          <button>Next</button>
        </div>
      </main>
      <Footer />
    </>
  );
}
