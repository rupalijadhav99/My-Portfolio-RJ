import React from "react";
import "./Experience.css";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <>
      <h1>Experience</h1>
      <div className="section">
        <div className="sectionDiv">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            Jr. UI Developer at Rabbit and Tortoise Technology Solutions
            <br />
            <strong>Kharadi, Pune (January 2023 - Present)</strong>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Responsibilities:
          </motion.p>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            <motion.li whileHover={{ scale: 1.1 }}>
              Designed and developed enterprise-level applications using HTML,
              CSS, JavaScript, jQuery, Bootstrap, and React.js.
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }}>
              Utilized Bootstrap to create responsive web applications.
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }}>
              Resolved sonar bugs and duplications to ensure smooth application
              performance.
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }}>
              Managed project deployment using Maven Apache Tomcat.
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }}>
              Identified and resolved bugs, vulnerabilities, and issues.
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }}>
              Collaborated with teams to deliver high-quality code and
              solutions.
            </motion.li>
          </motion.ul>
        </div>
      </div>
    </>
  );
};

export default Experience;
