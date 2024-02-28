# slack_notifier

A script that notifies Slack on a regular basis (hourly, daily, or weekly) from Fly.io.

It uses [Bun](https://bun.sh/) (a Node.js alternative), because Bun can run TypeScript without transpilation, and the startup time for scripts is faster than Node.

## Run Locally

- Install [Bun](https://bun.sh/).
- Type `bun install` to install the dependencies.
- Create a Slack App that [can receive incoming webhooks](https://api.slack.com/messaging/webhooks), and connect a webhook URL to a specific Slack channel.
- Create an environment variable named `SLACK_WEBHOOK_URL` that contains your URL (e.g., `export SLACK_WEBHOOK_URL=https://...`).
- Run the script with `bun start`.

## Deployment

Deploy this on Fly.io.

- Read about [scheduled machines](https://community.fly.io/t/new-feature-scheduled-machines/7398).
- Sign up for a Fly.io account.
- Install [flyctl](https://fly.io/docs/hands-on/install-flyctl/).
- Run `flyctl launch`.
- To redeploy, run `fly deploy`.
