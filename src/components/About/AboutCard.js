import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Muhammad Bilal Arshad </span>
            from <span className="purple"> Islamabad, Pakistan</span>
            <br />
            I am currently a last semester undergrad student at Comsats University Islamabad.
            <br />
            
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Football
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movies and TV Series
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            
              "Believe you can and you're halfway there."{" "}
          </p>
          <footer className="blockquote-footer">Theodore Roosevelt</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
