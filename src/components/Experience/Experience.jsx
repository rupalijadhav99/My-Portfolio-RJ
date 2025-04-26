import React from "react";
import "./Experience.css";
import { motion } from "framer-motion";
import companyLogo from "../../assets/rnt.svg"; // update path if needed

const Experience = () => {
  return (
    <div className="experience-container">
      <h1 className="experience-heading">Experience</h1>

      <motion.div
        className="experience-card"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Top section: Company details and Logo */}
        <div className="experience-top-section">
          <div className="experience-logo-wrapper">
            <img src={companyLogo} alt="Company Logo" className="experience-logo" />
          </div>

          <div className="experience-text">
            <h2 className="experience-title">Jr. UI Developer</h2>
            <p className="experience-company">
              Rabbit and Tortoise Technology Solutions
            </p>
            <p className="experience-location">
              Kharadi, Pune{" "}
              <span className="experience-dates">(January 2023 - Present)</span>
            </p>
          </div>

        </div>

        {/* Key Responsibilities */}
        <motion.div
          className="experience-details"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <h3 className="experience-subheading">Key Responsibilities:</h3>
          <ul className="experience-list">
            <motion.li whileHover={{ scale: 1.02 }}>
              Designed and developed enterprise-level applications using HTML, CSS, JavaScript, jQuery, Bootstrap, and React.js.
            </motion.li>
            <motion.li whileHover={{ scale: 1.02 }}>
              Utilized Bootstrap to create responsive web applications.
            </motion.li>
            <motion.li whileHover={{ scale: 1.02 }}>
              Resolved sonar bugs and duplications to ensure smooth application performance.
            </motion.li>
            <motion.li whileHover={{ scale: 1.02 }}>
              Managed project deployment using Maven and Apache Tomcat.
            </motion.li>
            <motion.li whileHover={{ scale: 1.02 }}>
              Identified and resolved bugs, vulnerabilities, and issues.
            </motion.li>
            <motion.li whileHover={{ scale: 1.02 }}>
              Collaborated with cross-functional teams to deliver high-quality code and solutions.
            </motion.li>
          </ul>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Experience;
