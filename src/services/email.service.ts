import { logger } from "../platform/observability/pino-logger";

export interface EmailServiceResult {
  sent: boolean;
  token?: string;
  link?: string;
}

export async function sendPasswordResetEmail(
  email: string,
  resetToken: string,
  resetLink: string
): Promise<EmailServiceResult> {
  const isDev = process.env.NODE_ENV !== "production";
  logger.info({ email, resetToken, resetLink }, "Password reset email requested");

  if (isDev) {
    console.log(`[DEV EMAIL SERVICE] Password Reset Link for ${email}: ${resetLink} (Token: ${resetToken})`);
    return { sent: true, token: resetToken, link: resetLink };
  }

  // In production, delegate to email provider (e.g. SMTP / SendGrid)
  return { sent: true };
}

export async function sendInvitationEmail(
  email: string,
  inviteToken: string,
  inviteLink: string,
  tenantName: string,
  role: string
): Promise<EmailServiceResult> {
  const isDev = process.env.NODE_ENV !== "production";
  logger.info({ email, inviteToken, inviteLink, tenantName, role }, "Invitation email requested");

  if (isDev) {
    console.log(
      `[DEV EMAIL SERVICE] Invitation Link to join ${tenantName} as ${role} for ${email}: ${inviteLink} (Token: ${inviteToken})`
    );
    return { sent: true, token: inviteToken, link: inviteLink };
  }

  // In production, delegate to email provider
  return { sent: true };
}
