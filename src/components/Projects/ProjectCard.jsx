import React from "react";
import { motion } from "framer-motion";
import "./Projects.css";

function ProjectCard({ name, description, features, technologies }) {
  return (
    <motion.div
      className="enhanced-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="project-title">{name}</h2>

      <div className="project-section">
        <p className="section-content">{description}</p>
      </div>

      <div className="project-section">
        <h3 className="section-heading">Key Features:</h3>
        <ul className="section-content">
          {features.map((feature, idx) => (
            <li key={idx}>
              <span className="star-icon">⭐</span> {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className="project-section">
        <h3 className="section-heading">Technologies Used:</h3>
        <p className="tech-list">{technologies.join(", ")}</p>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
