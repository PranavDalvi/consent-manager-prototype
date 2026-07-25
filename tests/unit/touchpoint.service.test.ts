import { beforeEach, describe, expect, it, vi } from "vitest";

const mocks = vi.hoisted(() => ({
  touchpointFindUnique: vi.fn(),
  touchpointFindFirst: vi.fn(),
  touchpointFindMany: vi.fn(),
  touchpointCreate: vi.fn(),
  touchpointUpdate: vi.fn(),
  touchpointDelete: vi.fn(),
  touchpointPolicyDeleteMany: vi.fn(),
  consentFindMany: vi.fn(),
}));

vi.mock("../../src/db/prisma", () => ({
  prisma: {
    touchpoint: {
      findUnique: mocks.touchpointFindUnique,
      findFirst: mocks.touchpointFindFirst,
      findMany: mocks.touchpointFindMany,
      create: mocks.touchpointCreate,
      update: mocks.touchpointUpdate,
      delete: mocks.touchpointDelete,
    },
    touchpointPolicy: {
      deleteMany: mocks.touchpointPolicyDeleteMany,
    },
    consent: {
      findMany: mocks.consentFindMany,
    },
  },
}));

import {
  createTouchpoint,
  getTouchpoint,
  getTouchpointConsentConfig,
  listTouchpoints,
} from "../../src/services/touchpoint.service";

describe("touchpoint service", () => {
  beforeEach(() => {
    mocks.touchpointFindUnique.mockReset();
    mocks.touchpointFindFirst.mockReset();
    mocks.touchpointFindMany.mockReset();
    mocks.touchpointCreate.mockReset();
    mocks.touchpointUpdate.mockReset();
    mocks.touchpointDelete.mockReset();
    mocks.touchpointPolicyDeleteMany.mockReset();
    mocks.consentFindMany.mockReset();
  });

  it("creates a touchpoint when slug does not exist", async () => {
    mocks.touchpointFindUnique.mockResolvedValue(null);
    mocks.touchpointCreate.mockResolvedValue({
      id: "tp-1",
      tenantId: "tenant-1",
      name: "Onboarding",
      slug: "onboarding",
      policies: [],
    });

    const result = await createTouchpoint({
      tenantId: "tenant-1",
      name: "Onboarding",
      slug: "onboarding",
    });

    expect(mocks.touchpointCreate).toHaveBeenCalled();
    expect(result.id).toBe("tp-1");
  });

  it("throws error if touchpoint slug already exists", async () => {
    mocks.touchpointFindUnique.mockResolvedValue({ id: "tp-1", slug: "onboarding" });

    await expect(
      createTouchpoint({
        tenantId: "tenant-1",
        name: "Onboarding",
        slug: "onboarding",
      })
    ).rejects.toThrow("Touchpoint with slug 'onboarding' already exists");
  });

  it("lists touchpoints for a tenant", async () => {
    mocks.touchpointFindMany.mockResolvedValue([
      { id: "tp-1", name: "Login" },
      { id: "tp-2", name: "Checkout" },
    ]);

    const result = await listTouchpoints("tenant-1");
    expect(result).toHaveLength(2);
    expect(mocks.touchpointFindMany).toHaveBeenCalledWith(
      expect.objectContaining({ where: { tenantId: "tenant-1" } })
    );
  });

  it("resolves touchpoint consent config with user consent status", async () => {
    mocks.touchpointFindUnique.mockResolvedValue({
      id: "tp-1",
      tenantId: "tenant-1",
      name: "Onboarding Journey",
      slug: "onboarding_journey",
      isActive: true,
      policies: [
        {
          id: "tp-pol-1",
          isRequired: true,
          displayOrder: 0,
          customLabel: "Accept Terms",
          policy: {
            id: "pol-1",
            title: "TnC",
            purpose: "terms_of_service",
            version: 1,
            content: "Terms content",
          },
        },
        {
          id: "tp-pol-2",
          isRequired: false,
          displayOrder: 1,
          customLabel: "Subscribe to Newsletter",
          policy: {
            id: "pol-2",
            title: "Privacy & Marketing",
            purpose: "marketing_email",
            version: 1,
            content: "Marketing content",
          },
        },
      ],
    });

    mocks.consentFindMany.mockResolvedValue([
      { id: "c-1", purpose: "terms_of_service", status: "GRANTED" },
    ]);

    const config = await getTouchpointConsentConfig(
      "tenant-1",
      "onboarding_journey",
      "user-123"
    );

    expect(config.slug).toBe("onboarding_journey");
    expect(config.policies).toHaveLength(2);
    expect(config.policies[0].userHasConsent).toBe(true);
    expect(config.policies[1].userHasConsent).toBe(false);
  });
});
