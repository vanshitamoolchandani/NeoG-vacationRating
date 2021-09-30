import "./styles.css";
import React, { useState } from "react";

var destinations = {
  Mountains: [
    { name: "Munnar, Kerala", rating: "3.3/5" },
    { name: "Coorg, Karnataka", rating: "4/5" },
    { name: "Auli, Uttarakhand", rating: "4.2/5" }
  ],

  Beaches: [
    { name: "Gokarna, Karnataka.", rating: "4.6/5" },
    { name: "Tarkarli, Maharashtra", rating: "2.5/5" },
    { name: "Kaup, Karnataka", rating: "4.3/5" }
  ],

  Historical: [
    { name: "Taj Mahal, Agra", rating: "3.6/5" },
    { name: "Hawa Mahal", rating: " 4.2/5" },
    { name: "Qutub Minar, Delhi", rating: "3/5" }
  ]
};

export default function App() {
  const [vacation, setvacation] = useState("Mountains");

  function vacationClickHandler(vacation) {
    setvacation(vacation);
  }

  return (
    <div className="App">
      <h1
        style={{
          fontSize: "2.5rem",
          backgroundColor: "#8b132f",
          color: "white",
          padding: "2rem 0rem"
        }}
      >
        <strong>Vacation</strong>
      </h1>

      {Object.keys(destinations).map((vacation) => (
        <button
          onClick={() => vacationClickHandler(vacation)}
          style={{
            fontSize: "1.8rem",
            padding: "0.5rem 2rem",
            margin: "1rem",
            cursor: "pointer",
            backgroundColor: "#004380",
            borderRadius: "1rem",
            color: "white"
          }}
          key={vacation}
        >
          {vacation}
        </button>
      ))}

      <h2 style={{ fontSize: "1.8rem" }}>Destinations:</h2>
      <ul
        className="list-nobullets container-center"
        style={{ display: "block", backgroundColor: "#fad6d2" }}
      >
        {destinations[vacation].map((destinations) => (
          <li className="list-inline" key={destinations.name}>
            <div
              style={{
                margin: "auto",
                color: "#8b132f",
                fontSize: "1.5rem",
                padding: "1rem 1rem"
              }}
            >
              {destinations.name}
              {" | "}
              <span
                style={{
                  padding: "0.2rem 0rem",
                  color: "#004380",
                  height: "1rem"
                }}
              >
                Rating: {destinations.rating}
              </span>
            </div>
          </li>
        ))}
      </ul>
      <div style = {{height:"10mm"}}></div>

      <footer className="footer heading-alignc">
        <div>
          <h2 className="heading-alignc">Social Network</h2>
          <ul className="footer list-nobullets">
            <li className="list-inline">
              <a
                className="link"
                href="https://www.linkedin.com/in/vanshita-moolchandani/"
              >
                Linkedin
              </a>
            </li>
            <li className="list-inline">
              <a
                className="link"
                href="https://www.instagram.com/vanshitamoolchandani/"
              >
                Instagram
              </a>
            </li>
            <li className="list-inline">
              <a
                className="link"
                href="https://github.com/vanshitamoolchandani"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
