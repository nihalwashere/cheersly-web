import React from "react";
import { CHEERSLY_SUPPORT_EMAIL } from "../../utils/constants";

export default function FAQ() {
  return (
    <div>
      <div className="h-full flex flex-col items-center m-4">
        <div className="w-4/5">
          <h1 className="text-4xl font-semibold text-center mt-5 mb-10">
            FAQ&apos;s
          </h1>

          <div className="mb-6">
            <div name="faq-question" className="flex text-xl font-semibold">
              1. How to use Cheersly?
            </div>

            <p className="mt-2 ml-7">
              Cheersly will never post a message by itself. You can run commands
              or use the shortcut button within Slack to interact with it.
              <br />
              <br />
              &quot;/cheers&quot; - To cheer your peers.
              <br />
              <br />
              &quot;/cheers help&quot; - Seek some help.
              <br />
              <br />
              &quot;/cheers onboard&quot; - Get onboarding instructions.
            </p>
          </div>

          <div className="mb-6">
            <div name="faq-question" className="flex text-xl font-semibold">
              2. Why am I not receiving any response in a channel from Cheersly?
            </div>

            <p className="mt-2 ml-7">
              This is because you haven&apos;t invited Cheersly to that channel
              in which you are expecting a response. Use the command
              &quot;/invite @Cheersly&quot; in the channel you wish to invite
              Cheersly to.
              <br />
              <br />
              Please make sure that Cheersly is invited to that specific
              channel, before running a command.
            </p>
          </div>

          <div className="mb-6">
            <div name="faq-question" className="flex text-xl font-semibold">
              3. Why am I not seeing the option to add, edit or delete company
              values or rewards in the app dashboard?
            </div>

            <p className="mt-2 ml-7">
              In order to be able to add, edit or delete company values or
              rewards from the app dashboard, you need to have admin rights on
              Cheersly. Please check with the admin of your Slack workspace or
              who actually installed the app. In order to give you admin rights,
              an existing admin can navigate to the app dashboard, click on the
              options list button on the top right corner (beside your name),
              select &quot;Admin Settings&quot;.
            </p>
          </div>

          <div className="mb-6">
            <div name="faq-question" className="flex text-xl font-semibold">
              4. How do I remove Cheersly from my Slack workspace?
            </div>

            <p className="mt-2 ml-7">
              Check out the{" "}
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://slack.com/intl/en-pl/help/articles/360003125231-Remove-apps-and-custom-integrations-from-your-workspace#remove-a-custom-integration"
              >
                Slack docs
              </a>{" "}
              for detailed info on how to remove an app from your workspace.
            </p>
          </div>

          <div className="mb-6">
            <div name="faq-question" className="flex text-xl font-semibold">
              5. What permissions does Cheersly have in my Slack workspace?
            </div>

            <p className="mt-2 ml-7">
              Cheersly only reads and saves content that is explicitly and
              directly sent to the app, nothing else. You&apos;ll notice we
              don&apos;t ask for permission to read your Slack messages, we
              don&apos;t need it.
              <br />
              <br />
              The permissions requested for the app have been reviewed and
              approved by Slack and are the absolute minimum permissions
              required for the app to work.
            </p>
          </div>

          <div className="mb-6">
            <p className="text-base mt-10">
              Have a question that isn&apos;t listed? Email us at{" "}
              {CHEERSLY_SUPPORT_EMAIL}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
