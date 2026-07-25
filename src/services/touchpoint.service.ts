import { prisma } from "../db/prisma";
import { AppError } from "../utils/app-error";
import { fetchUserConsents } from "./consent.service";

export interface CreateTouchpointInput {
  tenantId: string;
  name: string;
  slug: string;
  description?: string;
  policies?: {
    policyId: string;
    isRequired?: boolean;
    displayOrder?: number;
    customLabel?: string;
  }[];
}

export interface UpdateTouchpointInput {
  name?: string;
  description?: string;
  isActive?: boolean;
  policies?: {
    policyId: string;
    isRequired?: boolean;
    displayOrder?: number;
    customLabel?: string;
  }[];
}

export async function createTouchpoint(input: CreateTouchpointInput) {
  const existing = await prisma.touchpoint.findUnique({
    where: {
      tenantId_slug: {
        tenantId: input.tenantId,
        slug: input.slug,
      },
    },
  });

  if (existing) {
    throw new AppError(400, `Touchpoint with slug '${input.slug}' already exists`);
  }

  const touchpoint = await prisma.touchpoint.create({
    data: {
      tenantId: input.tenantId,
      name: input.name,
      slug: input.slug,
      description: input.description,
      policies: input.policies
        ? {
            create: input.policies.map((p) => ({
              policyId: p.policyId,
              isRequired: p.isRequired ?? true,
              displayOrder: p.displayOrder ?? 0,
              customLabel: p.customLabel,
            })),
          }
        : undefined,
    },
    include: {
      policies: {
        include: {
          policy: true,
        },
        orderBy: {
          displayOrder: "asc",
        },
      },
    },
  });

  return touchpoint;
}

export async function listTouchpoints(tenantId: string) {
  return prisma.touchpoint.findMany({
    where: { tenantId },
    include: {
      policies: {
        include: {
          policy: true,
        },
        orderBy: {
          displayOrder: "asc",
        },
      },
    },
    orderBy: { createdAt: "desc" },
  });
}

export async function getTouchpoint(tenantId: string, touchpointIdOrSlug: string) {
  const touchpoint = await prisma.touchpoint.findFirst({
    where: {
      tenantId,
      OR: [{ id: touchpointIdOrSlug }, { slug: touchpointIdOrSlug }],
    },
    include: {
      policies: {
        include: {
          policy: true,
        },
        orderBy: {
          displayOrder: "asc",
        },
      },
    },
  });

  if (!touchpoint) {
    throw new AppError(404, "Touchpoint not found");
  }

  return touchpoint;
}

export async function updateTouchpoint(
  tenantId: string,
  touchpointId: string,
  input: UpdateTouchpointInput
) {
  const existing = await prisma.touchpoint.findFirst({
    where: { id: touchpointId, tenantId },
  });

  if (!existing) {
    throw new AppError(404, "Touchpoint not found");
  }

  // If policies array is supplied, replace all current policies
  if (input.policies) {
    await prisma.touchpointPolicy.deleteMany({
      where: { touchpointId },
    });
  }

  return prisma.touchpoint.update({
    where: { id: touchpointId },
    data: {
      name: input.name,
      description: input.description,
      isActive: input.isActive,
      policies: input.policies
        ? {
            create: input.policies.map((p) => ({
              policyId: p.policyId,
              isRequired: p.isRequired ?? true,
              displayOrder: p.displayOrder ?? 0,
              customLabel: p.customLabel,
            })),
          }
        : undefined,
    },
    include: {
      policies: {
        include: {
          policy: true,
        },
        orderBy: {
          displayOrder: "asc",
        },
      },
    },
  });
}

export async function deleteTouchpoint(tenantId: string, touchpointId: string) {
  const existing = await prisma.touchpoint.findFirst({
    where: { id: touchpointId, tenantId },
  });

  if (!existing) {
    throw new AppError(404, "Touchpoint not found");
  }

  await prisma.touchpoint.delete({
    where: { id: touchpointId },
  });

  return { success: true };
}

export async function getTouchpointConsentConfig(
  tenantId: string,
  slug: string,
  userId?: string
) {
  const touchpoint = await prisma.touchpoint.findUnique({
    where: {
      tenantId_slug: { tenantId, slug },
    },
    include: {
      policies: {
        include: {
          policy: true,
        },
        orderBy: {
          displayOrder: "asc",
        },
      },
    },
  });

  if (!touchpoint || !touchpoint.isActive) {
    throw new AppError(404, "Active touchpoint not found");
  }

  let userGrantedPurposes = new Set<string>();
  if (userId) {
    const userConsents = await fetchUserConsents(userId, tenantId);
    userGrantedPurposes = new Set(userConsents.map((c) => c.purpose));
  }

  const mappedPolicies = touchpoint.policies.map((tp) => {
    const hasGranted = userGrantedPurposes.has(tp.policy.purpose);
    return {
      touchpointPolicyId: tp.id,
      policyId: tp.policy.id,
      title: tp.policy.title,
      purpose: tp.policy.purpose,
      version: tp.policy.version,
      content: tp.policy.content,
      isRequired: tp.isRequired,
      displayOrder: tp.displayOrder,
      customLabel: tp.customLabel || tp.policy.title,
      userHasConsent: hasGranted,
    };
  });

  return {
    touchpointId: touchpoint.id,
    name: touchpoint.name,
    slug: touchpoint.slug,
    description: touchpoint.description,
    policies: mappedPolicies,
  };
}
