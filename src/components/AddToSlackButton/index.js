import React from "react";
import "./styles.css";

const AddToSlackButton = () => {
  const handleAddToSlack = () => {};

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
