import React from "react";
import Head from "next/head";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import AddToSlackButton from "../components/AddToSlackButton";
import { META_TITLE, META_DESCRIPTION } from "../utils/constants";
import styles from "../styles/Home.module.css";

export default function Home() {
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

      <div className={styles["landing-container"]}>
        <div className={styles["landing-hero-container"]}>
          <div className={styles["landing-hero-text-container"]}>
            <header>
              <h1 className={styles["landing-hero-main-text"]}>
                Build an awesome remote work culture in Slack!
              </h1>

              <span className={styles["landing-hero-sub-text"]}>
                Cheersly is a one stop shop to all your team&apos;s
                communication needs.
              </span>
            </header>

            <div className={styles["landing-install-button-container"]}>
              <AddToSlackButton type="dark" />
            </div>
          </div>

          <figure className={styles["landing-hero-image-container"]}>
            {/* eslint-disable-next-line */}
            <img
              src="/images/Illustration_1.png"
              alt=""
              width="100%"
              height="100%"
            />
          </figure>
        </div>

        <div id="product" className={styles["landing-feature-container"]}>
          <figure className={styles["landing-feature-image"]}>
            {/* eslint-disable-next-line */}
            <img
              src="/images/Illustration_3.png"
              alt=""
              width="100%"
              height="100%"
            />
          </figure>

          <section className={styles["landing-feature-text-container"]}>
            <h1 className={styles["landing-feature-main-text"]}>
              Boost your team&apos;s morale
            </h1>
            <p className={styles["landing-feature-sub-text"]}>
              Cheersly allows users to quickly post &quot;cheers&quot; to a team
              member in acknowledgement of performance. Peer team members give
              each other &quot;cheers&quot; for work, teams gain real-time data
              on performance based on appreciation, and everyone begins to
              thrive a little more.
            </p>
          </section>
        </div>

        <div className={styles["landing-feature-container"]}>
          <section className={styles["landing-feature-text-container"]}>
            <h1 className={styles["landing-feature-main-text"]}>
              Conduct polls
            </h1>
            <p className={styles["landing-feature-sub-text"]}>
              Ask questions and receive insights that help you make a decision.
            </p>
          </section>

          <figure className={styles["landing-feature-image"]}>
            {/* eslint-disable-next-line */}
            <img
              src="/images/Illustration_6.png"
              alt=""
              width="100%"
              height="100%"
            />
          </figure>
        </div>

        <div className={styles["landing-feature-container"]}>
          <figure className={styles["landing-feature-image"]}>
            {/* eslint-disable-next-line */}
            <img
              src="/images/Illustration_2.png"
              alt=""
              width="100%"
              height="100%"
            />
          </figure>

          <section className={styles["landing-feature-text-container"]}>
            <h1 className={styles["landing-feature-main-text"]}>
              Share feedback
            </h1>
            <p className={styles["landing-feature-sub-text"]}>
              Encourage open and honest feedback, empower your team by valuing
              their input. Anonymity provides employees the freedom to express
              their opinions without having to face those mental blocks, getting
              at the truth of their sentiments.
            </p>
          </section>
        </div>

        <div className={styles["landing-feature-container"]}>
          <section className={styles["landing-feature-text-container"]}>
            <h1 className={styles["landing-feature-main-text"]}>
              Company values
            </h1>
            <p className={styles["landing-feature-sub-text"]}>
              Support your company&apos;s vision and shape its culture by
              defining company values.
            </p>
          </section>

          <figure className={styles["landing-feature-image"]}>
            {/* eslint-disable-next-line */}
            <img
              src="/images/Illustration_4.png"
              alt=""
              width="100%"
              height="100%"
            />
          </figure>
        </div>

        <div className={styles["landing-feature-container"]}>
          <figure className={styles["landing-feature-image"]}>
            {/* eslint-disable-next-line */}
            <img
              src="/images/Illustration_5.png"
              alt=""
              width="100%"
              height="100%"
            />
          </figure>

          <section className={styles["landing-feature-text-container"]}>
            <h1 className={styles["landing-feature-main-text"]}>Rewards 💰</h1>
            <p className={styles["landing-feature-sub-text"]}>
              Create real-life perks and reward your team.
            </p>
          </section>
        </div>

        <div id="use-cases" className={styles["landing-why-use-container"]}>
          <section className={styles["landing-why-use-text-container"]}>
            <h1 className={styles["landing-why-use-text"]}>
              Why use Cheersly?
            </h1>
          </section>

          <div className={styles["landing-why-use-row"]}>
            <section className={styles["landing-why-use"]}>
              <h3 className={styles["landing-why-use-header"]}>
                Reward your team
              </h3>
              <p className={styles["landing-why-use-description"]}>
                Deliver a fun, candid and social Recognition & Rewards
                experience for your employees. Create a robust recognition
                program. Delight employees with rewards & choice of redemption.
              </p>
            </section>

            <section className={styles["landing-why-use"]}>
              <h3 className={styles["landing-why-use-header"]}>
                Build a healthier work environment
              </h3>
              <p className={styles["landing-why-use-description"]}>
                Cheersly provides the kind of positive experience or uplift that
                can increase people&apos;s morale, motivation, engagement and
                renew their commitment to their organization.
              </p>
            </section>
          </div>

          <div className={styles["landing-why-use-row"]}>
            <section className={styles["landing-why-use"]}>
              <h3 className={styles["landing-why-use-header"]}>
                Inculcate sweet competition
              </h3>
              <p className={styles["landing-why-use-description"]}>
                In a culture that lacks competitiveness, employees aren&apos;t
                as encouraged to think outside the box.
              </p>
            </section>

            <section className={styles["landing-why-use"]}>
              <h3 className={styles["landing-why-use-header"]}>
                Build an awesome work culture
              </h3>
              <p className={styles["landing-why-use-description"]}>
                Recognize when employees align with your company values to
                reinforce good behavior.
              </p>
            </section>
          </div>

          <div className={styles["landing-why-use-row"]}>
            <section className={styles["landing-why-use"]}>
              <h3 className={styles["landing-why-use-header"]}>
                Encourage open and honest feedback
              </h3>
              <p className={styles["landing-why-use-description"]}>
                Cheersly provides opportunities to share anonymous feedback.
              </p>
            </section>

            <section className={styles["landing-why-use"]}>
              <h3 className={styles["landing-why-use-header"]}>
                Improve your team’s communication
              </h3>
              <p className={styles["landing-why-use-description"]}>
                Team building activities help to bridge gaps and build
                relationships.
              </p>
            </section>
          </div>
        </div>

        <div className={styles["landing-install-container"]}>
          <h1 className={styles["landing-install-header-text"]}>
            Build an awesome remote work culture!
          </h1>

          <div className={styles["landing-install-button-container"]}>
            <AddToSlackButton type="dark" />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
