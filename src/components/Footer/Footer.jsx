import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="social-links">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/rupali-jadhav-uidev12" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a href="https://www.naukri.com/mnjuser/profile" target="_blank" rel="noopener noreferrer">
          Naukri        </a>

          <a href="mailto:jadhavrupali106@gmail.com" target="_blank" rel="noopener noreferrer">
             Email
           </a>
      </div>
      <p>&copy; {new Date().getFullYear()} Rupali Jadhav. All rights reserved.</p>
    </footer>
  );
};

export default Footer;