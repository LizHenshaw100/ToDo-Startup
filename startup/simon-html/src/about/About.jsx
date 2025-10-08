// src/about/About.jsx
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../style.css"; // import your main CSS

const About = () => {
  return (
    <div>
      <Header />

      <main>
        <p>
          This is some information about the origin of this website
        </p>

        <img
          src="ProductivityImage.png"
          alt="Company placeholder image"
          style={{ display: "block", margin: "20px auto", maxWidth: "300px" }}
        />

        <p>
          This is our company purpose that drives us.
        </p>

        {/* Placeholder for 3rd party service calls */}
        <div
          style={{
            border: "2px dashed #888",
            padding: "16px",
            margin: "24px 0",
            textAlign: "center",
          }}
        >
          <strong>3rd Party Service Calls Placeholder</strong>
          <br />
          <span style={{ color: "#888" }}>
            (This area reserved for future integration with external services.)
          </span>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
