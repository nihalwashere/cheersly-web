import React from "react";
import { SLACK_CLIENT_ID } from "../../utils/config";
import "./styles.css";

const AddToSlackButton = () => {
  const handleAddToSlack = async () => {
    window.location.href = `https://slack.com/oauth/v2/authorize?client_id=${SLACK_CLIENT_ID}&scope=app_mentions:read,chat:write,commands,im:history,team:read,users.profile:read,users:read,users:read.email,incoming-webhook&user_scope=`;
  };

  return (
    <div
      className="add-to-slack-white-button-container"
      onClick={handleAddToSlack}
    >
      <div className="add-to-slack-white-button-text">add to slack</div>
    </div>
  );
};

export default AddToSlackButton;
