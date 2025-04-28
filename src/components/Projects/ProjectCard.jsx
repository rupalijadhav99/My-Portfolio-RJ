import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Projects.css";

function ProjectCard({ name, description, features, technologies, imageUrl }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <motion.div
      className="enhanced-card new-card-layout"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}>
      <div className="card-content">
        {/* Left side (Project name and button) */}
        <div className="left-section">
          <h2 className="project-title">{name}</h2>
          <button
            className="view-project-btn"
            onClick={() => setShowDetails(!showDetails)}
          >
            {showDetails ? "Hide Details" : "View Project"}
          </button>
        </div>

        {/* Right side (Image or content) */}
        <div className="right-section">
          {showDetails ? (
            <div className="project-details">
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
            </div>
          ) : (
            <img src={imageUrl} alt={name} className="project-image" />
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
