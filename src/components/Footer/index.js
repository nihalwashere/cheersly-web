import React from "react";
import "./styles.css";

const Footer = () => {
  const handlePrivacyPolicy = () => {
    window.location.href = "/privacy";
  };

  const handleTermsOfService = () => {
    window.location.href = "/tos";
  };

  const handleContactUs = () => {
    window.location.href = "/contact";
  };

  return (
    <div>
      <div className="footer-container">
        <div className="footer-items-container">
          <div className="footer-text" onClick={handlePrivacyPolicy}>
            Privacy Policy
          </div>
          <div className="footer-text" onClick={handleTermsOfService}>
            Terms of Service
          </div>
          <div className="footer-text" onClick={handleContactUs}>
            Contact Us
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
