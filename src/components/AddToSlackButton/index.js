import React from "react";
import PropTypes from "prop-types";
import { SLACK_CLIENT_ID } from "../../utils/config";
import "./styles.css";

const AddToSlackButton = (props) => {
  const { type } = props;

  const handleAddToSlack = async () => {
    window.location.href = `https://slack.com/oauth/v2/authorize?client_id=${SLACK_CLIENT_ID}&scope=app_mentions:read,chat:write,commands,im:history,team:read,users:read,users:read.email,incoming-webhook&user_scope=`;
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
