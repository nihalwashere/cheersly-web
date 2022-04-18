import React from "react";
import { CHEERSLY_SUPPORT_EMAIL } from "../../utils/constants";
import StartFreeTrialButton from "../../components/StartFreeTrialButton";

export default function Pricing() {
  const handleAddToSlack = () => {
    window.location.href = process.env.REACT_APP_SIGNUP_URL;
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

      <div>
        <div className="flex flex-col items-center justify-center w-64 h-96 bg-yellow-300 rounded border-2 border-current">
          <div className="text-2xl font-semibold pt-2 pb-2">Basic</div>

          <div className="text-4xl font-semibold pt-2 pb-2">Free forever</div>

          <div className="text-base">This or That</div>

          <div className="text-base">Icebreaker Questions</div>

          <div className="text-base">Two Truths and a Lie</div>

          <div className="text-base">Stone Paper Scissors</div>

          <div className="text-base">Tic Tac Toe</div>
        </div>
      </div>

      <div className="flex justify-between items-center w-11/12 mt-12 mb-12">
        <div className="flex flex-col items-center justify-center w-64 h-96 bg-yellow-300 rounded border-2 border-current">
          <div className="text-2xl font-semibold pt-2 pb-2">Pro</div>

          <div className="text-4xl font-semibold pt-2 pb-2">$29 / month</div>

          <div className="text-base">Every thing in the basic plan</div>

          <div className="text-2xl font-semibold">+</div>

          <div className="text-base">Polls</div>

          <div className="text-base">Feedback</div>

          <div className="text-base">Peer Recognition</div>

          <div className="text-base">Rewards</div>

          <div className="text-base font-semibold mt-2 pb-2">
            for upto 100 users
          </div>
        </div>

        <div className="flex flex-col items-center justify-center w-64 h-96 bg-yellow-300 rounded border-2 border-current">
          <div className="text-2xl font-semibold pt-2 pb-2">Standard</div>

          <div className="text-4xl font-semibold pt-2 pb-2">$49 / month</div>

          <div className="text-base">Every thing in the pro plan</div>

          <div className="text-base font-semibold">for upto 250 users</div>
        </div>

        <div className="flex flex-col items-center justify-center w-64 h-96 bg-yellow-300 rounded border-2 border-current">
          <div className="text-2xl font-semibold pt-2 pb-2">Premium</div>

          <div className="text-4xl font-semibold pt-2 pb-2">$99 / month</div>

          <div className="text-base">Every thing in the pro plan</div>

          <div className="text-base font-semibold">for upto 500 users</div>
        </div>

        <div className="flex flex-col items-center justify-center w-64 h-96 bg-yellow-300 rounded border-2 border-current">
          <div className="text-2xl font-semibold pt-2 pb-2">Enterprise</div>

          <div className="font-semibold pt-2 pb-2">
            Contact{" "}
            <a
              href={`mailto:${CHEERSLY_SUPPORT_EMAIL}?subject=Privacy Policy`}
              className="underline"
            >
              {CHEERSLY_SUPPORT_EMAIL}
            </a>
          </div>

          <div className="text-base font-semibold">more than 500 users</div>
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
    </div>
  );
}
