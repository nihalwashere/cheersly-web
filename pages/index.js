import React from "react";
import Head from "next/head";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import AddToSlackButton from "../components/AddToSlackButton";
import styles from "../styles/Home.module.css";

export default function Home() {
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

      <div className={styles["landing-container"]}>
        <div className={styles["landing-hero-container"]}>
          <div className={styles["landing-hero-text-container"]}>
            <span className={styles["landing-hero-main-text"]}>
              Build an awesome remote work culture in Slack!
            </span>
            <span className={styles["landing-hero-sub-text"]}>
              Cheersly is a one stop shop to all your team&apos;s communication
              needs.
            </span>

            <div className={styles["landing-install-button-container"]}>
              <AddToSlackButton type="dark" />
            </div>
          </div>

          <div className={styles["landing-hero-image-container"]}>
            {/* eslint-disable-next-line */}
            <img
              src="/images/Illustration_1.png"
              alt=""
              width="100%"
              height="100%"
            />
          </div>
        </div>

        <div className={styles["landing-feature-container"]}>
          <div className={styles["landing-feature-image"]}>
            {/* eslint-disable-next-line */}
            <img
              src="/images/Illustration_3.png"
              alt=""
              width="100%"
              height="100%"
            />
          </div>

          <div className={styles["landing-feature-text-container"]}>
            <span className={styles["landing-feature-main-text"]}>
              Boost your team&apos;s morale
            </span>
            <span className={styles["landing-feature-sub-text"]}>
              Cheersly allows users to quickly post &quot;cheers&quot; to a team
              member in acknowledgement of performance. Peer team members give
              each other &quot;cheers&quot; for work, teams gain real-time data
              on performance based on appreciation, and everyone begins to
              thrive a little more.
            </span>
          </div>
        </div>

        <div className={styles["landing-feature-container"]}>
          <div className={styles["landing-feature-text-container"]}>
            <span className={styles["landing-feature-main-text"]}>
              Conduct polls
            </span>
            <span className={styles["landing-feature-sub-text"]}>
              Ask questions and receive insights that help you make a decision.
            </span>
          </div>

          <div className={styles["landing-feature-image"]}>
            {/* eslint-disable-next-line */}
            <img
              src="/images/Illustration_6.png"
              alt=""
              width="100%"
              height="100%"
            />
          </div>
        </div>

        <div className={styles["landing-feature-container"]}>
          <div className={styles["landing-feature-image"]}>
            {/* eslint-disable-next-line */}
            <img
              src="/images/Illustration_2.png"
              alt=""
              width="100%"
              height="100%"
            />
          </div>

          <div className={styles["landing-feature-text-container"]}>
            <span className={styles["landing-feature-main-text"]}>
              Share feedback
            </span>
            <span className={styles["landing-feature-sub-text"]}>
              Encourage open and honest feedback, empower your team by valuing
              their input. Anonymity provides employees the freedom to express
              their opinions without having to face those mental blocks, getting
              at the truth of their sentiments.
            </span>
          </div>
        </div>

        <div className={styles["landing-feature-container"]}>
          <div className={styles["landing-feature-text-container"]}>
            <span className={styles["landing-feature-main-text"]}>
              Company values
            </span>
            <span className={styles["landing-feature-sub-text"]}>
              Support your company&apos;s vision and shape its culture by
              defining company values.
            </span>
          </div>

          <div className={styles["landing-feature-image"]}>
            {/* eslint-disable-next-line */}
            <img
              src="/images/Illustration_4.png"
              alt=""
              width="100%"
              height="100%"
            />
          </div>
        </div>

        <div className={styles["landing-feature-container"]}>
          <div className={styles["landing-feature-image"]}>
            {/* eslint-disable-next-line */}
            <img
              src="/images/Illustration_5.png"
              alt=""
              width="100%"
              height="100%"
            />
          </div>

          <div className={styles["landing-feature-text-container"]}>
            <span className={styles["landing-feature-main-text"]}>
              Rewards 💰
            </span>
            <span className={styles["landing-feature-sub-text"]}>
              Create real-life perks and reward your team.
            </span>
          </div>
        </div>

        <div className={styles["landing-install-container"]}>
          <div className={styles["landing-install-header-text"]}>
            Build an awesome remote work culture!
          </div>

          <div className={styles["landing-install-button-container"]}>
            <AddToSlackButton type="dark" />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
