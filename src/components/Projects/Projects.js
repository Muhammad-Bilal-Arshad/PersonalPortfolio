import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import youtube from "../../Assets/Projects/youtube.png";
import suicide from "../../Assets/Projects/suicide.png";
import middleearth from "../../Assets/Projects/middleearth.png";
import heatmap from '../../Assets/Projects/heatmap.png'

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={heatmap}
              isBlog={false}
              title="EPPDA"
              description="A hybrid system consisting of a civilian mobile app through which a civilian can signup/login to report crimes based on location. The request will be forwarded to Police station' s website according to the location of the crime. Now from there the crime will be forwarded to the nearest patrolling police officer's app. The police officer can give update reports that will be conveyed to Admin and Police station's website and from there they will be forwarded to civilian's app. Now if a civilian reports a crime by simple calling, the call will be made to the dispatcher who will then fill the crime form and forward it to police station and the rest of the process will be the same. There will be an admin website which will be responsible for creating, updating and deleting Dispatcher, Police station and Police officer's accounts. The statistics of received/solved crimes will be shown to the admin in the form of HeatMap and Graph. An ML module will be implemented in which we will train the models on the faces of wanted criminals. Now Police app will have a feature to implement this model by taking a pic of a suspect and then running it through the model to find similarities between the taken suspect pic and those already present in database."
              ghLink="On a Private Repo"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={middleearth}
              isBlog={false}
              title="MiddleEarth BookShop"
              description="A mobile app created for a bookshop owners. It keeps tracks of all the bookshop inventory including which books are sold and which are in stock. It also keeps track of the customers and their orders. It also has a feature to add new books to the inventory. It also has a feature to view all the sales and sales can be sorted on the basis of either dates or the name of books. To create this application I used React Native and Firebase. "
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={youtube}
              isBlog={false}
              title="Youtube Clone"
              description="Crafted a captivating YouTube Clone with React Native, Rapid API, and Tailwind CSS. This UI clone mirrors the familiar aesthetics of the original platform, offering an immersive experience for users. Leveraging React Native, the app seamlessly fetches homepage videos through Rapid API, providing dynamic and up-to-date content. The integration of Tailwind CSS ensures a modern and visually appealing design. This project showcases my adeptness in mobile app development and API integration, emphasizing a commitment to delivering engaging and user-friendly applications."
              ghLink="https://github.com/Muhammad-Bilal-Arshad/Youtube-Clone-ReactNative"
                           
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
