import React, { useState } from "react";
import { CHEERSLY_SUPPORT_EMAIL } from "../../utils/constants";
import StartFreeTrialButton from "../../components/StartFreeTrialButton";
import InstallationChecklistDialog from "../../components/InstallationChecklistDialog";

export default function Pricing() {
  const [
    shouldShowInstallationChecklistDialog,
    setShouldShowInstallationChecklistDialog,
  ] = useState(false);

  const handleAddToSlack = () => {
    setShouldShowInstallationChecklistDialog(true);
  };

  const handleCloseInstallationChecklistDialog = () => {
    setShouldShowInstallationChecklistDialog(false);
  };

  const handleInstall = () => {
    window.location.href = process.env.REACT_APP_SLACK_OAUTH_URL;
    handleCloseInstallationChecklistDialog();
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-center text-4xl font-semibold mb-4">
        Pricing
      </div>
      <h1 className="flex text-3xl">
        Simple, transparent pricing for teams of all sizes!
      </h1>
      <div className="flex mt-4 mb-4">
        Free 14-day trial · No credit card required
      </div>
      <div className="flex justify-between w-11/12 mt-12 mb-8">
        <div className="flex flex-col items-center justify-center w-64 h-64 bg-yellow-300 rounded border-2 border-current">
          <div className="text-2xl font-semibold pt-4 pb-4">Free</div>

          <div className="text-base">Polls (25 responses / month)</div>

          <div className="text-base">Feedback (5 / month)</div>

          <div className="text-base">Cheers (5 / month)</div>

          <div className="text-base">This or That</div>

          <div className="text-base">Icebreaker Questions</div>

          <div className="text-base">Two Truths and a Lie</div>

          <div className="text-base">Stone Paper Scissors</div>

          <div className="text-base">Tic Tac Toe</div>
        </div>

        <div className="flex flex-col items-center justify-center w-64 h-64 bg-yellow-300 rounded border-2 border-current">
          <div className="text-2xl font-semibold pt-2 pb-2">Standard</div>

          <div className="text-4xl font-semibold pt-2 pb-2">$29 / month</div>

          <div className="text-base">Rewards & Recognition</div>

          <div className="text-base">Everything in free + unlimited,</div>

          <div className="text-base">Polls</div>

          <div className="text-base">Feedback</div>

          <div className="text-base">Cheers</div>

          <div className="text-base font-semibold">for upto 250 users</div>
        </div>

        <div className="flex flex-col items-center justify-center w-64 h-64 bg-yellow-300 rounded border-2 border-current">
          <div className="text-2xl font-semibold pt-2 pb-2">Premium</div>

          <div className="text-4xl font-semibold pt-2 pb-2">$49 / month</div>

          <div className="text-base">Rewards & Recognition</div>

          <div className="text-base">Everything in free + unlimited,</div>

          <div className="text-base">Polls</div>

          <div className="text-base">Feedback</div>

          <div className="text-base">Cheers</div>

          <div className="text-base font-semibold">for upto 500 users</div>
        </div>

        <div className="flex flex-col items-center justify-center w-64 h-64 bg-yellow-300 rounded border-2 border-current">
          <div className="text-2xl font-semibold pt-2 pb-2">Enterprise</div>

          <div className="text-4xl font-semibold pt-2 pb-2">$79 / month</div>

          <div className="text-base">Rewards & Recognition</div>

          <div className="text-base">Everything in free + unlimited,</div>

          <div className="text-base">Polls</div>

          <div className="text-base">Feedback</div>

          <div className="text-base">Cheers</div>

          <div className="text-base font-semibold">for upto 1000 users</div>
        </div>
      </div>

      <StartFreeTrialButton onClick={handleAddToSlack} />

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

      {shouldShowInstallationChecklistDialog && (
        <InstallationChecklistDialog
          open={shouldShowInstallationChecklistDialog}
          onClose={handleCloseInstallationChecklistDialog}
          onInstall={handleInstall}
        />
      )}
    </div>
  );
}
