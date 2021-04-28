import React, { useEffect } from "react";
import { parse_query_string } from "../../utils/common";
import { slackInstall } from "../../api";
import "./styles.css";

const AppInstalledContainer = () => {
  useEffect(() => {
    const query = window.location.search.substring(1);
    const params = parse_query_string(query);

    if (params && params.code) {
      setTimeout(async () => await slackInstall(params.code), 0);
    }
  }, []);

  return (
    <div style={{ minHeight: "100vh" }}>
      <div className="app-installed-text">WELCOME TO THE CLUB!</div>

      <div className="app-installed-text">
        Cheersly was installed to your workspace successfully
      </div>

      <div className="app-installed-text">
        We have shared the onboarding instructions
      </div>
    </div>
  );
};

export default AppInstalledContainer;
