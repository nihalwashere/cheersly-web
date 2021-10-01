import React from "react";
import { useRouter } from "next/router";
import { SLACK_OAUTH_URL } from "../utils/config";
import styles from "../styles/StartFreeTrialButton.module.css";

export default function StartFreeTrialButton() {
  const router = useRouter();

  const handleStartFreeTrialClick = () => {
    router.push(SLACK_OAUTH_URL);
  };

  return (
    <div
      className={styles["start-free-trial-button-container"]}
      onClick={handleStartFreeTrialClick}
    >
      <span className={styles["start-free-trial-button-text"]}>
        Start free trial
      </span>
    </div>
  );
}
