import React from "react";
import Head from "next/head";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { WEB_BASE_URL } from "../utils/config";
import {
  META_TITLE,
  META_DESCRIPTION,
  CHEERSLY_SUPPORT_EMAIL,
} from "../utils/constants";
import styles from "../styles/Contact.module.css";

export default function Contact() {
  return (
    <div>
      <Head>
        <title>{META_TITLE}</title>
        <meta name="description" content={META_DESCRIPTION} />
        <link rel="icon" href="/images/Logo.png" />
        <meta property="og:title" content={META_TITLE} />
        <meta property="og:image" content="/images/og_image.svg" />
        <meta property="og:description" content={META_DESCRIPTION} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${WEB_BASE_URL}/contact`} />
      </Head>

      <NavBar />

      <div className={styles["contact-us-container"]}>
        <p className={styles["contact-us-text"]}>Contact Us</p>

        <p className={styles["contact-us-text"]}>
          Please feel free to reach out to us at {CHEERSLY_SUPPORT_EMAIL}
        </p>
      </div>

      <Footer />
    </div>
  );
}
