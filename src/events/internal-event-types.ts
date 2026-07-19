export const supportedInternalEventTypes = [
  "CONSENT_GRANTED",
  "CONSENT_REVOKED",
  "POLICY_CREATED",
  "POLICY_ARCHIVED",
  "POLICY_VERSION_CREATED",
  "API_KEY_CREATED",
  "API_KEY_REVOKED",
  "API_KEY_ROTATED",
] as const;

export type InternalEventType = (typeof supportedInternalEventTypes)[number];

export function isSupportedInternalEventType(value: string): value is InternalEventType {
  return (supportedInternalEventTypes as readonly string[]).includes(value);
}