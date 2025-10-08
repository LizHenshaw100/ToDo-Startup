import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../style.css";

export default function FriendsList() {
  return (
    <>
      <Header />
      <main>
        <div className="main-content">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Tasks Completed</th>
                <th>Friends Since</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>도윤 이</td>
                <td>34</td>
                <td>May 20, 2021</td>
              </tr>
              <tr>
                <td>Annie James</td>
                <td>29</td>
                <td>June 2, 2021</td>
              </tr>
              <tr>
                <td>Gunter Spears</td>
                <td>7</td>
                <td>July 3, 2020</td>
              </tr>
            </tbody>
          </table>

          {/* Placeholder for DB Data */}
          <div
            style={{
              border: "2px dashed #888",
              padding: "16px",
              margin: "24px 0",
              textAlign: "center",
            }}
          >
            <strong>DB Data Placeholder</strong>
            <br />
            <span style={{ color: "#888" }}>
              (This area reserved for future database-driven content.)
            </span>
          </div>

          {/* Placeholder for WebSocket */}
          <div
            style={{
              border: "2px dashed #888",
              padding: "16px",
              margin: "24px 0",
              textAlign: "center",
            }}
          >
            <strong>WebSocket Placeholder</strong>
            <br />
            <span style={{ color: "#888" }}>
              (This area reserved for future real-time updates via WebSocket.)
            </span>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
