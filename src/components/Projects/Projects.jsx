import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import "./Projects.css";

const projects = [
  {
    name: "Onboarding Portal",
    description:
      "Developed a complete onboarding portal for organizations using Eclipse JSP pages. Implemented features like requisition forms, job title and description management, job seeker profiles, interview scheduling, and feedback submission.",
    features: [
      "Requisition: Created a form for managers to initiate hiring.",
      "Job Seeker Profile: Designed a profile management system.",
      "Interview Scheduling: Implemented a module for scheduling and tracking interviews.",
      "Feedback System: Developed a feedback form with rating and comments.",
    ],
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "jQuery",
      "JSP",
      "Bootstrap",
      "MySQL",
      "Java",
    ]
  },
  {
    name: "Leave Management System",
    description:
      "Designed a portal for maintaining employee leave details with an intuitive UI, real-time validations, and history tracking.",
    features: [
      "Apply Leave: Developed a submodule with date picker functionality.",
      "Sandwich Policy Validations: Added frontend validations to ensure compliance with company policies.",
      "Leave History: Created a module to display detailed leave history.",
    ],
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "jQuery",
      "JSP",
      "Bootstrap",
      "MySQL",
      "Java",
    ]
  },
  {
    name: "HRMS (React.js)",
    description:
      "Built a comprehensive Human Resource Management System handling onboarding to offboarding processes, ensuring seamless employee management.",
    features: [
      "Employee Onboarding: Developed a guided onboarding process.",
      "Timesheet Management: Implemented a module for employees to log working hours.",
      "Shift Management: Designed an interactive shift scheduling system.",
      "Leave Management: Integrated leave requests and approval system.",
    ],
    technologies: ["React.js", "Bootstrap", "Redux", "REST API"]
  },
];

function Projects() {
  return (
    <Container fluid className="section">
      <div className="sectionDiv" style={{ padding: "2rem" }}>
      <Container>
        <h1 className="project-heading" style={{color: "black"}}>
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ textAlign: 'center' }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row className="projectCardsDiv">
          {projects.map((project, index) => (
            <Col md={4} className="project-card" key={index}>
              <ProjectCard
                title={project.name}
                description={project.description}
                features={project.features}
                technologies={project.technologies}
                ghLink={project.ghLink}
                demoLink={project.demoLink}
              />
            </Col>
          ))}
        </Row>
      </Container>
      </div>
    </Container>
  );
}

export default Projects;
