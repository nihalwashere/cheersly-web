import React, { useEffect } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { parseQueryString } from "../utils/common";
import { slackInstall } from "../utils/api";
import styles from "../styles/AppInstalled.module.css";

export default function AppInstalled() {
  useEffect(() => {
    const query = window.location.search.substring(1);
    const params = parseQueryString(query);

    if (params && params.code) {
      setTimeout(async () => await slackInstall(params.code), 0);
    }
  }, []);

  return (
    <div style={{ minHeight: "100vh", height: "100%" }}>
      <NavBar />

      <div className={styles["app-installed-text"]}>WELCOME TO THE CLUB!</div>

      <div className={styles["app-installed-text"]}>
        Cheersly was installed to your workspace successfully
      </div>

      <div className={styles["app-installed-text"]}>
        We have shared the onboarding instructions
      </div>

      <Footer />
    </div>
  );
}
