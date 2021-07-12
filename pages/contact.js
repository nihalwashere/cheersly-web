import React from "react";
import Head from "next/head";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <div>
      <Head>
        <title>Cheersly · Build an awesome remote work culture in Slack!</title>
        <meta
          name="description"
          content="Cheersly is a one stop shop to all your team's communication needs."
        />
        <link rel="icon" href="/images/Logo.png" />
      </Head>

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
