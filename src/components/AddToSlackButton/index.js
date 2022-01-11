import React from "react";
import PropTypes from "prop-types";
import ImageAssets from "../../assets/images";

export default function AddToSlackButton(props) {
  const { onClick } = props;

  return (
    <div
      className="flex justify-center items-center cursor-pointer hover-slack-button"
      style={{
        border: "2px solid #ff8c00ff",
        borderRadius: 8,
        width: 300,
        height: 75,
      }}
      onClick={onClick}
    >
      <img
        src={ImageAssets.Slack_Logo}
        alt="Slack"
        width="30px"
        height="30px"
      />
      <span className="text-4xl ml-4">Add to</span>
      <h1 className="text-4xl font-semibold ml-1">Slack</h1>
    </div>
  );
}

AddToSlackButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};
