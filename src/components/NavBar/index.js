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
        say cheers
      </div>
      <AddToSlackButton />
    </div>
  );
};

export default NavBar;
