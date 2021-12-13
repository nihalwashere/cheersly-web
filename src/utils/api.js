export const slackInstall = async (code) => {
  const url = `${process.env.REACT_APP_API_BASE_URL}/slack-installation/slack-install`;

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
