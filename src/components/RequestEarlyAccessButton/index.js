import React from "react";
import PropTypes from "prop-types";
import { EARLY_ACCESS_TYPEFORM } from "../../utils/config";
import "./styles.css";

const RequestEarlyAccessButton = (props) => {
  const { type } = props;

  const handleRequestEarlyAccess = async () => {
    window.location.href = EARLY_ACCESS_TYPEFORM;
  };

  return (
    <div
      className={
        type === "light"
          ? "request-early-access-light-button-container"
          : "request-early-access-dark-button-container"
      }
      onClick={handleRequestEarlyAccess}
    >
      <div
        className={
          type === "light"
            ? "request-early-access-light-button-text"
            : "request-early-access-dark-button-text"
        }
      >
        Request Early Access
      </div>
    </div>
  );
};

RequestEarlyAccessButton.propTypes = {
  type: PropTypes.string.isRequired,
};

export default RequestEarlyAccessButton;
