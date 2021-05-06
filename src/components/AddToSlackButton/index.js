import React from "react";
import PropTypes from "prop-types";
import { SLACK_OAUTH_URL } from "../../utils/config";
import "./styles.css";

const AddToSlackButton = (props) => {
  const { type } = props;

  // const [
  //   shouldShowInstallationChecklistModal,
  //   setShouldShowInstallationChecklistModal,
  // ] = useState(false);

  const handleAddToSlack = async () => {
    window.location.href = SLACK_OAUTH_URL;

    // if (shouldShowInstallationChecklistModal) {
    //   return;
    // }
    // setShouldShowInstallationChecklistModal(true);
  };

  // const handleCloseInstallationChecklistModal = () => {
  //   setShouldShowInstallationChecklistModal(false);
  // };

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

      {/* {shouldShowInstallationChecklistModal && (
        <InstallationChecklistModal
          open={shouldShowInstallationChecklistModal}
          handleClose={handleCloseInstallationChecklistModal}
        />
      )} */}
    </div>
  );
};

AddToSlackButton.propTypes = {
  type: PropTypes.string.isRequired,
};

export default AddToSlackButton;
