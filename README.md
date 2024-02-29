# slack_notifier

A script that notifies Slack on a regular basis (hourly, daily, or weekly). It uses [Bun](https://bun.sh/) because Bun doesn't need to transpile TypeScript, and it has a fast startup time.

This script can be run with a cron job (or similar).

## Run Locally

- If you don't have [Bun](https://bun.sh/), install it.
- Type `bun install` to install the dependencies.
- Create a Slack App that [can receive incoming webhooks](https://api.slack.com/messaging/webhooks), and connect a webhook URL to a specific Slack channel.
- Create an environment variable named `SLACK_WEBHOOK_URL` that contains your URL (e.g., `export SLACK_WEBHOOK_URL=https://...`).
- Edit the `createMessagePayload` function in the `messages.ts` file to customize your message. (See Slack's [block builder tool](https://app.slack.com/block-kit-builder/T02GADJQX) if you want formatted messages.)
- Run the script with `bun start` or `bun src/index.ts` (with a cron job or manually).
