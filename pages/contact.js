import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <div>
      <NavBar />

      <div className="gutter-root">
        <div className="gutter">
          <div className="page-header">Contact Us</div>

          <div className="answer-text margin-top-20">
            Please feel free to reach out to us at <b>support@cheersly.club</b>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
