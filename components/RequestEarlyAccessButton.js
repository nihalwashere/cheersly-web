import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { EARLY_ACCESS_TYPEFORM } from "../utils/config";
import styles from "../styles/RequestEarlyAccessButton.module.css";

function RequestEarlyAccessButton(props) {
  const { type } = props;

  return (
    <div
      className={
        type === "light"
          ? styles["request-early-access-light-button-container"]
          : styles["request-early-access-dark-button-container"]
      }
    >
      <div
        className={
          type === "light"
            ? styles["request-early-access-light-button-text"]
            : styles["request-early-access-dark-button-text"]
        }
      >
        <Link href={EARLY_ACCESS_TYPEFORM}>Request Early Access</Link>
      </div>
    </div>
  );
}

RequestEarlyAccessButton.propTypes = {
  type: PropTypes.string.isRequired,
};

export default RequestEarlyAccessButton;
