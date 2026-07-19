import { createWebhookDeliveryWorker } from "./workers/webhook.worker";
import { recoverPendingInternalEvents } from "./events/internal-event.publisher";

async function main(): Promise<void> {
  await recoverPendingInternalEvents();
  createWebhookDeliveryWorker();
  console.log("Webhook delivery worker running");
}

void main();