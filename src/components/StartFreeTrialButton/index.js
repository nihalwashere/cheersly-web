import React from "react";
import PropTypes from "prop-types";

export default function StartFreeTrialButton(props) {
  const { onClick } = props;

  return (
    <div
      className="flex justify-center items-center cursor-pointer hover-slack-button"
      onClick={onClick}
      style={{
        border: "2px solid #FFD700",
        background: "#FFD700",
        borderRadius: 8,
        width: 300,
        height: 75,
      }}
    >
      <span className="text-4xl">Start free trial</span>
    </div>
  );
}

StartFreeTrialButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};
