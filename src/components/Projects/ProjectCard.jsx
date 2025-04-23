import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import "./Projects.css";

function ProjectCard({ title, description, features, technologies, ghLink, demoLink }) {
    return (
      <Card className="project-card-view">
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text style={{ textAlign: "justify" }}>{description}</Card.Text>
          <ul>
            {features.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
          <p>
            <strong>Technologies Used:</strong> {technologies.join(", ")}
          </p>
          
        </Card.Body>
      </Card>
    );
  }

export default ProjectCard
