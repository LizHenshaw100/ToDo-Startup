import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../style.css"; // import your main CSS

const About = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    // Call a third-party API for inspirational quotes
    fetch("https://api.quotable.io/random")
      .then((response) => response.json())
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch(() => {
        setQuote("Could not load quote");
        setAuthor("");
      });
  }, []);

  return (
    <div>
      <Header />

      <main>
        <p>This is some information about the origin of this website</p>

        <img
          src="ProductivityImage.png"
          alt="Company placeholder image"
          style={{ display: "block", margin: "20px auto", maxWidth: "300px" }}
        />

        <p>This is our company purpose that drives us.</p>

        {/* ✅ Inspirational Quote from 3rd party API */}
        <div
          style={{
            border: "2px solid #ccc",
            borderRadius: "8px",
            padding: "16px",
            margin: "24px 0",
            textAlign: "center",
            backgroundColor: "#f9f9f9",
          }}
        >
          <h3>✨ Inspiration of the Moment ✨</h3>
          <p style={{ fontStyle: "italic" }}>{quote}</p>
          {author && <p>— {author}</p>}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
