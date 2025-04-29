import React from "react";
import { Container, Row } from "react-bootstrap";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

import hrms from "../../assets/hrms.jpg";
import lms from "../../assets/lms.png";
import onboarding from "../../assets/onboarding.jpg";

const projects = [
  {
    name: "Human Resource Management System",
    description: "Built a comprehensive Human Resource Management System handling onboarding to offboarding processes, ensuring seamless employee management.",
    features: [
      "Employee Onboarding: Developed a guided onboarding process.",
      "Timesheet Management: Implemented a module for employees to log working hours.",
      "Shift Management: Designed an interactive shift scheduling system.",
      "Leave Management: Integrated leave requests and approval system.",
    ],
    technologies: ["React.js", "Bootstrap", "Redux", "REST API"],
    imageUrl: hrms, 
  },
  {
    name: "Onboarding Portal",
    description: "Developed a complete onboarding portal for organizations using Eclipse JSP pages...",
    features: [
      "Requisition: Created a form for managers to initiate hiring.",
      "Job Seeker Profile: Designed a profile management system.",
      "Interview Scheduling: Implemented a module for scheduling and tracking interviews.",
      "Feedback System: Developed a feedback form with rating and comments.",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "jQuery", "JSP", "Bootstrap", "MySQL", "Java"],
    imageUrl: onboarding,
  },
  {
    name: "Leave Management System",
    description: "Designed a portal for maintaining employee leave details with an intuitive UI...",
    features: [
      "Apply Leave: Developed a submodule with date picker functionality.",
      "Sandwich Policy Validations: Added frontend validations to ensure compliance with company policies.",
      "Leave History: Created a module to display detailed leave history.",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "jQuery", "JSP", "Bootstrap", "MySQL", "Java"],
    imageUrl: lms,
  },
];

function Projects() {
  
  return (
    <Container fluid>
      <Container>
        <motion.h1
          className="project-heading"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          My Recent Works
        </motion.h1>
        <p style={{ textAlign: "center", color: "black" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row className="projectCardsDiv">
          {projects.map((project, index) => (
            <div key={index} className="project-card-view">
              <ProjectCard {...project} />
            </div>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
