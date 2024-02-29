import { faker } from "@faker-js/faker";

function generateRandomPhrase(): string {
    const phrase = faker.company.buzzPhrase();

    return `:robot_face: "we need to ${phrase}"`;
}

/**
 * Create the Slack message here. If you don't pass in a message, a random
 * phrase will be generated.
 *
 * If you want nicer-looking formatting, you can customize the payload with
 * Slack's block-kit-builder:
 * https://app.slack.com/block-kit-builder/T02GADJQX
 */
export function createMessagePayload(text?: string): string {
    const payload = {
        text: text || generateRandomPhrase(),
    };

    return JSON.stringify(payload);
}
