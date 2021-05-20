import React from "react";
import AddToSlackButton from "../../components/AddToSlackButton";
import "./styles.css";

const InstallContainer = () => {
  return (
    <div className="install-container">
      <AddToSlackButton type="light" />
    </div>
  );
};

export default InstallContainer;
