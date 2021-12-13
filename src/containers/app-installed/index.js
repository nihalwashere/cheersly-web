import React, { useEffect } from "react";
import { parseQueryString } from "../../utils/common";
import { slackInstall } from "../../utils/api";

export default function AppInstalled() {
  useEffect(() => {
    const query = window.location.search.substring(1);
    const params = parseQueryString(query);

    if (params && params.code) {
      setTimeout(async () => await slackInstall(params.code), 0);
    }
  }, []);

  return (
    <div>
      <div className="flex flex-col items-center h-screen min-h-screen">
        <p className="text-4xl font-semibold mt-24 mb-5">
          WELCOME TO THE CLUB!
        </p>

        <p className="text-4xl font-semibold mt-5 mb-5">
          Cheersly is installed to your workspace successfully.
        </p>

        <p className="text-4xl font-semibold mt-5 mb-5">
          We have shared the onboarding instructions.
        </p>
      </div>
    </div>
  );
}
