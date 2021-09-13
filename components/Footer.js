import React from "react";
import { CHEERSLY_SUPPORT_EMAIL } from "../utils/constants";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles["footer-container"]}>
      <div className={styles["footer-columns"]}>
        <div className={styles["footer-column"]}>
          <span className={styles["footer-column-content"]}>
            Built with hope and lot&apos;s of ❤️
          </span>
        </div>

        <div className={styles["footer-column"]}>
          <span className={styles["footer-column-header"]}>COMPANY</span>
          <span className={styles["footer-column-content"]}>
            <ul>
              <li>
                {/* eslint-disable-next-line */}
                <a href="/privacy" className="no-default-link">
                  Privacy Policy
                </a>
              </li>
              <li>
                {/* eslint-disable-next-line */}
                <a href="/tos" className="no-default-link">
                  Terms of Service
                </a>
              </li>

              {/* <li> */}
              {/* eslint-disable-next-line */}
              {/* <Link
                  color="inherit"
                  component="button"
                  onClick={() => {
                    window.location.href = "/blog";
                  }}
                >
                  Blog
                </Link>
              </li> */}
            </ul>
          </span>
        </div>

        <div className={styles["footer-column"]}>
          <span className={styles["footer-column-header"]}>CONTACT US</span>
          <span className={styles["footer-column-content"]}>
            <a
              href={`mailto:${CHEERSLY_SUPPORT_EMAIL}?subject=Hello`}
              className="no-default-link"
            >
              {CHEERSLY_SUPPORT_EMAIL}
            </a>
          </span>
        </div>
      </div>

      <div className={styles["footer-copyright-container"]}>
        <span className={styles["footer-company-copyright"]}>
          Cheersly
          {/* - {new Date().getFullYear()} */}
        </span>
      </div>
    </div>
  );
};

export default Footer;
