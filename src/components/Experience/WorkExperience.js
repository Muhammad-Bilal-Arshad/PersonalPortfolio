import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";

function WorkExperience() {
  const [showDetails, setShowDetails] = useState(false);
  const [showDeveloperDetails, setShowDeveloperDetails] = useState(false);

  const handleBoxClick = () => {
    setShowDetails(!showDetails);
    setShowDeveloperDetails(false);
  };

  const handleDeveloperBoxClick = () => {
    setShowDeveloperDetails(!showDeveloperDetails);
    setShowDetails(false);
  };

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={12} className="tech-icons">
        <div
          style={{
            width: "100%",
            border: "1px solid #000",
            padding: "10px",
            boxSizing: "border-box",
            cursor: "pointer",
            marginBottom: "10px",
          }}
          onClick={handleBoxClick}
        >
          <p style={{ fontSize: "22px", margin: 0 }}>
            Mobile Application Development Intern
          </p>
        </div>
        {showDetails && (
          <div style={{ fontSize: "18px", marginTop: "5px", color: "pink" }}>
            <p>Candid Purelife</p>
            <p>July 2023 - August 2023</p>
            <p style={{ color: "white", fontSize: "15px" }}>
              Created a mobile app to digitalize all their manual processes.
            </p>
          </div>
        )}

        <div
          style={{
            width: "100%",
            border: "1px solid #000",
            padding: "10px",
            boxSizing: "border-box",
            cursor: "pointer",
          }}
          onClick={handleDeveloperBoxClick}
        >
          <p style={{ fontSize: "22px", margin: 0 }}>Mobile/Web Developer</p>
        </div>
        {showDeveloperDetails && (
          <div style={{ fontSize: "18px", marginTop: "5px", color: "pink" }}>
            <p>Fiverr/UpWork</p>
            <p>Aug 2023 - Present</p>
            <p style={{ color: "white", fontSize: "15px" }}>
              Creating web and mobile apps for clients.
            </p>
          </div>
        )}
      </Col>
    </Row>
  );
}

export default WorkExperience;
