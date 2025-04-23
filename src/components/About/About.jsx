import React from "react";
import { motion } from "framer-motion";
import "./About.css";

const About = () => {
  return (
    <>
      <h1>About Me</h1>
      <div className="section">
        <motion.div
          className="sectionDiv"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }} // Moves to original position
          transition={{ duration: 1 }} // Smooth transition
        >
          <p>
            I am a <b>Junior UI Developer</b> with a passion for crafting seamless
            and engaging web experiences. With expertise in <b>HTML, CSS,
            JavaScript, jQuery, Bootstrap, and ReactJS</b>, I specialize in
            building responsive and interactive user interfaces.
          </p>
          <span>
            My journey into the world of technology began with a strong passion
            for problem-solving, which led me to pursue the Computer Systems
            Technology program. Despite its challenges, I remained determined
            and forged lasting friendships that supported me throughout this
            demanding program. I thrive on solving complex UI challenges and
            continuously learning new technologies to enhance my development
            skills. My goal is to create intuitive, high-performance web
            applications that provide the best user experience.
          </span>
        </motion.div>
      </div>
    </>
  );
};

export default About;
