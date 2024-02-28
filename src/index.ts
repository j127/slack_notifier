const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL || null;
if (!SLACK_WEBHOOK_URL) {
    throw new Error("SLACK_WEBHOOK_URL is not set");
}

import { createMessagePayload } from "./message";

/**
 * Sends a message to Slack.
 */
async function notifySlack(message?: string): Promise<void> {
    const payload = createMessagePayload(message);

    console.info("Sending payload to slack:", payload);

    await fetch(SLACK_WEBHOOK_URL as string, {
        method: "POST",
        body: payload,
        headers: { "Content-Type": "application/json" },
    });
}

async function main() {
    console.info("starting");
    await notifySlack(); // optionally pass in a message here or edit `message.ts`
}

main().then(() => {
    console.log("done");
    process.exit(0);
});
