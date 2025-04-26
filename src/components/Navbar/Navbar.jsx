import React, { useState } from "react";
import "./Navbar.css";
import { FiMenu, FiX } from "react-icons/fi"; // Menu and Close icons

const Navbar = ({ currentSection, onSectionChange }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);

  const handleNavClick = (section) => {
    onSectionChange(section);
    setMenuOpen(false); // Close menu after selection
  };

  return (
    <div className="navbar-container">
      <nav className="navbar">
        {/* Menu icon (hamburger or close icon) */}
        <div className="menu-icon" onClick={toggleMenu}>
          {menuOpen ? <FiX size={30} /> : <FiMenu size={30} />}
        </div>

        {/* Nav Links */}
        <ul className={menuOpen ? "nav-links active" : "nav-links"}>
          <li>
            <button className={currentSection === "home" ? "active" : ""} onClick={() => handleNavClick("home")}>
              Home
            </button>
          </li>
          <li>
            <button className={currentSection === "about" ? "active" : ""} onClick={() => handleNavClick("about")}>
              About
            </button>
          </li>
          <li>
            <button className={currentSection === "skills" ? "active" : ""} onClick={() => handleNavClick("skills")}>
              Skills
            </button>
          </li>
          <li>
            <button className={currentSection === "experience" ? "active" : ""} onClick={() => handleNavClick("experience")}>
              Experience
            </button>
          </li>
          <li>
            <button className={currentSection === "projects" ? "active" : ""} onClick={() => handleNavClick("projects")}>
              Projects
            </button>
          </li>
          <li>
            <button className={currentSection === "contact" ? "active" : ""} onClick={() => handleNavClick("contact")}>
              Contact
            </button>
          </li>
          <li>
            <button className={`resumeButton ${currentSection === "resume" ? "active" : ""}`}>
              <a
                className="btn PrimaryBtn"
                href="https://aqua-odille-52.tiiny.site/"
                target="_blank"
                rel="noopener noreferrer"
              >
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
