import React from "react";
import Link from "next/link";
import { SLACK_OAUTH_URL } from "../utils/config";
import styles from "../styles/AddToSlackButton.module.css";

export default function AddToSlackButton() {
  return (
    <div className={styles["add-to-slack-button-container"]}>
      <div className={styles["add-to-slack-button-text"]}>
        <Link href={SLACK_OAUTH_URL}>Add to Slack</Link>
      </div>
    </div>
  );
}
