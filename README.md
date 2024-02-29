# slack_notifier

A script that notifies Slack on a regular basis (hourly, daily, or weekly).

This should be run with a cron job.

## Run Locally

- Set your node version to 20. (If you use [`nvm`](https://github.com/nvm-sh/nvm) you can type `nvm use`.) Node 18 should work too, but 16 won't.
- If you don't have `yarn` installed, get it with `npm i -g yarn`.
- Type `yarn` to install the dependencies.
- Create a Slack App that [can receive incoming webhooks](https://api.slack.com/messaging/webhooks), and connect a webhook URL to a specific Slack channel.
- Create an environment variable named `SLACK_WEBHOOK_URL` that contains your URL (e.g., `export SLACK_WEBHOOK_URL=https://...`).
- Edit the `createMessagePayload` function in the `messages.ts` file to customize your message. (See Slack's [block builder tool](https://app.slack.com/block-kit-builder/T02GADJQX) if you want formatted messages.)
- Transpile the TypeScript with `yarn build`.
- Run the script with `yarn start` (with a cron job or manually).
