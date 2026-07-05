# 5. Project Structure

## Overview

The Consent Manager Prototype follows a feature-based layered architecture that separates routing, request handling, business logic, validation, middleware, and database access into dedicated modules.

Each directory has a single responsibility, making the project easier to understand, maintain, and extend.

---

# Project Structure

```text
consent-manager-prototype/

├── prisma/
│   ├── schema.prisma
│   ├── migrations/
│   └── prisma.config.ts
│
├── src/
│   ├── controllers/
│   ├── db/
│   ├── docs/
│   ├── generated/
│   ├── middlewares/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   ├── validators/
│   ├── app.ts
│   └── server.ts
│
├── docs/
│
├── .env
├── package.json
├── tsconfig.json
└── README.md
```

---

# Root Directory

The root directory contains the project configuration and documentation.

```text
README.md
```

Project overview and setup instructions.

---

```text
package.json
```

Node.js project configuration.

Contains:

- Dependencies
- Scripts
- Project metadata

Example

```json
"scripts": {
    "dev": "ts-node-dev --respawn --transpile-only src/server.ts",
    "build": "tsc",
    "start": "node dist/server.js"
}
```

---

```text
tsconfig.json
```

TypeScript compiler configuration.

Defines:

- Module system
- Target version
- Strict mode
- Output directory

---

```text
.env
```

Environment variables.

Example

```text
DATABASE_URL=postgresql://...
PORT=3000
```

---

# Prisma

Location

```text
prisma/
```

Contains all database-related configuration.

```text
prisma/

├── schema.prisma
├── migrations/
└── prisma.config.ts
```

---

## schema.prisma

Defines

- Database models
- Enums
- Relationships
- Indexes
- Constraints

Example

```text
Consent

AuditLog

ConsentStatus
```

---

## migrations/

Contains generated migration history.

Each migration represents a database schema change.

Example

```text
20260605_init
```

---

## prisma.config.ts

Prisma configuration file.

Contains

- Schema location
- Database configuration
- Migration settings

---

# Source Code

All application code resides inside

```text
src/
```

---

# Controllers

Location

```text
src/controllers/
```

Purpose

Controllers handle incoming HTTP requests.

Responsibilities

- Receive request
- Extract request data
- Call services
- Return HTTP response

Controllers should **not** contain business logic.

Current controllers

```text
consent.controller.ts

audit.controller.ts
```

---

# Services

Location

```text
src/services/
```

Purpose

Contains the application's business logic.

Responsibilities

- Grant consent
- Revoke consent
- Verify consent
- Fetch audit logs
- Execute database transactions

Current services

```text
consent.service.ts

auditLogs.service.ts
```

---

# Routes

Location

```text
src/routes/
```

Purpose

Maps HTTP endpoints to controllers.

Responsibilities

- Register routes
- Apply middleware
- Apply validation
- Apply async wrapper

Current routes

```text
consent.routes.ts

audit.routes.ts
```

---

# Middlewares

Location

```text
src/middlewares/
```

Purpose

Reusable request processing logic.

Current middleware

```text
error.middleware.ts
```

Centralized error handling.

---

```text
validate.middleware.ts
```

Zod request validation.

---

Future middleware

```text
consent.middleware.ts
```

Consent enforcement middleware.

---

```text
auth.middleware.ts
```

Authentication.

---

```text
tenant.middleware.ts
```

Tenant resolution.

---

# Validators

Location

```text
src/validators/
```

Purpose

Contains Zod schemas.

Responsibilities

- Validate request body
- Validate query parameters
- Validate route parameters

Current validators

```text
consent.validator.ts
```

---

# Database

Location

```text
src/db/
```

Purpose

Contains the Prisma client singleton.

Example

```text
prisma.ts
```

Responsibilities

- Database connection
- Prisma initialization
- Shared database client

---

# Utilities

Location

```text
src/utils/
```

Purpose

Reusable helper functions.

Current utilities

```text
app-error.ts

async-handler.ts
```

---

## app-error.ts

Custom application error class.

Used throughout the project to produce consistent HTTP responses.

Example

```text
throw new AppError(
    400,
    "Validation failed"
)
```

---

## async-handler.ts

Removes repetitive try/catch blocks.

Example

```typescript
router.post(
    "/",
    asyncHandler(grantConsentHandler)
)
```

---

# Generated

Location

```text
src/generated/
```

Contains Prisma generated files.

This directory is automatically generated.

Developers should **not** modify these files manually.

---

# API Documentation

Location

```text
src/docs/
```

Contains Swagger/OpenAPI configuration.

Example

```text
swagger.ts
```

Responsibilities

- API metadata
- Server configuration
- Swagger generation

---

# Application Entry Point

## app.ts

Creates and configures the Express application.

Responsibilities

- Initialize Express
- Register middleware
- Register routes
- Register Swagger
- Register error middleware

Example

```text
Express

↓

Middlewares

↓

Routes

↓

Swagger

↓

Error Handler
```

---

## server.ts

Starts the HTTP server.

Responsibilities

- Load environment variables
- Start Express
- Listen on configured port

Example

```typescript
app.listen(PORT)
```

---

# Request Flow

A request travels through the following layers.

```text
Client

↓

Route

↓

Validation Middleware

↓

Controller

↓

Service

↓

Prisma Client

↓

PostgreSQL

↓

Response
```

---

# Dependency Direction

The project follows a one-way dependency flow.

```text
Routes

↓

Controllers

↓

Services

↓

Database

↓

PostgreSQL
```

Higher layers never depend on lower-level implementation details.

For example

Controllers know about services.

Services know about Prisma.

Prisma knows about PostgreSQL.

Controllers never directly execute SQL queries.

---

# Separation of Responsibilities

| Directory | Responsibility |
|------------|----------------|
| controllers | HTTP request handling |
| services | Business logic |
| routes | API endpoint registration |
| middlewares | Request processing |
| validators | Request validation |
| db | Database connection |
| utils | Shared utilities |
| docs | Swagger configuration |
| prisma | Database schema and migrations |

---

# Why This Structure?

The project structure was designed to provide:

- Clear separation of concerns
- Reusable business logic
- Easy testing
- Scalability
- Maintainability
- Readable project organization

As new features are added—such as authentication, API keys, consent enforcement, or webhooks—they can be introduced as new modules without requiring major changes to the existing architecture.

This organization also makes the project approachable for new contributors, as each directory has a well-defined purpose and minimal overlap with others.