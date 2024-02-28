# slack_notifier

A script that notifies Slack on a regular basis (hourly, daily, or weekly) from Fly.io.

## Run Locally

- Set your node version to 20. (If you use [`nvm`](https://github.com/nvm-sh/nvm) you can type `nvm use`.)
- If you don't have `yarn` installed, get it with `npm i -g yarn`.
- Type `yarn` to install the dependencies.
- Create a Slack App that [can receive incoming webhooks](https://api.slack.com/messaging/webhooks), and connect a webhook URL to a specific Slack channel.
- Create an environment variable named `SLACK_WEBHOOK_URL` that contains your URL (e.g., `export SLACK_WEBHOOK_URL=https://...`).
- Transpile the TypeScript with `yarn build`.
- Run the script with `yarn start`.

## Deployment

Deploy this on Fly.io.

- Read about [scheduled machines](https://community.fly.io/t/new-feature-scheduled-machines/7398).
- Sign up for a Fly.io account.
- Install [flyctl](https://fly.io/docs/hands-on/install-flyctl/).
- Run `flyctl launch`.
- To redeploy, run `fly deploy`.
