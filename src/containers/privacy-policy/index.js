import React from "react";
import { CHEERSLY_SUPPORT_EMAIL } from "../../utils/constants";

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-3/4">
        <h1 className="font-semibold text-4xl text-center mt-20 mb-20">
          Privacy Policy
        </h1>

        <p className="mb-5">
          Our approach to your privacy boils down to doing the right thing. You
          should never feel surprised about the information we know about you or
          when we contact you. Every interaction should be valuable to both you
          and us. If you ever feel like the information we know about you is
          surprising, please let us know.
        </p>

        <p className="mb-5">
          When it comes to being stewards of your information, we&apos;ll do the
          right thing and won&apos;t use your information without your
          permission. We strive to collect the least amount of information as
          possible. Information takes up space, and we like space.
        </p>

        <p className="font-bold mt-10 mb-2">Why should you trust us?</p>

        <p className="mb-5">
          Because you support us with your financial support, and our
          relationship with you helps us achieve our company vision. It&apos;s
          not good to anger people you&apos;re in a relationship with.
          That&apos;s bad for our business, our personal happiness, and helping
          spread kindness throughout the world.
        </p>

        <p className="mb-5">
          If for any reason you don&apos;t agree with this privacy policy,
          please do not use any of our Services for any reason. Our Services are
          defined as anything Cheersly creates and owns.
        </p>

        <div>
          <p className="font-bold mt-10 mb-2">
            1. Information we collect and why?
          </p>

          <p className="mb-5">
            When you install Cheersly to your Slack workspace we collect
            information necessary for our Services to function. We also collect
            information if you give it to us.
          </p>

          <p className="mb-5">
            Any of the information we collect from you may be used in one of the
            following ways:
          </p>

          <p className="mb-5">
            <ul className="list-disc ml-5">
              <li>Personalize your experience</li>
              <li>Better respond to your individual needs</li>
              <li>Operate and improve our Services</li>
              <li>Improve customer service</li>
              <li>Contact you</li>
            </ul>
          </p>

          <div>
            <p className="font-bold mt-10 mb-2">
              Here is what we collect and why:
            </p>

            <p className="mb-5">
              <ul className="list-disc ml-5">
                <li>The number of people in your Slack workspace</li>
                <ul className="list-disc ml-5">
                  <li>
                    We use this for product functionality and internal
                    reporting.
                  </li>
                </ul>

                <li>Your name and/or display name</li>
                <ul className="list-disc ml-5">
                  <li>
                    To identify you in the product so we and people in your
                    group can find you.
                  </li>
                </ul>

                <li>Your avatar</li>
                <ul className="list-disc ml-5">
                  <li>
                    This is a picture you&apos;ve chosen to represent yourself.
                    It&apos;s collected from the picture you&apos;re using in
                    your Slack workspace with Cheersly.
                  </li>
                </ul>

                <li>Email address</li>
                <ul className="list-disc ml-5">
                  <li>
                    If you are an Admin, we may use your email to contact you
                    regarding your product usage. This includes things like
                    billing, troubleshooting, cancellation reason, and welcoming
                    you to the product. We strive to send the least email
                    possible. We would also contact individual users on your
                    team if in case they have shared a feedback.
                  </li>
                </ul>

                <li>Messages</li>
                <ul className="list-disc ml-5">
                  <li>
                    In order to operate, maintain, and provide to you the
                    features and functionality of our Service we only collect
                    needed information, including; message, timestamp and where
                    the message was located (e.g. channel name, channel
                    workspace).
                  </li>
                </ul>
              </ul>
            </p>
          </div>

          <div className="font-bold mt-10 mb-2 margin-top-20">
            Unintentionally collected data
          </div>

          <p className="mb-5">
            We do not intentionally collect Personal Data that may be contained
            in your messages. Personal Data in your messages belongs to you, and
            you are responsible for it, including complying with any regulatory
            controls regarding that data.
          </p>

          <p className="font-bold mt-10 mb-2">
            2. Where your information is stored and protections
          </p>

          <p className="mb-5">
            Security and storage
            <ul>
              <li>
                We use Heroku as hosting provider in the United States to store
                and protect your information. They are up to date and setup with
                the latest security standards and undergo recurring security
                assessments to protect your information.
              </li>
            </ul>
          </p>

          <p className="font-bold mt-10 mb-2">3. Data Retention</p>

          <p className="mb-5">
            <ul>
              <li>
                We collect and store necessary information required to offer you
                the features of the platform. Data would be archived for 30 days
                after you stopped using the platform. This is the period when we
                would want to win you back and resume your account from the last
                operating state.
              </li>
            </ul>
          </p>

          <p className="font-bold mt-10 mb-2">4. Cookies and how we use them</p>

          <p className="mb-5">
            Cookies are small files a site or its service provider transfers to
            your computer&apos;s hard drive through your Web browser (if you
            allow) that enables the sites or service providers systems to
            recognize your browser and capture and remember certain information.
          </p>

          <p className="mb-5">
            We use “cookies” to collect information about you and your activity
            across our site.
          </p>

          <p className="font-bold mt-10 mb-2 margin-top-20">
            5. Who has access to your information
          </p>

          <p className="mb-5">
            Your information will not be sold, exchanged, transferred, or given
            to any other company for any reason whatsoever, without your
            consent, other than for the express purpose of delivering the
            Services requested.
          </p>

          <p className="mb-5 margin-top-10">
            We do not sell, trade, or otherwise transfer to outside parties your
            personally identifiable information. This does not include trusted
            third parties who assist us in operating our website, conducting our
            business, or servicing you, so long as those parties agree to keep
            this information confidential.
          </p>

          <p className="mb-5 margin-top-10">
            <ul className="list-disc ml-5">
              <li>
                Heroku{" "}
                <a
                  href="https://www.heroku.com"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  (https://www.heroku.com)
                </a>
              </li>
              <ul className="list-disc ml-5">
                <li>Hosting provider for app.</li>
              </ul>

              <li>
                Stripe{" "}
                <a
                  href="https://www.stripe.com"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  (https://www.stripe.com)
                </a>
              </li>
              <ul className="list-disc ml-5">
                <li>Payments processing infrastructure for app.</li>
              </ul>
            </ul>
          </p>

          <p className="font-bold mt-10 mb-2">
            6. How you can control your data
          </p>

          <p className="mb-5 margin-top-10">
            You can request for us to send, remove or modify any information
            about your account. To permanently remove your data, you must email
            us at {CHEERSLY_SUPPORT_EMAIL}, and we will remove your data within
            30 days of notice.
          </p>

          <p className="font-bold mt-10 mb-2">7. Consent</p>

          <p className="mb-5">
            If you do not consent to the collection, use or disclosure of your
            personal information as outlined in this policy, please do not
            provide any personal information to our Service or agree to our
            Terms of Service and Privacy Policy. If you have provided personal
            information and no longer consent to its use or disclosure as
            outlined herein, please notify us at {CHEERSLY_SUPPORT_EMAIL}.
          </p>

          <p className="font-bold mt-10 mb-2">8. Changes to this policy</p>

          <p className="mb-5">
            At our discretion, we may change our privacy policy to reflect
            current acceptable practices. We will take reasonable steps to let
            users know about changes via our website. Your continued use of this
            site after any changes to this policy will be regarded as acceptance
            of our practices around privacy and personal information.
          </p>

          <p className="mb-5">
            If we make a significant change to this privacy policy, for example
            changing a lawful basis on which we process your personal
            information, we will ask you to re-consent to the amended privacy
            policy.
          </p>

          <p className="font-bold mt-10 mb-2">Contacting Us</p>

          <p className="mb-5">
            If there are any questions regarding this privacy policy you may
            contact us here:{" "}
            <a
              href={`mailto:${CHEERSLY_SUPPORT_EMAIL}?subject=Privacy Policy`}
              className="no-default-link"
            >
              {CHEERSLY_SUPPORT_EMAIL}
            </a>
          </p>

          <p className="font-bold mt-10 mb-10">
            This policy is effective as of 1st January, 2021.
          </p>
        </div>
      </div>
    </div>
  );
}
