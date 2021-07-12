import React from "react";
import Link from "next/link";
import styles from "../styles/NavBar.module.css";

export default function NavBar() {
  return (
    <div className={styles["navbar-container"]}>
      <div className={styles["navbar-text"]}>
        <Link href="/">Cheersly</Link>
      </div>
    </div>
  );
}
