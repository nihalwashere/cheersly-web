import React, { useEffect } from "react";
import Head from "next/head";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import {
  META_TITLE,
  META_DESCRIPTION,
  CHEERSLY_SUPPORT_EMAIL,
} from "../utils/constants";
import styles from "../styles/FAQ.module.css";

export default function FAQ() {
  useEffect(() => {
    const questions = document.getElementsByName("faq-question");

    for (let i = 0; i < questions.length; i += 1) {
      const question = questions[i];

      question.addEventListener("click", () => {
        question.classList.toggle("active");
        const answer = question.nextElementSibling;
        if (answer.style.maxHeight) {
          answer.style.maxHeight = null;
        } else {
          answer.style.maxHeight = `${answer.scrollHeight}px`;
        }
      });
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

      <div className={styles["faq-root-container"]}>
        <div className={styles["faq-container"]}>
          <h1 className={styles["faq-header"]}>FAQ</h1>

          <div className={styles["faq-question-answer-container"]}>
            <div name="faq-question" className={styles["faq-question"]}>
              <div className={styles["faq-question-bullet"]}>
                {/* eslint-disable-next-line */}
                <img
                  src="/images/faq_question_bullet.svg"
                  alt=""
                  width="20"
                  height="20"
                />
              </div>
              How to use Cheersly?
            </div>

            <p className={styles["faq-answer"]}>
              Cheersly will never post a message by itself. You can run commands
              or use the shortcut button within Slack to interact with it.
              <br />
              <br />
              &quot;/cheers&quot; - To cheer your peers.
              <br />
              <br />
              &quot;/cheers poll&quot; - Ask a question to your peers and get a
              poll (anonymous/non-anonymous).
              <br />
              <br />
              &quot;/cheers feedback&quot; - Share feedback with your team
              (anonymous/non-anonymous).
              <br />
              <br />
              &quot;/cheers help&quot; - Seek some help.
              <br />
              <br />
              &quot;/cheers onboard&quot; - Get onboarding instructions.
            </p>
          </div>

          <div className={styles["faq-question-answer-container"]}>
            <div name="faq-question" className={styles["faq-question"]}>
              <div className={styles["faq-question-bullet"]}>
                {/* eslint-disable-next-line */}
                <img
                  src="/images/faq_question_bullet.svg"
                  alt=""
                  width="20"
                  height="20"
                />
              </div>
              Why am I not receiving any response in a channel from Cheersly?
            </div>

            <p className={styles["faq-answer"]}>
              This is because you haven&apos;t invited Cheersly to that channel
              in which you are expecting a response. Use the command
              &quot;/invite @Cheersly&quot; in the channel you wish to invite
              Cheersly to.
              <br />
              <br />
              Please make sure that Cheersly is invited to that specific
              channel, before running a command.
            </p>
          </div>

          <div className={styles["faq-question-answer-container"]}>
            <div name="faq-question" className={styles["faq-question"]}>
              <div className={styles["faq-question-bullet"]}>
                {/* eslint-disable-next-line */}
                <img
                  src="/images/faq_question_bullet.svg"
                  alt=""
                  width="20"
                  height="20"
                />
              </div>
              Why am I not seeing the option to add, edit or delete company
              values or rewards in the app dashboard?
            </div>

            <p className={styles["faq-answer"]}>
              In order to be able to add, edit or delete company values or
              rewards from the app dashboard, you need to have admin rights on
              Cheersly. Please check with the admin of your Slack workspace or
              who actually installed the app. In order to give you admin rights,
              an existing admin can navigate to the app dashboard, click on the
              options list button on the top right corner (beside your name),
              select &quot;Admin Settings&quot;.
            </p>
          </div>

          <div className={styles["faq-question-answer-container"]}>
            <div name="faq-question" className={styles["faq-question"]}>
              <div className={styles["faq-question-bullet"]}>
                {/* eslint-disable-next-line */}
                <img
                  src="/images/faq_question_bullet.svg"
                  alt=""
                  width="20"
                  height="20"
                />
              </div>
              How do I remove Cheersly from my Slack workspace?
            </div>

            <p className={styles["faq-answer"]}>
              Check out the{" "}
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://slack.com/intl/en-pl/help/articles/360003125231-Remove-apps-and-custom-integrations-from-your-workspace#remove-a-custom-integration"
              >
                Slack docs
              </a>{" "}
              for detailed info on how to remove an app from your workspace.
            </p>
          </div>

          <div className={styles["faq-question-answer-container"]}>
            <div name="faq-question" className={styles["faq-question"]}>
              <div className={styles["faq-question-bullet"]}>
                {/* eslint-disable-next-line */}
                <img
                  src="/images/faq_question_bullet.svg"
                  alt=""
                  width="20"
                  height="20"
                />
              </div>
              What permissions does Cheersly have in my Slack workspace?
            </div>

            <p className={styles["faq-answer"]}>
              Cheersly only reads and saves content that is explicitly and
              directly sent to the app, nothing else. You&apos;ll notice we
              don&apos;t ask for permission to read your Slack messages or email
              addresses of your users, we don&apos;t need it.
              <br />
              <br />
              The permissions requested for the app have been reviewed and
              approved by Slack and are the absolute minimum permissions
              required for the app to work.
            </p>
          </div>

          <div className={styles["faq-question-answer-container"]}>
            <div name="faq-question" className={styles["faq-question"]}>
              <div className={styles["faq-question-bullet"]}>
                {/* eslint-disable-next-line */}
                <img
                  src="/images/faq_question_bullet.svg"
                  alt=""
                  width="20"
                  height="20"
                />
              </div>
              Is my team&apos;s data safe?
            </div>

            <p className={styles["faq-answer"]}>
              Your data is encrypted at rest with AES-256, block-level storage
              encryption, and cloud-hosted by Heroku. You can read their{" "}
              <a
                rel="noreferrer noopener"
                target="_blank"
                href="https://www.heroku.com/policy/security"
              >
                security policy here
              </a>
              .
              <br />
              <br />
              You can read our {/* eslint-disable-next-line */}
              <a rel="noreferrer noopener" target="_blank" href="/privacy">
                Privacy Policy
              </a>{" "}
              and our {/* eslint-disable-next-line */}
              <a rel="noreferrer noopener" target="_blank" href="/tos">
                {" "}
                Terms of Service
              </a>
              .
            </p>

            <p className={styles["faq-bottom-note"]}>
              Have a question that isn&apos;t listed? Email us at{" "}
              {CHEERSLY_SUPPORT_EMAIL}
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
