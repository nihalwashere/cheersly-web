import React from "react";
import AddToSlackButton from "../AddToSlackButton";
import "./styles.css";

const NavBar = () => {
  const handleLogoClick = () => {
    window.location.href = "/";
  };

  return (
    <div className="navbar-container">
      <div className="navbar-text" onClick={handleLogoClick}>
        cheersly
      </div>

      {!String(window.location.href).includes("/app-installed") && (
        <AddToSlackButton />
      )}
    </div>
  );
};

export default NavBar;
