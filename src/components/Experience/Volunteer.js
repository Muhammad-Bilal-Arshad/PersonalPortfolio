import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";

function Volunteer() {
  const [showDetails, setShowDetails] = useState(false);

  const handleBoxClick = () => {
    setShowDetails(!showDetails);
  };

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={12} className="tech-icons" onClick={handleBoxClick}>
        <div
          style={{
            width: "100%",
            border: "1px solid #000",
            padding: "10px",
            boxSizing: "border-box",
            cursor: "pointer",
          }}
        >
          <p style={{ fontSize: "22px", margin: 0 }}>
            Comsats Co-Curricular E-Gaming Server Manager
          </p>
        </div>
        {showDetails && (
         <div style={{ fontSize: "18px", marginTop: "5px", color: "pink" }}>
         <p style={{ color: "white", fontSize: "15px" }}>
         Created and Managed the  e-gaming discord server for Comsats Co Curricular Club.
         </p>
       </div>
       
           
        )}
      </Col>
    </Row>
  );
}

export default Volunteer;
