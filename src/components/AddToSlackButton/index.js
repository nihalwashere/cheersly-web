import React from "react";
import PropTypes from "prop-types";
import { SLACK_OAUTH_URL } from "../../utils/config";
import "./styles.css";

const AddToSlackButton = (props) => {
  const { type } = props;

  const handleAddToSlack = async () => {
    window.location.href = SLACK_OAUTH_URL;
  };

  return (
    <div
      className={
        type === "light"
          ? "add-to-slack-light-button-container"
          : "add-to-slack-dark-button-container"
      }
      onClick={handleAddToSlack}
    >
      <div
        className={
          type === "light"
            ? "add-to-slack-light-button-text"
            : "add-to-slack-dark-button-text"
        }
      >
        Add to Slack
      </div>
    </div>
  );
};

AddToSlackButton.propTypes = {
  type: PropTypes.string.isRequired,
};

export default AddToSlackButton;
