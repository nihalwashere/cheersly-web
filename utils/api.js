import { API_BASE_URL } from "./config";

export const slackInstall = async (code) => {
  const url = `${API_BASE_URL}/slack-installation/slack-install`;

  const data = {
    code,
  };

  const req = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return await req.json();
};
