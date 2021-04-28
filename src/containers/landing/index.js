import React from "react";
import ImageAssets from "../../assets/images";
import AddToSlackButton from "../../components/AddToSlackButton";
import "./styles.css";

const LandingContainer = () => {
  return (
    <div>
      <div className="landing-header-container">
        <div className="landing-header-text">
          Push your team forward, boost their morale, say cheers and spread
          happiness!
        </div>

        <div className="landing-header-image">
          <img
            src={ImageAssets.BuildCheerfulTeams}
            alt="Cheersly | Build cheerful teams"
            height="100%"
            width="100%"
          />
        </div>
      </div>

      <div className="landing-features-root-container">
        <div className="landing-features-container">
          <div className="landing-feature">
            <div className="landing-feature-image">
              <img
                src={ImageAssets.Cheers}
                alt="Cheersly | Say cheers"
                height="100%"
                width="100%"
              />
            </div>
          </div>

          <div className="landing-feature">
            <div className="landing-feature-image">
              <img
                src={ImageAssets.PollClosed}
                alt="Cheersly | Submit a Poll"
                height="100%"
                width="100%"
              />
            </div>
          </div>

          <div className="landing-feature">
            <div className="landing-feature-image">
              <img
                src={ImageAssets.Feedback}
                alt="Cheersly | Feedback"
                height="100%"
                width="100%"
              />
            </div>
          </div>

          <div className="landing-feature">
            <div className="landing-feature-image">
              <img
                src={ImageAssets.AppHome}
                alt="Cheersly | App Home"
                height="100%"
                width="100%"
              />
            </div>
          </div>

          <div className="landing-feature">
            <div className="landing-feature-image">
              <img
                src={ImageAssets.AppLeaderboard}
                alt="Cheersly | App Leaderboard"
                height="100%"
                width="100%"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="pricing-root-container">
        <div className="pricing-container">
          <div className="pricing-header-text">Pricing</div>
          <div className="pricing-price-text">
            <span style={{ fontWeight: 900, fontSize: 48 }}>$49</span> / month
          </div>
          <div className="pricing-trial-text">try FREE for 7 days</div>
          <div className="pricing-trial-description-text">
            No credit card required or complicated tiered plans and if you are
            not happy you can cancel at anytime.
          </div>
        </div>

        <div className="pricing-question-answers-container">
          <div className="pricing-question-answers-header-text">
            Questions and Answers
          </div>

          <div className="pricing-question">
            What happens when the trial is over? Will I be charged?
          </div>
          <div className="pricing-answer">
            After your trial ends you won&apos;t be charged because we
            don&apos;t require a credit card to try Cheersly. If you don&apos;t
            upgrade and your trial expires, people will receive a response from
            Cheersly letting them know the trial is over.
          </div>

          <div className="pricing-question">Do I have to pay after trial?</div>
          <div className="pricing-answer">
            Yes. After 7 days of trial you will have to purchase a subscription
            in order to use Cheersly.
          </div>

          <div className="pricing-question">
            What if we need more than 7 days to try out Cheersly?
          </div>
          <div className="pricing-answer">
            We would be more than happy to extend a trial if you need more time.
            Just contact <b>support@cheersly.club</b> and we&apos;ll make it
            happen.
          </div>

          <div className="pricing-question">
            How do I get a discount for a not-for-profit?
          </div>
          <div className="pricing-answer">
            There will be an option to apply for a discounted plan after you
            start your trial. We have a few fixed monthly rates we charge
            non-profits based on team size. We&apos;re very flexible on finding
            a rate that works best for you. Just contact{" "}
            <b>support@cheersly.club</b>
          </div>

          <div className="pricing-question">
            I have 10/50/100/500 users in my Slack workspace, how much do I pay?
          </div>
          <div className="pricing-answer">
            You pay a flat price of $49 each month irrespective of the number of
            users in your workspace.
          </div>

          <div className="pricing-question">Do you have a refund policy?</div>
          <div className="pricing-answer">
            Yes, we have a 30 day money back guarantee if you are not satisfied
            with our services. Just contact <b>support@cheersly.club</b>
          </div>
        </div>
      </div>

      <div className="landing-say-cheers-container">
        <div className="landing-say-cheers-text">say cheers</div>
        <div className="landing-add-to-slack-container">
          <AddToSlackButton type="light" />
        </div>
      </div>
    </div>
  );
};

export default LandingContainer;
