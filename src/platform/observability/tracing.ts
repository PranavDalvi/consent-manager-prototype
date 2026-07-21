import { NodeSDK } from "@opentelemetry/sdk-node";
import { getNodeAutoInstrumentations } from "@opentelemetry/auto-instrumentations-node";

let sdk: NodeSDK | null = null;

export function initTracing(): void {
  if (process.env.ENABLE_OTEL === "false") {
    return;
  }

  try {
    sdk = new NodeSDK({
      instrumentations: [
        getNodeAutoInstrumentations({
          "@opentelemetry/instrumentation-fs": { enabled: false },
        }),
      ],
    });

    sdk.start();
    console.log("[OpenTelemetry] Instrumentation initialized successfully.");
  } catch (error) {
    console.error("[OpenTelemetry] Failed to initialize tracing:", error);
  }
}

export async function shutdownTracing(): Promise<void> {
  if (sdk) {
    await sdk.shutdown();
  }
}
