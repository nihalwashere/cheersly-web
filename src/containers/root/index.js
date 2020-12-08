import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// containers
import LandingContainer from "../landing";
import TermsOfServiceContainer from "../terms-of-service";
import PrivacyPolicyContainer from "../privacy-policy";

// components
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

const RootContainer = () => {
  return (
    <div>
      <Router>
        <NavBar />

        <Switch>
          <Route exact path="/" component={LandingContainer} />
          <Route exact path="/tos" component={TermsOfServiceContainer} />
          <Route exact path="/privacy" component={PrivacyPolicyContainer} />
        </Switch>
      </Router>

      <Footer />
    </div>
  );
};

export default RootContainer;
