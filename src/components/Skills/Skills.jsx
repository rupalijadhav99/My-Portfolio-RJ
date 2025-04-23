import React from "react";
import "./Skills.css";
import { motion } from "framer-motion";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "jQuery",
  "React.js",
  "Bootstrap",
  "Redux",
  "RESTful APIs",
  "Git & GitHub",
  "Canvas",
  "Ajax",
  "AG grid Table",
];

const Skills = () => {
  return (
    <>
      <h1>Skills</h1>
      <div className="section">
        <div className="sectionDiv">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            Here are some of the technologies and tools I work with:
          </motion.p>

          <motion.ul
            className="skills-list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            {skills.map((skill, index) => (
              <motion.li
                key={index}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                {skill}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </>
  );
};

export default Skills;
