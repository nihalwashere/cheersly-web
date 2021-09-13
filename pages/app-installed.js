import React, { useEffect } from "react";
import Head from "next/head";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { parseQueryString } from "../utils/common";
import { slackInstall } from "../utils/api";
import { META_TITLE, META_DESCRIPTION } from "../utils/constants";
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
    <div>
      <Head>
        <title>{META_TITLE}</title>
        <meta name="description" content={META_DESCRIPTION} />
        <link rel="icon" href="/images/Logo.png" />
        <meta property="og:title" content={META_TITLE} />
        <meta property="og:image" content="/images/og_image.svg" />
        <meta property="og:description" content={META_DESCRIPTION} />
      </Head>

      <NavBar />

      <div className={styles["app-installed-container"]}>
        <p className={styles["app-installed-text"]}>WELCOME TO THE CLUB!</p>

        <p className={styles["app-installed-text"]}>
          Cheersly was installed to your workspace successfully.
        </p>

        <p className={styles["app-installed-text"]}>
          We have shared the onboarding instructions.
        </p>
      </div>
      <Footer />
    </div>
  );
}
