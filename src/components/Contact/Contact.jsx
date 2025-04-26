import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <motion.h1
        className="contact-heading"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Contact Me
      </motion.h1>

      <motion.div
        className="contact-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="contact-list-wrapper">
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <a href="mailto:jadhavrupali106@gmail.com">
              jadhavrupali106@gmail.com
            </a>
          </div>
          <div className="contact-item">
            <FaLinkedin className="contact-icon" />
            <a
              href="https://www.linkedin.com/in/rupali-jadhav-uidev12"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.linkedin.com/in/rupali-jadhav-uidev12
            </a>
          </div>
          <div className="contact-item">
            <FaPhoneAlt className="contact-icon" />
            <a href="tel:9112286443">9112286443</a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
