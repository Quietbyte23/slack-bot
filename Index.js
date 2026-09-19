const axios = require("axios");
require("dotenv").config(); // must be the FIRST line

const { App } = require("@slack/bolt");

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  appToken: process.env.SLACK_APP_TOKEN,
  socketMode: true
});

app.command("/mybot-ping", async ({ command, ack, respond }) => {
  const start = Date.now();
  await ack();
  const ackTime = Date.now() - start;
  await respond({ text: `Pong!\nTime to acknowledge: ${ackTime}ms` });
});

(async () => {
  await app.start();
  console.log("bot is running!");
})();

app.command("/mybot-catfact", async ({ ack, respond }) => {
  await ack(); // ALWAYS ack first

  try {
    const response = await axios.get("https://catfact.ninja/fact");
    await respond({ text: `Cat Fact:\n${response.data.fact}` });
  } catch (err) {
    await respond({ text: "Failed to fetch a cat fact." });
  }
});

app.command("/mybot-joke", async ({ ack, respond }) => {
  await ack(); // ALWAYS ack first

  try {
    const response = await axios.get(
      "https://v2.jokeapi.dev/joke/Any?type=twopart"
    );
    await respond({
      text: `${response.data.setup}\n\n${response.data.delivery}`
    });
  } catch (err) {
    await respond({ text: "Failed to fetch a joke." });
  }
});
