import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import WorkExperience from "./WorkExperience";



import laptopImg from "../../Assets/about.png";
import Volunteer from "./Volunteer";

function About() {
  return (
    <Container fluid className="about-section">
 
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "50px", paddingBottom: "20px" }}>
            <strong className="purple" >Experience</strong>
            </h1>
            <strong className="purple"  style={{ fontSize: "25px" }}>Work, Internship and Volunteership</strong>
            <p>
           
Concluded Mobile App Development internship, showcasing self-reliance in solo projects. Engaged in volunteer work, demonstrating commitment. Actively seeking job opportunities to contribute skills and passion.
            </p>
            <h1 className="project-heading">
         <strong className="purple">Work Experience </strong>
        </h1>
            < WorkExperience />

            <h1 className="project-heading">
         <strong className="purple">Volunteerships </strong>
        </h1>
            <Volunteer/>
   

     
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
      


   
      </Container>
    </Container>
  );
}

export default About;
