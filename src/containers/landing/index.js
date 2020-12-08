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
        Push your team forward, boost their morale, say cheers and spread
        happiness!
      </div>

      <div className="landing-features-container">
        <img src={Happy_Girl} alt="Happy Girl" />

        <div className="landing-features-description-container">
          <div className="landing-feature">
            say cheers to someone when they help you with something, shared
            something you like or if you would like to appreciate someone&apos;s
            efforts by using /cheers
          </div>

          <div className="landing-feature">
            Get a birds eye view of your team&apos;s mood and keep track of who
            has given or received the most beers in that month or all time
          </div>
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
