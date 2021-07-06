import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import AddToSlackButton from "../components/AddToSlackButton";
import styles from "../styles/Install.module.css";

export default function Install() {
  return (
    <div>
      <NavBar />

      <div className={styles["install-container"]}>
        <AddToSlackButton type="light" />
      </div>

      <Footer />
    </div>
  );
}
