import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import spc2 from "../../Assets/Projects/spc2.png";
import farm2 from "../../Assets/Projects/farm2.png";
import igg2 from "../../Assets/Projects/igg2.png";
import coff2 from "../../Assets/Projects/coff2.png";
import trav2 from "../../Assets/Projects/trav2.png";
import noos2 from "../../Assets/Projects/noos2.png";

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
              imgPath={spc2}
              isBlog={false}
              title="Spatial Network Visualization Webpage"
              description="A beginner-friendly webpage for IIT Roorkee B.Tech students to showcase spatial network images using HTML, CSS, and JavaScript, with an instructional handbook to simplify web content management."
              ghLink="https://github.com/kritikaa03/space"
              demoLink="https://www.canva.com/design/DAGYEWwYzJQ/yg90TGOFHKmvAT7HbXVeKQ/edit"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={farm2}
              isBlog={false}
              title="Farmers' Assistant"
              description="A hybrid CNN-Transformer model for crop recognition, health evaluation, and disease prediction with high accuracy. Integrated a Streamlit frontend for real-time image uploads and predictions."
              ghLink="https://github.com/kritikaa03/crop-app"
              demoLink="https://farmerassistant.streamlit.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={igg2}
              isBlog={false}
              title="Instagram Post Analysis"
              description="A machine learning project to analyze Instagram post reach using Python and NumPy for data manipulation. The project involved generating visual performance metrics by plotting graphs on key features like home and likes, providing insights into engagement and reach."
              ghLink="https://github.com/kritikaa03/instagram-posts-analysis"
                          
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={coff2}
              isBlog={false}
              title="Coffee Shop Website"
              description="A fully responsive website for a coffee shop, featuring a dynamic header, home, and about sections using CSS Flexbox for layout and styling"
              ghLink="https://github.com/kritikaa03/coffee-shop-website"
              demoLink="https://cafeena.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={trav2}
              isBlog={false}
              title="Travel and Tour Website"
              description="Developed a clean and responsive travel and tour website using React.js, incorporating modern UI elements and animations to enhance user engagement."
              ghLink="https://github.com/kritikaa03/travel-website"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={noos2}
              isBlog={false}
              title="News Portal"
              description="Developed a dynamic news portal using React.js with a responsive design to display articles across various categories and implemented key frontend features"
              ghLink="https://github.com/kritikaa03/News-Portal"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
