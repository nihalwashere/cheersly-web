import React from "react";
import "./styles.css";

const Footer = () => {
  const handleMadeInIndiaClick = () => {
    window.location.href = "/";
  };

  const handlePrivacyPolicy = () => {
    window.location.href = "/privacy";
  };

  const handleTermsOfService = () => {
    window.location.href = "/tos";
  };

  return (
    <div>
      <div className="footer-container">
        <div className="footer-items-container">
          <div className="footer-text" onClick={handleMadeInIndiaClick}>
            Made in India
          </div>
          <div className="footer-text" onClick={handlePrivacyPolicy}>
            Privacy Policy
          </div>
          <div className="footer-text" onClick={handleTermsOfService}>
            Terms of Service
          </div>
          <div className="footer-text">
            <a
              href="mailto:support@cheeersly.club?subject=Query"
              style={{ color: "inherit" }}
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
