import React from "react";
import Illustration_1 from "../../assets/images/illustration_4.jpg";
import Happy_Girl from "../../assets/images/happy_girl.jpg";
import AddToSlackButton from "../../components/AddToSlackButton";
import "./styles.css";

const LandingContainer = () => {
  return (
    <div>
      <div className="landing-header-container">
        <div className="landing-header-text">build cheerful teams</div>
        <div>
          <img src={Illustration_1} alt="Illustration 1" />
        </div>
      </div>

      <div className="landing-description-text">
        push your team forward, boost their morale, say cheers and spread
        happiness!
      </div>

      <div className="landing-features-container">
        <img src={Happy_Girl} alt="Happy Girl" />

        <div className="landing-features-description-container">
          <div className="landing-feature">
            say cheers to your peers when you would like to appreciate their
            efforts
          </div>

          <div className="landing-feature">
            get a birds eye view of your team&apos;s mood and keep track of who
            has given or received the most cheers
          </div>

          <div className="landing-feature">
            you should share in some cheers with your peers because it makes the
            recipient feel good about themselves and this can help to boost
            their performance.
          </div>

          <div className="landing-feature">
            cheersly provides the kind of positive experience or uplift that can
            increase people&apos;s morale, motivation and engagement, and renew
            their commitment to their organization
          </div>
        </div>
      </div>

      <div className="pricing-container">
        <div className="pricing-header-text">Pricing</div>
        <div className="pricing-price-text">$10 / 100 users / team</div>
        <div className="pricing-trial-text">try FREE for 7 days</div>
        <div className="pricing-trial-description-text">
          no credit card required or complicated tiered plans and if you are not
          happy you can cancel at anytime
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
          After your trial ends you won&apos;t be charged because we don&apos;t
          require a credit card to try cheersly. If you don&apos;t upgrade and
          your trial expires, people will receive a response from cheersly
          letting them know the trial is over.
        </div>

        <div className="pricing-question">Do I have to pay after trial?</div>
        <div className="pricing-answer">
          Yes. After 7 days of trial you will have to purchase a subscription in
          order to use cheersly.
        </div>

        <div className="pricing-question">
          What if we need more than 7 days to try out cheersly?
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
          There will be an option to apply for a discounted plan after you start
          your trial. We have a few fixed monthly rates we charge non-profits
          based on team size. We&apos;re very flexible on finding a rate that
          works best for you. Just contact <b>support@cheersly.club</b>
        </div>

        <div className="pricing-question">
          I have 10/50/100/500 users in my Slack workspace, how much do I pay?
        </div>
        <div className="pricing-answer">
          You pay $10 for each 100 users that are in your Slack workspace: for
          example if you have 123 users in your team you will pay $12.30 per
          month and if you have 50 users in your team then you will pay $5 per
          month. Users in your workspace are counted at the end of each billing
          period. Bots, disabled and guest users are not counted for billing. So
          you don&apos;t pay for anyone on your team who hasn&apos;t used
          cheersly.
        </div>

        <div className="pricing-question">Do you have a refund policy?</div>
        <div className="pricing-answer">
          Yes, we have a 30 day money back guarantee if you are not satisfied
          with our services. Just contact <b>support@cheersly.club</b>
        </div>
      </div>

      <div className="landing-say-cheers-container">
        <div className="landing-say-cheers-text">say cheers</div>
        <div className="landing-add-to-slack-container">
          <AddToSlackButton />
        </div>
      </div>
    </div>
  );
};

export default LandingContainer;
