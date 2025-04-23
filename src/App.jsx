import React, { useState, useEffect } from "react";
import "./components/styles.css";
import "./App.css";
import { motion } from "framer-motion";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";

function App() {
  const [currentSection, setCurrentSection] = useState("home");
  const [isIntroComplete, setIsIntroComplete] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsIntroComplete(true), 1000); // Transition black screen after 1 sec
  }, []);

  const handleSectionChange = (section) => {
    setCurrentSection(section);
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const sections = [
      "home",
      "about",
      "skills",
      "experience",
      "projects",
      "contact",
    ];

    const handleScroll = () => {
      let scrollPosition = window.scrollY + 200;
      for (let section of sections) {
        let element = document.getElementById(section);
        if (element) {
          let offsetTop = element.offsetTop;
          let offsetHeight = element.offsetHeight;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setCurrentSection(section);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app-container">
      {/* Black screen overlay */}
      <motion.div
        className="black-screen"
        initial={{ y: 0 }}
        animate={{ y: "-100vh", opacity: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 1000,
        }}
      />

      {/* App content immediately visible */}
      <motion.div
        className="content-container"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
      >
        <Navbar
          currentSection={currentSection}
          onSectionChange={handleSectionChange}
        />

        <section id="home" className="page-section">
          <Home />
        </section>
        <section id="about" className="page-section">
          <About />
        </section>
        <section id="skills" className="page-section">
          <Skills />
        </section>
        <section id="experience" className="page-section">
          <Experience />
        </section>
        <section id="projects" className="page-section">
          <Projects />
        </section>
        <section id="contact" className="page-section">
          <Contact />
        </section>

        <Footer />
      </motion.div>
    </div>
  );
}

export default App;
