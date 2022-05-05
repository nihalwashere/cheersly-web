import React, { useState } from "react";
import { CHEERSLY_SUPPORT_EMAIL } from "../../utils/constants";
import StartFreeTrialButton from "../../components/StartFreeTrialButton";
import InstallationChecklistDialog from "../../components/InstallationChecklistDialog";

export default function Pricing() {
  // const [
  //   shouldShowInstallationChecklistDialog,
  //   setShouldShowInstallationChecklistDialog,
  // ] = useState(false);

  // const handleAddToSlack = () => {
  //   setShouldShowInstallationChecklistDialog(true);
  // };

  // const handleCloseInstallationChecklistDialog = () => {
  //   setShouldShowInstallationChecklistDialog(false);
  // };

  const handleInstall = (isMarketingEmailConsentChecked) => {
    // if (isMarketingEmailConsentChecked) {
    // window.location.href = process.env.REACT_APP_SLACK_OAUTH_EMAIL_SCOPE_URL;
    // } else {
    window.location.href = process.env.REACT_APP_SLACK_OAUTH_URL;
    // }

    // handleCloseInstallationChecklistDialog();
  };

  return (
    <div className="flex flex-col items-center">
      <div className="text-center mt-10">
        <h1 className="text-2xl font-semibold">
          Simple, transparent pricing for teams of all sizes!
        </h1>

        <div className="text-xl text-c-gray mt-4">
          Get all features for a single, predictable price and unlimited users
        </div>
      </div>

      <div className="flex justify-center mt-10">
        <div>
          <p className="text-5xl font-semibold text-center">$29 / month</p>

          <div className="flex flex-col items-center mt-4">
            <div className="text-xl text-c-gray mb-10">
              Free 14-day trial · No credit card required
            </div>

            <StartFreeTrialButton onClick={handleInstall} />
          </div>
        </div>
      </div>

      <div className="mt-12 mb-12 flex flex-col items-center w-1/2">
        <div className="text-2xl font-semibold">Pricing Questions</div>

        <div className="mt-4">
          <div className="text-lg font-semibold">
            What happens when the trial is over? Will I be charged?
          </div>

          <div className="text-base">
            After your trial ends you won&apos;t be charged because we
            don&apos;t require a credit card to try Cheersly. You&apos;ll
            receive a few messages during your trial prompting you to upgrade.
            If you don&apos;t upgrade and your trial expires, people will
            receive a response from Cheersly letting them know the trial is
            over.
          </div>
        </div>

        <div className="mt-4">
          <div className="text-lg font-semibold">
            Do you offer special discounts for educational institutions or
            not-for-profit organizations?
          </div>

          <div className="text-base">
            Yes! If you are using Cheersly in a school, university, a
            not-for-profit organization or an open source community, contact us
            at {CHEERSLY_SUPPORT_EMAIL}.
          </div>
        </div>

        <div className="mt-4">
          <div className="text-lg font-semibold">
            Do you have a refund policy?
          </div>

          <div className="text-base">
            Yes, we have a 15 day money back guarantee if you are not satisfied
            with our services. Just contact us at {CHEERSLY_SUPPORT_EMAIL}.
          </div>
        </div>
      </div>

      {/* {shouldShowInstallationChecklistDialog && (
        <InstallationChecklistDialog
          open={shouldShowInstallationChecklistDialog}
          onClose={handleCloseInstallationChecklistDialog}
          onInstall={handleInstall}
        />
      )} */}
    </div>
  );
}
