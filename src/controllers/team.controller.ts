import { Request, Response, NextFunction } from "express";
import {
  inviteUserSchema,
  acceptInviteSchema,
  updateMemberStatusSchema,
} from "../validators/team.validator";
import {
  getTeamMembers,
  getPendingInvitations,
  createInvitation,
  resendInvitation,
  revokeInvitation,
  getInvitationDetailsPublic,
  acceptInvitation,
  updateMemberStatus,
  removeMember,
} from "../services/team.service";
import { setRefreshTokenCookie } from "../services/jwt.service";

export async function getMembersHandler(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const tenantId = req.auth?.tenantId;
    if (!tenantId) {
      res.status(401).json({ success: false, message: "Tenant context missing" });
      return;
    }

    const members = await getTeamMembers(tenantId);
    res.json({ success: true, data: members });
  } catch (error) {
    next(error);
  }
}

export async function getInvitationsHandler(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const tenantId = req.auth?.tenantId;
    if (!tenantId) {
      res.status(401).json({ success: false, message: "Tenant context missing" });
      return;
    }

    const invitations = await getPendingInvitations(tenantId);
    res.json({ success: true, data: invitations });
  } catch (error) {
    next(error);
  }
}

export async function inviteUserHandler(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const tenantId = req.auth?.tenantId;
    const userId = req.auth?.userId;
    if (!tenantId || !userId) {
      res.status(401).json({ success: false, message: "User context missing" });
      return;
    }

    const input = inviteUserSchema.parse(req.body);
    const result = await createInvitation(tenantId, userId, input);

    res.status(201).json({
      success: true,
      message: "Invitation issued successfully",
      invitation: result.invitation,
      devInviteToken: result.inviteToken,
      devInviteLink: result.inviteLink,
    });
  } catch (error) {
    next(error);
  }
}

export async function resendInvitationHandler(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const tenantId = req.auth?.tenantId;
    const userId = req.auth?.userId;
    const inviteId = req.params.inviteId as string;

    if (!tenantId || !userId || !inviteId) {
      res.status(400).json({ success: false, message: "Invite ID required" });
      return;
    }

    const result = await resendInvitation(tenantId, inviteId, userId);

    res.json({
      success: true,
      message: "Invitation resent successfully",
      invitation: result.invitation,
      devInviteToken: result.inviteToken,
      devInviteLink: result.inviteLink,
    });
  } catch (error) {
    next(error);
  }
}

export async function revokeInvitationHandler(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const tenantId = req.auth?.tenantId;
    const userId = req.auth?.userId;
    const inviteId = req.params.inviteId as string;

    if (!tenantId || !userId || !inviteId) {
      res.status(400).json({ success: false, message: "Invite ID required" });
      return;
    }

    await revokeInvitation(tenantId, inviteId, userId);

    res.json({
      success: true,
      message: "Invitation revoked successfully",
    });
  } catch (error) {
    next(error);
  }
}

export async function getPublicInvitationHandler(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const token = req.params.token as string;
    if (!token) {
      res.status(400).json({ success: false, message: "Invitation token required" });
      return;
    }

    const details = await getInvitationDetailsPublic(token);
    res.json({ success: true, data: details });
  } catch (error) {
    next(error);
  }
}

export async function acceptInviteHandler(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const input = acceptInviteSchema.parse(req.body);
    const meta = { ipAddress: req.ip, userAgent: req.get("user-agent") };

    const result = await acceptInvitation(input, meta);
    setRefreshTokenCookie(res, result.refreshToken);

    res.status(201).json({
      success: true,
      message: "Account created and invitation accepted successfully",
      accessToken: result.accessToken,
      user: result.user,
    });
  } catch (error) {
    next(error);
  }
}

export async function updateMemberStatusHandler(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const tenantId = req.auth?.tenantId;
    const actionById = req.auth?.userId;
    const userId = req.params.userId as string;

    if (!tenantId || !actionById || !userId) {
      res.status(400).json({ success: false, message: "User ID required" });
      return;
    }

    const input = updateMemberStatusSchema.parse(req.body);
    const updated = await updateMemberStatus(tenantId, userId, input.isActive, actionById);

    res.json({
      success: true,
      message: `Team member ${input.isActive ? "activated" : "disabled"} successfully`,
      data: updated,
    });
  } catch (error) {
    next(error);
  }
}

export async function removeMemberHandler(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const tenantId = req.auth?.tenantId;
    const actionById = req.auth?.userId;
    const userId = req.params.userId as string;

    if (!tenantId || !actionById || !userId) {
      res.status(400).json({ success: false, message: "User ID required" });
      return;
    }

    await removeMember(tenantId, userId, actionById);

    res.json({
      success: true,
      message: "Team member removed successfully",
    });
  } catch (error) {
    next(error);
  }
}
