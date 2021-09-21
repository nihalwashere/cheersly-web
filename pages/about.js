import React from "react";
import Head from "next/head";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { WEB_BASE_URL } from "../utils/config";
import { META_TITLE, META_DESCRIPTION } from "../utils/constants";
import styles from "../styles/About.module.css";

export default function About() {
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
        <meta property="og:url" content={`${WEB_BASE_URL}/about`} />
      </Head>

      <NavBar />

      <div className={styles["about-root-container"]}>
        <div className={styles["about-container"]}>
          <h1 className={styles["about-header"]}>About</h1>

          <h2 className={styles["about-sub-header"]}>
            Do you feel like you are working in isolation?
            <br />
            <br />
            Do you feel that you are unappreciated?
          </h2>

          <p className={styles["about-note"]}>
            We wanted to make appreciation a little fun. While the pandemic has
            been a little demanding and all of us pushed to remote work. We
            believe for most of the teams this is going to continue where remote
            work will be everything. Having said that, it often becomes a little
            boring while working from home (alone). We thought of building a
            Slack app that helps to share in some cheers with your peers and
            spread joy!
          </p>

          <p className={styles["about-note"]}>
            You should share in some cheers with your peers because it makes the
            recipient feel good about themselves and this can help to boost
            their performance. Cheersly provides the kind of positive experience
            or uplift that can increase people’s morale, motivation, engagement
            and renew their commitment to their organization.
          </p>

          <p className={styles["about-note"]}>
            By implementing gratitude into company culture, employees are more
            willing to spread their positive feelings with others, whether it’s
            helping out with a project or taking time to notice and recognizing
            those that have gone the extra mile.
          </p>

          <p className={styles["about-note"]}>
            Showing gratitude can increase a person’s wellness, increase better
            sleep habits, increase metabolism and lessen stress. This directly
            impacts work results and employee interaction. With employee
            appreciation, you’re not only boosting performance and engagement,
            but the employee’s well-being and health.
          </p>

          <p className={styles["about-note"]}>
            The greatest psychological effect of appreciation and gratitude is
            the happiness and other emotions immediately felt whether we’re
            giving or benefiting from. Gratitude creates good feelings, cheerful
            memories, better self-esteem, feeling more relaxed and more
            optimistic. All of these emotions creates a pay it forward and
            “we’re in this together” mentality in the workplace, which in turn,
            makes your organization more successful. Plus, the dopamine effect
            will encourage a continuous cycle of recognition if everyone
            participates. All of these emotions, plus many more, are what most
            employers want out of their staff to again, create unity.
          </p>

          <p className={styles["about-note"]}>
            According to a case study, most millennials quit because they feel
            no one said thank you, they feel unappreciated.
          </p>

          <p className={styles["about-note"]}>
            Let&apos;s make it a little easier for great millennial staff to
            stick around.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
