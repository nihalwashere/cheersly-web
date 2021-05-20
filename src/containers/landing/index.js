import React from "react";
import RequestEarlyAccessButton from "../../components/RequestEarlyAccessButton";
import "./styles.css";

const LandingContainer = () => {
  return (
    <div>
      <div className="landing-header-container">
        <div className="landing-header-text">
          Build cheerful teams in Slack.
        </div>

        <div className="landing-header-description">
          Employee engagement and peer recognition platform to build an awesome
          remote work culture.
        </div>
      </div>

      <div className="landing-feature-problem-root-container">
        <div className="landing-feature-problem-container">
          According to a case study, most millennials quit because they feel no
          one said thank you, they feel unappreciated. Let&apos;s make it a
          little easier for great millennial staff to stick around.
        </div>
      </div>

      <div className="landing-feature-card-container">
        <div className="landing-feature-card-row">
          <div className="landing-feature-card">
            ✔️ Cheersly is a one stop shop to all your team&apos;s communication
            needs. Give cheers, conduct polls, share feedback, exchange rewards
            and much more.
          </div>

          <div className="landing-feature-card">
            ✔️ Cheersly provides the kind of positive experience or uplift that
            can increase people&apos;s morale, motivation, engagement and renew
            their commitment to their organization.
          </div>
        </div>

        <div className="landing-feature-card-row">
          <div className="landing-feature-card">
            ✔️ By implementing gratitude into company culture, employees are
            more willing to spread their positive feelings with others.
          </div>
          <div className="landing-feature-card">
            ✔️ Anonymity provides employees the freedom to express their
            opinions without having to face those mental blocks, getting at the
            truth of their sentiments.
          </div>
        </div>

        <div className="landing-feature-card-row">
          <div className="landing-feature-card">
            ✔️ Support your company&apos;s vision and shape its culture by
            defining company values.
          </div>
          <div className="landing-feature-card">
            ✔️ Boost your team&apos;s morale!
          </div>
        </div>

        <div className="landing-feature-card-row">
          <div className="landing-feature-card">
            ✔️ Build a healthier work environment!
          </div>
          <div className="landing-feature-card">
            ✔️ Build an awesome remote work culture!
          </div>
        </div>
      </div>

      <div className="landing-request-early-access-container">
        <div className="landing-request-early-access-header-text">
          Help us shape the future of remote work culture.
        </div>

        <div className="landing-request-early-access-button-container">
          <RequestEarlyAccessButton type="light" />
        </div>
      </div>

      {/* <div className="landing-features-root-container">
        <div className="landing-features-container">
          <div className="landing-feature">
            <div className="landing-feature-image">
              <img
                src={ImageAssets.Cheers}
                alt=""
                loading="lazy"
                height="100%"
                width="100%"
              />
            </div>
          </div>

          <div className="landing-feature">
            <div className="landing-feature-image">
              <img
                src={ImageAssets.PollClosed}
                alt=""
                loading="lazy"
                height="100%"
                width="100%"
              />
            </div>
          </div>

          <div className="landing-feature">
            <div className="landing-feature-image">
              <img
                src={ImageAssets.Feedback}
                alt=""
                loading="lazy"
                height="100%"
                width="100%"
              />
            </div>
          </div>

          <div className="landing-feature">
            <div className="landing-feature-image">
              <img
                src={ImageAssets.AppHome}
                alt=""
                loading="lazy"
                height="100%"
                width="100%"
              />
            </div>
          </div>

          <div className="landing-feature">
            <div className="landing-feature-image">
              <img
                src={ImageAssets.AppLeaderboard}
                alt=""
                loading="lazy"
                height="100%"
                width="100%"
              />
            </div>
          </div>
        </div>
      </div> */}

      {/* <div className="pricing-root-container">
        <div className="pricing-container">
          <div className="pricing-header-text">Pricing</div>
          <div className="pricing-price-text">
            <span style={{ fontWeight: 900, fontSize: 48 }}>$19</span> / month
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
            You pay a flat price of $19 each month irrespective of the number of
            users in your workspace.
          </div>

          <div className="pricing-question">Do you have a refund policy?</div>
          <div className="pricing-answer">
            Yes, we have a 30 day money back guarantee if you are not satisfied
            with our services. Just contact <b>support@cheersly.club</b>
          </div>
        </div>
      </div> */}

      {/* <div className="landing-say-cheers-container">
        <div className="landing-say-cheers-text">say cheers</div>
        <div className="landing-add-to-slack-container">
          <RequestEarlyAccessButton type="light" />
        </div>
      </div> */}
    </div>
  );
};

export default LandingContainer;
