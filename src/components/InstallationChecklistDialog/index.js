import React, { useState } from "react";
import PropTypes from "prop-types";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import { CustomDialog, CustomDialogTitle } from "../CustomDialog";

export default function InstallationChecklistDialog(props) {
  const { open, onClose, onInstall } = props;

  const [consentEmailChecked, setConsentEmailChecked] = useState(false);

  const [checked, setChecked] = useState(false);

  const handleCheckConsentContactEmail = (event) => {
    setConsentEmailChecked(event.target.checked);
  };

  const handleCheck = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <CustomDialog
      open={open}
      onClose={(event, reason) => {
        if (reason !== "backdropClick") {
          onClose(event);
        }
      }}
      maxWidth="md"
      fullWidth
      disableEscapeKeyDown
    >
      <CustomDialogTitle onClose={onClose}>
        <span className="font-bold">Add Cheersly to Slack</span>
      </CustomDialogTitle>
      <DialogContent dividers>
        <div className="flex items-center">
          <Checkbox
            checked={consentEmailChecked}
            onChange={handleCheckConsentContactEmail}
          />
          <span>I would like to recieve marketing emails</span>
        </div>

        <div className="flex items-center">
          <Checkbox checked={checked} onChange={handleCheck} />
          <span>
            I agree to the{" "}
            <a href="/tos" className="underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="/privacy" className="underline">
              Privacy Policy
            </a>
          </span>
        </div>
      </DialogContent>
      <DialogActions>
        <Button
          variant="outlined"
          onClick={() => onInstall(consentEmailChecked)}
          style={{
            border: "2px solid #ff8c00ff",
            borderRadius: 8,
            width: 100,
          }}
          disabled={!checked}
        >
          <span className="font-semibold">Continue</span>
        </Button>
      </DialogActions>
    </CustomDialog>
  );
}

InstallationChecklistDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onInstall: PropTypes.func.isRequired,
};
