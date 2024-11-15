import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import placefirst from "../../Assets/Projects/place-first.png";

function InternshipCard({ company, position, duration, description }) {
  return (
    <Col md={6} className="internship-card">
      <div className="project-card-view">
        <h5>{company}</h5>
        <h6>{position}</h6>
        <p className="internship-duration">{duration}</p>
        <p className="internship-description">{description}</p>
      </div>
    </Col>
  );
}

function Projects() {
  const projects = [
    {
      imgPath: placefirst,
      isBlog: false,
      title: "PlaceFirst",
      description: "A MERN stack-based college placement management system enabling admins to post jobs, students to apply, and automating eligibility checks with streamlined data sharing. Built using React.js, Node.js, Express.js, Prisma, MongoDB, and Antd.",
      ghLink: "",
      demoLink: "https://place-first.vercel.app/login"
    },
    {
      imgPath: bitsOfCode,
      isBlog: false,
      title: "Social Hub",
      description: "A Social Media Web Application built using using the MERN stack Technology. Implemented real-time messaging with Socket.IO and enabled users to follow each other and post photos.",
      ghLink: "",
      demoLink: "https://example.com"
    }
  ];

  const internships = [
    {
      company: "CloudPlay Solutions.",
      position: "Backend Developer Intern",
      duration: "June 2024 - September 2024",
      description: "Maintained and optimized high-performance RESTful APIs, ensuring reliability and seamless data exchange.Engineered a full-stack project leveraging Prisma ORM with PostgreSQL, significantly improving database management and integration efficiency."
    },
    // {
    //   company: "Data Dynamics Ltd.",
    //   position: "Data Science Intern",
    //   duration: "January 2023 - April 2023",
    //   description: "Assisted in data analysis and machine learning projects. Worked on predictive modeling and data visualization using Python and relevant libraries."
    // }
  ];

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
          {projects.map((project, index) => (
            <Col md={4} className="project-card" key={index}>
              <ProjectCard
                imgPath={project.imgPath}
                isBlog={project.isBlog}
                title={project.title}
                description={project.description}
                ghLink={project.ghLink}
                demoLink={project.demoLink}
              />
            </Col>
          ))}
        </Row>

        <h1 className="project-heading" style={{ paddingTop: "50px" }}>
          My Recent <strong className="purple">Internships </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some of my recent internship experiences.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {internships.map((internship, index) => (
            <InternshipCard key={index} {...internship} />
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;