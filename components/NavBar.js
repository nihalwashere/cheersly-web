import React from "react";
import { WEB_BASE_URL } from "../utils/config";
import styles from "../styles/NavBar.module.css";

export default function NavBar() {
  return (
    <nav className={styles["navbar-container"]}>
      <div className={styles["navbar-left-container"]}>
        <header className={styles["navbar-logo-text"]}>
          {/* eslint-disable-next-line */}
          <a href={WEB_BASE_URL} className="no-default-link">
            cheersly
          </a>
        </header>
      </div>

      <div className={styles["navbar-right-container"]}>
        <span className={styles["navbar-text"]}>
          {/* eslint-disable-next-line */}
          <a href={WEB_BASE_URL} className="no-default-link">
            Home
          </a>
        </span>

        <span className={styles["navbar-text"]}>
          {/* eslint-disable-next-line */}
          <a href={`${WEB_BASE_URL}/#product`} className="no-default-link">
            Product
          </a>
        </span>

        <span className={styles["navbar-text"]}>
          <a href={`${WEB_BASE_URL}/#use-cases`} className="no-default-link">
            Use Cases
          </a>
        </span>

        {/* <span className={styles["navbar-text"]}>
          <a href={`${WEB_BASE_URL}/pricing`} className="no-default-link">
            Pricing
          </a>
        </span> */}

        <span className={styles["navbar-text"]}>
          <a href={`${WEB_BASE_URL}/faq`} className="no-default-link">
            FAQ
          </a>
        </span>

        <span className={styles["navbar-text"]}>
          <a href={`${WEB_BASE_URL}/about`} className="no-default-link">
            About
          </a>
        </span>
      </div>
    </nav>
  );
}
