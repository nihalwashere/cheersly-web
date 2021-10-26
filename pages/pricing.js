import React, { useState } from "react";
import Head from "next/head";
import Slider from "@mui/material/Slider";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import StartFreeTrialButton from "../components/StartFreeTrialButton";
import { WEB_BASE_URL } from "../utils/config";
import { META_TITLE, META_DESCRIPTION } from "../utils/constants";
import styles from "../styles/Pricing.module.css";

export default function Pricing() {
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
        <meta property="og:url" content={`${WEB_BASE_URL}`} />
      </Head>

      <NavBar />

      <div className={styles["pricing-container"]}>
        <div className={styles["pricing-header-container"]}>
          <h1 className={styles["pricing-header-text"]}>
            Simple, transparent pricing for teams of all sizes!
          </h1>

          <span className={styles["pricing-header-sub-text"]}>
            Get all features for a single, predictable price.
          </span>
        </div>

        <div className={styles["pricing-box-root-container"]}>
          <div>
            <p className={styles["pricing-header-text"]}>
              $3 per person per month
            </p>

            <div className={styles["pricing-box-footer-container"]}>
              <span className={styles["pricing-box-footer-header"]}>
                Free 14-day trial · No credit card required
              </span>

              <StartFreeTrialButton />
            </div>
          </div>
        </div>

        <div className={styles["pricing-faq-root-container"]}>
          <div className={styles["pricing-faq-container"]}>
            <div className={styles["pricing-faq-header-container"]}>
              <span className={styles["pricing-faq-header-text"]}>
                Pricing Questions
              </span>
            </div>

            <div className={styles["pricing-faq-question-answer-container"]}>
              <div className={styles["pricing-faq-question-answer"]}>
                <span className={styles["pricing-faq-question"]}>
                  What happens when the trial is over? Will I be charged?
                </span>
                <span className={styles["pricing-faq-answer"]}>
                  After your trial ends you won&apos;t be charged because we
                  don&apos;t require a credit card to try Cheersly. You&apos;ll
                  receive a few messages during your trial prompting you to
                  upgrade. If you don&apos;t upgrade and your trial expires,
                  people will receive a response from Cheersly letting them know
                  the trial is over.
                </span>
              </div>

              <div className={styles["pricing-faq-question-answer"]}>
                <span className={styles["pricing-faq-question"]}>
                  How do you calculate the number of people on my team I have to
                  pay for? Do I have to pay for everyone on my Slack team?
                </span>
                <span className={styles["pricing-faq-answer"]}>
                  Whenever someone gives or receives their first cheers,
                  participates in a poll or shares feedback we add them to your
                  account. So you don&apos;t pay for anyone on your team who
                  hasn&apos;t used Cheersly.
                </span>
              </div>

              <div className={styles["pricing-faq-question-answer"]}>
                <span className={styles["pricing-faq-question"]}>
                  Is the app free for educational institutions or not-for-profit
                  organizations?
                </span>
                <span className={styles["pricing-faq-answer"]}>
                  YAAS! The app is free for educational purposes and
                  not-for-profit organizations. If you are using it in a school,
                  university or a not-for-profit organization contact us to get
                  free access.
                </span>
              </div>

              <div className={styles["pricing-faq-question-answer"]}>
                <span className={styles["pricing-faq-question"]}>
                  Do you have a refund policy?
                </span>
                <span className={styles["pricing-faq-answer"]}>
                  Yes, we have a 15 day money back guarantee if you are not
                  satisfied with our services. Just contact us.
                </span>
              </div>

              <div className={styles["pricing-faq-question-answer"]}>
                <span className={styles["pricing-faq-question"]}>
                  How do I cancel my subscription?
                </span>
                <span className={styles["pricing-faq-answer"]}>
                  Remove Cheersly from your Slack workspace to automatically
                  cancel the subscription, no questions asked.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
