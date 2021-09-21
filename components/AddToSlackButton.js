import React from "react";
import { useRouter } from "next/router";
import { SLACK_OAUTH_URL } from "../utils/config";
import styles from "../styles/AddToSlackButton.module.css";

export default function AddToSlackButton() {
  const router = useRouter();

  const handleAddToSlackClick = () => {
    router.push(SLACK_OAUTH_URL);
  };

  return (
    <div
      className={styles["add-to-slack-button-container"]}
      onClick={handleAddToSlackClick}
    >
      {/* eslint-disable-next-line */}
      <img
        src="/images/slack_logo.svg"
        alt="Slack"
        width="30px"
        height="30px"
      />
      <span className={styles["add-to-button-text"]}>Add to</span>
      <h1 className={styles["add-to-slack-button-text"]}>slack</h1>
    </div>
  );
}
