import React, { useState } from "react";
import "./Navbar.css";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = ({ currentSection, onSectionChange }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navbar-container">
      <nav className="navbar">
        <div className="menu-icon" onClick={toggleMenu}>
          {menuOpen ? <FiX size={30} /> : <FiMenu size={30} />}
        </div>

        <ul className={menuOpen ? "nav-links active" : "nav-links"}>
          <li>
            <button className={currentSection === "home" ? "active" : ""} onClick={() => onSectionChange("home")}>
              Home
            </button>
          </li>
          <li>
            <button className={currentSection === "about" ? "active" : ""} onClick={() => onSectionChange("about")}>
              About
            </button>
          </li>
          <li>
            <button className={currentSection === "skills" ? "active" : ""} onClick={() => onSectionChange("skills")}>
              Skills
            </button>
          </li>
          <li>
            <button className={currentSection === "experience" ? "active" : ""} onClick={() => onSectionChange("experience")}>
              Experience
            </button>
          </li>
          <li>
            <button className={currentSection === "projects" ? "active" : ""} onClick={() => onSectionChange("projects")}>
              Projects
            </button>
          </li>
          <li>
            <button className={currentSection === "contact" ? "active" : ""} onClick={() => onSectionChange("contact")}>
              Contact
            </button>
          </li>
          <li>
            <button className={`${currentSection === "resume" ? "active" : ""} resumeButton`}>
              <a className="btn PrimaryBtn" href="https://aqua-odille-52.tiiny.site/" target="_blank" rel="noopener noreferrer">
                Resume
              </a>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
