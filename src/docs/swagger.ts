import swaggerJsdoc from "swagger-jsdoc";

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Consent Manager API",
      version: "1.0.0",
      description: "API documentation for the Consent Manager application",
    },
    servers: [
      {
        url: "http://localhost:3000/api",
        description: "Development server",
      },
    ],
    components: {
      securitySchemes: {
        ApiKeyAuth: {
          type: "apiKey",
          in: "header",
          name: "X-API-Key",
        },
        BearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
      schemas: {
        WebhookDeliveryPayload: {
          type: "object",
          required: ["event", "timestamp", "tenantId", "data"],
          properties: {
            event: {
              type: "string",
              example: "CONSENT_GRANTED",
            },
            timestamp: {
              type: "string",
              format: "date-time",
            },
            tenantId: {
              type: "string",
            },
            data: {
              type: "object",
              additionalProperties: true,
            },
          },
        },
        Webhook: {
          type: "object",
          properties: {
            id: { type: "string" },
            tenantId: { type: "string" },
            name: { type: "string" },
            url: { type: "string" },
            events: {
              type: "array",
              items: { type: "string" },
            },
            isActive: { type: "boolean" },
            createdAt: { type: "string", format: "date-time" },
            updatedAt: { type: "string", format: "date-time" },
          },
        },
      },
    },
  },
  apis: ["./src/routes/*.ts", "./src/platform/**/*.ts"],
};

const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;