import React from "react";
import "./Skills.css";
import { motion } from "framer-motion";
import HTML from "../../assets/html5.svg";
import CSS from "../../assets/css.svg";
import javascript from "../../assets/javascript.svg";
import reactJS from "../../assets/react.svg";
import jQuery from "../../assets/jquery.svg";
import redux from "../../assets/redux.svg";
import bootstrap from "../../assets/bootstrap.svg";
import api from "../../assets/api.svg";
import git from "../../assets/git.svg";
import canvas from "../../assets/canvas.svg";
import ajax from "../../assets/ajax.svg";
import agGridTable from "../../assets/ag_grid_table.svg";
import kendo from "../../assets/kendo.svg";

const skills = [
  { name: "HTML", image: HTML },
  { name: "CSS", image: CSS },
  { name: "JavaScript", image: javascript },
  { name: "React.js", image: reactJS },
  { name: "jQuery", image: jQuery },
  { name: "Redux", image: redux },
  { name: "Bootstrap", image: bootstrap },
  { name: "RESTful APIs", image: api },
  { name: "Git & GitHub", image: git },
  { name: "Canvas", image: canvas },
  { name: "Ajax", image: ajax },
  { name: "AG Grid Table", image: agGridTable },
  { name: "Kendo", image: kendo },
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
