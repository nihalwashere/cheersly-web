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
    <div style={{ height: 600 }}>
      <div className="app-installed-text">
        cheersly was installed to your workspace successfully
      </div>

      <div className="app-installed-text">WELCOME TO THE CLUB!</div>

      <div className="app-installed-text">
        we have DM&apos;ed you the onboarding instructions
      </div>
    </div>
  );
};

export default AppInstalledContainer;
