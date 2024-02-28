const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL || null;
if (!SLACK_WEBHOOK_URL) {
    throw new Error("SLACK_WEBHOOK_URL is not set");
}

async function notifySlack(message: string): Promise<void> {
    fetch(SLACK_WEBHOOK_URL as string, {
        method: "POST",
        body: JSON.stringify({ text: message }),
        headers: { "Content-Type": "application/json" },
    });
}

async function main() {
    await notifySlack("ping");
}

main().then(() => {
    console.log("done");
    process.exit(0);
});