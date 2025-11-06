import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../style.css";
import ProductivityImage from "../../ProductivityImage.png";

const About = () => {
  const [joke, setJoke] = useState("");
  const [punchline, setPunchline] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Call a third-party API for random jokes
    fetch("https://official-joke-api.appspot.com/random_joke")
      .then((response) => response.json())
      .then((data) => {
        setJoke(data.setup);
        setPunchline(data.punchline);
        setLoading(false);
      })
      .catch(() => {
        setJoke("Could not load joke");
        setPunchline("");
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <Header />

      <main>
        <p>This is some information about the origin of this website</p>

        <img
          src={ProductivityImage}
          alt="Company placeholder image"
          style={{ display: "block", margin: "20px auto", maxWidth: "300px" }}
        />

        <p>This is our company purpose that drives us.</p>

        {/* ✅ Random Joke from 3rd party API */}
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
          <h3>A Free Joke For You</h3>
          {loading ? (
            <p>Loading joke...</p>
          ) : (
            <>
              <p style={{ fontStyle: "italic", marginBottom: "10px" }}>{joke}</p>
              {punchline && (
                <p style={{ fontWeight: "bold", color: "#333" }}>{punchline}</p>
              )}
            </>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;