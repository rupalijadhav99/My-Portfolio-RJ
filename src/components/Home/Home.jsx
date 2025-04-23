import React from "react";
import "./Home.css";
import { motion } from "framer-motion";

const Home = () => {
  const handleSectionChange = (section) => {
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="section">
        <motion.div
          className="sectionDiv"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <h1 style={{color: "rgb(49, 49, 50)"}}>Rupali Jadhav</h1>
          <h2>UI Developer</h2>
          <span>Kharadi, Pune 411014</span>

          <p>
            Highly motivated and detail-oriented UI Developer with 2+ years of
            experience in web development and ReactJS. Proven track record of
            delivering high-quality solutions, with expertise in designing and
            developing responsive, scalable, and maintainable applications.
          </p>

          <div className="buttons-container">
            <motion.button
              className="view-work-btn"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => handleSectionChange("experience")}
            >
              View My Work
            </motion.button>

            <div onClick={() => handleSectionChange("about")} className="scrollDownDiv">
              <span className="scroll-text">Scroll down</span>
              <div className="mouse-icon">
                <div className="scroll-wheel"></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Home;
