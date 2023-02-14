import React from "react";

export default function StartFreeTrialButton() {
  const handleInstall = () => {
    window.location.href = process.env.REACT_APP_SLACK_OAUTH_URL;
  };

  return (
    <div
      className="flex justify-center items-center cursor-pointer hover-slack-button"
      onClick={handleInstall}
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
