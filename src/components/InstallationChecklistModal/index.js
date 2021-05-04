import React, { useState } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import Checkbox from "@material-ui/core/Checkbox";
import { SLACK_OAUTH_URL } from "../../utils/config";
import "./styles.css";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

const InstallationChecklistModal = (props) => {
  const { handleClose, open } = props;

  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const handleAddToSlack = () => {
    if (!checked) {
      return;
    }

    window.location.href = SLACK_OAUTH_URL;
  };

  return (
    <div>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        maxWidth="md"
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          <span className="questions-text">Installation Checklist</span>
        </DialogTitle>
        <DialogContent dividers>
          <div className="question-and-answer">
            <ul>
              <li>
                <div className="answer-text">
                  Please make sure that you have administrative rights on the
                  Slack account on which you wish to install Cheersly.
                </div>
              </li>

              <li>
                <div className="answer-text">
                  During app installation, you will be asked to select a channel
                  of your choice which Cheersly would use to spread some love.
                  Please select a shared channel, generally every person on your
                  team should be on this shared channel, eg. #general or
                  #random, alternatively, you could also create a separate
                  shared channel solely dedicated to Cheersly.
                </div>
              </li>
            </ul>
          </div>

          <div className="answer-text">
            Please feel free to contact <b>support@cheersly.club </b>
            for any questions you have regarding the onboarding process.
          </div>

          <div>
            <Checkbox
              color="default"
              checked={checked}
              onChange={handleChange}
            />
            <span className="answer-text">
              I agree to the <a href="/tos">Terms of Service</a>,{" "}
              <a href="/privacy">Privacy Policy</a> and consent to be contacted
              over email for support and feedback related queries.
            </span>
          </div>
        </DialogContent>

        <DialogActions>
          <div
            className={
              checked
                ? "continue-button"
                : "continue-button continue-button-disabled"
            }
            onClick={handleAddToSlack}
          >
            <span className="continue-text">Continue</span>
          </div>
        </DialogActions>
      </Dialog>
    </div>
  );
};

InstallationChecklistModal.propTypes = {
  handleClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default InstallationChecklistModal;
