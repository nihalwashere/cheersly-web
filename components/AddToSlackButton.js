import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import { SLACK_OAUTH_URL } from "../utils/config";
import styles from "../styles/AddToSlackButton.module.css";

function AddToSlackButton(props) {
  const { type } = props;

  // const [
  //   shouldShowInstallationChecklistModal,
  //   setShouldShowInstallationChecklistModal,
  // ] = useState(false);

  // const handleAddToSlack = async () => {
  // if (shouldShowInstallationChecklistModal) {
  //   return;
  // }
  // setShouldShowInstallationChecklistModal(true);
  // };

  // const handleCloseInstallationChecklistModal = () => {
  //   setShouldShowInstallationChecklistModal(false);
  // };

  return (
    <div
      className={
        type === "light"
          ? styles["add-to-slack-light-button-container"]
          : styles["add-to-slack-dark-button-container"]
      }
    >
      <div
        className={
          type === "light"
            ? styles["add-to-slack-light-button-text"]
            : styles["add-to-slack-dark-button-text"]
        }
      >
        <Link href={SLACK_OAUTH_URL}>Add to Slack</Link>
      </div>

      {/* {shouldShowInstallationChecklistModal && (
        <InstallationChecklistModal
          open={shouldShowInstallationChecklistModal}
          handleClose={handleCloseInstallationChecklistModal}
        />
      )} */}
    </div>
  );
}

AddToSlackButton.propTypes = {
  type: PropTypes.string.isRequired,
};

export default AddToSlackButton;
