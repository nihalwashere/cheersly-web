import React from "react";
import Link from "next/link";
import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <div className={styles["footer-container"]}>
      <div className={styles["footer-items-container"]}>
        <div className={styles["footer-text"]}>
          <Link href="/privacy">Privacy Policy</Link>
        </div>
        <div className={styles["footer-text"]}>
          <Link href="/tos">Terms of Service</Link>
        </div>
        <div className={styles["footer-text"]}>
          <Link href="/contact">Contact Us</Link>
        </div>
      </div>
    </div>
  );
}
