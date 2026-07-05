# 2. System Architecture

## Overview

The Consent Manager Prototype follows a layered architecture that separates concerns between HTTP request handling, business logic, validation, and database access.

This architecture improves maintainability, scalability, and testability by ensuring each layer has a single responsibility.

The system is designed to act as a centralized consent management service that can be integrated with multiple client applications.

---

# High-Level Architecture

```text
                    Client Application
                            │
                            │ HTTP Request
                            ▼
                  Express REST API Server
                            │
        ┌───────────────────┴───────────────────┐
        │                                       │
        ▼                                       ▼
 Validation Middleware                  Error Middleware
        │
        ▼
    Express Router
        │
        ▼
    Controller Layer
        │
        ▼
     Service Layer
        │
        ▼
      Prisma ORM
        │
        ▼
   PostgreSQL Database
```

---

# Architectural Principles

The project follows several architectural principles.

- Separation of concerns
- Thin controllers
- Service-oriented business logic
- Centralized validation
- Centralized error handling
- Database abstraction through Prisma
- Multi-tenant design

Each layer has a clearly defined responsibility.

---

# Request Lifecycle

Every incoming request passes through the following stages.

```text
Client

↓

Express Router

↓

Validation Middleware

↓

Controller

↓

Service

↓

Prisma

↓

PostgreSQL

↓

Response
```

---

# Layer Responsibilities

## 1. Routes

Location

```text
src/routes/
```

Purpose

Routes define the HTTP endpoints exposed by the application.

Responsibilities:

- URL mapping
- Request validation middleware
- Async error wrapper
- Controller selection

Example

```text
POST /api/consents

↓

grantConsentHandler()
```

Routes should never contain business logic.

---

## 2. Validation Middleware

Location

```text
src/middlewares/
```

Purpose

Validate incoming requests before they reach the controller.

Validation is implemented using Zod schemas.

Responsibilities:

- Validate request body
- Validate query parameters
- Validate route parameters
- Return HTTP 400 for invalid requests

Example

```text
Incoming Request

↓

validate(grantConsentSchema)

↓

Valid Request

↓

Controller
```

---

## 3. Controllers

Location

```text
src/controllers/
```

Purpose

Controllers receive validated requests and coordinate application flow.

Responsibilities:

- Read request data
- Invoke service layer
- Return HTTP response

Controllers intentionally avoid business logic.

Example

```text
Controller

↓

grantConsent()

↓

Response
```

---

## 4. Service Layer

Location

```text
src/services/
```

Purpose

The service layer contains all business logic.

Responsibilities:

- Grant consent
- Revoke consent
- Verify consent
- Fetch user consent
- Record audit logs

The service layer is completely independent of Express.

Example

```text
grantConsent()

↓

Prisma Transaction

↓

Database
```

---

## 5. Database Layer

Location

```text
src/db/
```

Purpose

Provide a singleton Prisma client.

Responsibilities

- Database connection
- Query execution
- Transaction management

Example

```text
Prisma Client

↓

PostgreSQL
```

---

## 6. PostgreSQL

PostgreSQL is the persistent storage layer.

Current tables

- Consent
- AuditLog

Future tables

- Tenant
- ApiKey
- User
- Policy
- ConsentReceipt

---

# Component Interaction

Grant Consent Flow

```text
Client

↓

POST /api/consents

↓

Validation Middleware

↓

grantConsentHandler()

↓

grantConsent()

↓

Prisma Transaction

↓

Consent Table

+

AuditLog Table

↓

Response
```

---

Check Consent Flow

```text
Client

↓

GET /api/consents/check

↓

Validation Middleware

↓

checkConsentHandler()

↓

checkConsent()

↓

Consent Table

↓

Boolean Result

↓

Response
```

---

Revoke Consent Flow

```text
Client

↓

POST /api/consents/revoke

↓

Validation Middleware

↓

revokeConsentHandler()

↓

revokeConsent()

↓

Update Consent

+

Insert Audit Log

↓

Response
```

---

Fetch Audit Logs

```text
Client

↓

GET /api/audit

↓

Validation Middleware

↓

fetchAuditLogsHandler()

↓

fetchAuditLogs()

↓

AuditLog Table

↓

Response
```

---

# Project Structure

```text
src/

├── controllers/
│
├── services/
│
├── routes/
│
├── middlewares/
│
├── validators/
│
├── db/
│
├── docs/
│
├── utils/
│
├── app.ts
│
└── server.ts
```

---

# Why Layered Architecture?

Without layers

```text
Route

↓

Database
```

Problems

- Difficult to test
- Duplicated logic
- Large route files
- Poor maintainability

With layers

```text
Route

↓

Controller

↓

Service

↓

Database
```

Benefits

- Easier testing
- Better code organization
- Reusable business logic
- Clear separation of responsibilities

---

# Error Handling

The application uses centralized error handling.

```text
Request

↓

Controller

↓

throw AppError()

↓

Error Middleware

↓

HTTP Response
```

Benefits

- Consistent error responses
- Reduced boilerplate
- Easier maintenance

---

# Validation Strategy

Validation occurs before controllers execute.

```text
Request

↓

Zod Schema

↓

Validation Middleware

↓

Controller
```

Benefits

- Invalid requests rejected early
- Cleaner controllers
- Strong input validation

---

# Database Transactions

Certain operations require multiple database updates.

Example

Grant Consent

```text
Insert Consent

+

Insert Audit Log
```

These operations execute inside a single Prisma transaction.

```text
BEGIN

↓

Insert Consent

↓

Insert Audit Log

↓

COMMIT
```

If any operation fails

```text
ROLLBACK
```

This guarantees database consistency.

---

# Multi-Tenant Architecture

Every record belongs to a tenant.

```text
Tenant

↓

User

↓

Purpose

↓

Consent
```

Example

```text
Tenant A

user-123

marketing

GRANTED
```

```text
Tenant B

user-123

marketing

REVOKED
```

Although both tenants use the same user identifier, their consent records remain completely isolated.

---

# Current Limitations

The current prototype intentionally excludes:

- Authentication
- Authorization
- API Keys
- SDK
- Web Dashboard
- Policy Engine
- Consent Enforcement Middleware
- Event Bus
- Webhooks
- Caching
- Monitoring

These components are planned for future iterations as the project evolves from a prototype into a production-ready consent management platform.vs