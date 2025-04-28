import React from "react";
import { motion } from "framer-motion";
import "./About.css";
import profileImage2 from "../../assets/rupaliJadhav.jpg";

const About = () => {

  return (
    <section id="about" className="about-container">
      <motion.h1
        className="about-heading"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About Me
      </motion.h1>

      <motion.div
        className="about-content-wrapper"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="about-left">
          <div className="yellow-bg-about"></div>
          <img
            src={profileImage2} 
            alt="Rupali Jadhav"
            className="profile-img-about"
          />
        </div>

        <div className="about-right about-content">
          <p>
            I am a <b>Junior UI Developer</b> with a passion for crafting seamless
            and engaging web experiences. With expertise in <b>HTML, CSS,
            JavaScript, jQuery, Bootstrap, and ReactJS</b>, I specialize in
            building responsive and interactive user interfaces.
          </p>
          <p>
            My journey into the world of technology began with a strong passion
            for problem-solving, which led me to pursue the Computer Systems
            Technology program. Despite its challenges, I remained determined and
            forged lasting friendships that supported me throughout this
            demanding program. I thrive on solving complex UI challenges and
            continuously learning new technologies to enhance my development
            skills. My goal is to create intuitive, high-performance web
            applications that provide the best user experience.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;