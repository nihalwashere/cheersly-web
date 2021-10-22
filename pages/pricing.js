import React, { useState } from "react";
import Head from "next/head";
import Slider from "@mui/material/Slider";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import StartFreeTrialButton from "../components/StartFreeTrialButton";
import { WEB_BASE_URL } from "../utils/config";
import { META_TITLE, META_DESCRIPTION } from "../utils/constants";
import styles from "../styles/Pricing.module.css";

const marks = [
  {
    value: 50,
    label: "50",
  },
  {
    value: 250,
    label: "250",
  },
  {
    value: 500,
    label: "500",
  },
  {
    value: 750,
    label: "750",
  },
  {
    value: 1000,
    label: "1000",
  },
  {
    value: 1250,
    label: "1250",
  },
  {
    value: 1500,
    label: "1500",
  },
  {
    value: 1750,
    label: "1750",
  },
  {
    value: 2000,
    label: "2000",
  },
  {
    value: 2250,
    label: "2000+",
  },
];

export default function Pricing() {
  const [price, setPrice] = useState(19);

  const [teamSize, setTeamSize] = useState(50);

  const [shouldShowContactUs, setShouldShowContactUs] = useState(false);

  const handleTeamSizeChange = (event) => {
    setTeamSize(event.target.value);

    setShouldShowContactUs(false);

    if (event.target.value === 50) {
      setPrice(19);
    } else if (event.target.value === 250) {
      setPrice(49);
    } else if (event.target.value === 500) {
      setPrice(99);
    } else if (event.target.value === 750) {
      setPrice(149);
    } else if (event.target.value === 1000) {
      setPrice(199);
    } else if (event.target.value === 1250) {
      setPrice(249);
    } else if (event.target.value === 1500) {
      setPrice(299);
    } else if (event.target.value === 1750) {
      setPrice(349);
    } else if (event.target.value === 2000) {
      setPrice(399);
    } else {
      setShouldShowContactUs(true);
    }
  };

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

        <div className={styles["pricing-slider-box-root-container"]}>
          <div className={styles["pricing-slider-box-container"]}>
            <div className={styles["pricing-slider-box-result-container"]}>
              <div
                className={styles["pricing-slider-box-result-left-container"]}
              >
                <span className={styles["pricing-slider-box-result-header"]}>
                  Users
                </span>
                <span className={styles["pricing-slider-box-result"]}>
                  {shouldShowContactUs ? "2000+" : `Upto ${teamSize}`}
                </span>
              </div>

              <div
                className={styles["pricing-slider-box-result-right-container"]}
              >
                <span className={styles["pricing-slider-box-result-header"]}>
                  Pricing
                </span>
                <span className={styles["pricing-slider-box-result"]}>
                  {shouldShowContactUs ? "Contact us" : `$${price} / mo`}
                </span>
              </div>
            </div>

            <div className={styles["pricing-slider-container"]}>
              <Slider
                size="small"
                aria-label="Pricing"
                defaultValue={50}
                valueLabelDisplay="off"
                step={null}
                marks={marks}
                min={50}
                max={2250}
                onChange={handleTeamSizeChange}
                value={teamSize}
                style={{ color: "#ff8c00ff" }}
              />
            </div>

            <div className={styles["pricing-slider-box-footer-container"]}>
              <span className={styles["pricing-slider-box-footer-header"]}>
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
