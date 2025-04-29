import React from 'react';
import './Home.css';
import profileImage from "../../assets/rupaliJ.jpg";
import { FaLinkedin, FaBriefcase } from "react-icons/fa";

export default function Home() {
  return (
    <div className="home-container">
      <div className="home-left">
        <h2 className="role">UI DEVELOPER</h2>
        <h1 className="intro-title">
          Hello, my name<br />is Rupali Jadhav
        </h1>
        <p className="intro-desc">
          Highly motivated and detail-oriented UI Developer with 2+ years of
          experience in web development and ReactJS. Proven track record of
          delivering high-quality solutions, with expertise in designing and
          developing responsive, scalable, and maintainable applications.
        </p>
        <div className="buttons">
          <button className="btn-primary">
            <a
              href="https://www.naukri.com/mnjuser/profile"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-link"
            >
              <FaBriefcase className="btn-icon" />
              Naukri
            </a>
          </button>
          <button className="btn-secondary">
            <a
              href="https://www.linkedin.com/in/rupali-jadhav-uidev12"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-link"
            >
              <FaLinkedin className="btn-icon" />
              LinkedIn
            </a>
          </button>
        </div>
      </div>

      <div className="home-right">
        <div className="yellow-bg"></div>
        <img src={profileImage} alt="Rupali Jadhav" className="profile-img" />
      </div>
    </div>
  );
}
