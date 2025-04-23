import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <h1>Contact Me</h1>
      <div className="section">
        <div className="sectionDiv">
          <p>
            Email:{" "}
            <a href="mailto:jadhavrupali106@gmail.com">
              jadhavrupali106@gmail.com
            </a>
          </p>
          <p>
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/rupali-jadhav-uidev12"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.linkedin.com/in/rupali-jadhav-uidev12
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Contact;

