import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// containers
import LandingContainer from "../landing";
import InstallContainer from "../install";
import TermsOfServiceContainer from "../terms-of-service";
import PrivacyPolicyContainer from "../privacy-policy";
import AppInstalledContainer from "../app-installed";
import ContactUsContainer from "../contact-us";

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
          <Route exact path="/install" component={InstallContainer} />
          <Route exact path="/tos" component={TermsOfServiceContainer} />
          <Route exact path="/privacy" component={PrivacyPolicyContainer} />
          <Route
            exact
            path="/app-installed"
            component={AppInstalledContainer}
          />
          <Route exact path="/contact" component={ContactUsContainer} />
        </Switch>
      </Router>

      <Footer />
    </div>
  );
};

export default RootContainer;
