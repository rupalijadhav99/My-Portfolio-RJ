import React from "react";
import "./Skills.css";
import { motion } from "framer-motion";

const skills = [
  { name: "HTML", image: "src/assets/html5.svg" },
  { name: "CSS", image: "src/assets/css.svg" },
  { name: "JavaScript", image: "src/assets/javascript.svg" },
  { name: "React.js", image: "src/assets/react.svg" },
  { name: "jQuery", image: "src/assets/jquery.svg" },
  { name: "Redux", image: "src/assets/redux.svg" },
  { name: "Bootstrap", image: "src/assets/bootstrap.svg" },
  { name: "RESTful APIs", image: "src/assets/api.svg" },
  { name: "Git & GitHub", image: "src/assets/git.svg" },
  { name: "Canvas", image: "src/assets/canvas.svg" },
  { name: "Ajax", image: "src/assets/ajax.svg" },
  { name: "AG Grid Table", image: "src/assets/ag_grid_table.svg" },
  { name: "Kendo", image: "src/assets/kendo.svg" },
];

const Skills = () => {
  return (
    <div className="skills-container">
      <h1 className="skills-heading">Skills</h1>

      <div className="skills-card">
        <motion.p
          className="skills-intro"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          These are the technologies and tools I'm experienced with:
        </motion.p>

        <motion.div
          className="skills-grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          {skills.map((skill, index) => (
            <motion.div
              className="skill-item"
              key={index}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <img src={skill.image} alt={skill.name} className="skill-icon" />
              <p className="skill-name">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
