# 6. Request Flow

## Overview

This document explains how requests travel through the Consent Manager application, from the moment a client sends an HTTP request until a response is returned.

The project follows a layered architecture that separates routing, validation, request handling, business logic, and database operations.

A typical request passes through the following layers:

```text
Client
   │
   ▼
Express Route
   │
   ▼
Validation Middleware
   │
   ▼
Controller
   │
   ▼
Service
   │
   ▼
Prisma ORM
   │
   ▼
PostgreSQL
   │
   ▼
Response
```

---

# General Request Lifecycle

Every incoming request follows the same execution path.

```text
HTTP Request

↓

Express Router

↓

Validation Middleware

↓

Controller

↓

Business Service

↓

Database

↓

HTTP Response
```

Each layer has a single responsibility.

---

# Layer Responsibilities

## Client

The client can be:

- Web Application
- Mobile Application
- Backend Service
- API Gateway
- Third-party Application

The client communicates with the Consent Manager using REST APIs.

Example

```http
POST /api/consents
```

---

## Express Router

The router determines which controller should process the request.

Example

```typescript
router.post(
    "/",
    validate(grantConsentSchema),
    asyncHandler(grantConsentHandler)
);
```

Responsibilities

- Match request path
- Execute middleware
- Forward request to controller

---

## Validation Middleware

Before reaching the controller, every request is validated using Zod schemas.

Example

```typescript
validate(grantConsentSchema)
```

Validation ensures:

- Required fields exist
- Data types are correct
- Invalid requests are rejected

Example

Incoming Request

```json
{
    "tenantId": "",
    "userId": "user-123"
}
```

Validation Result

```text
400 Bad Request
```

Controller is never executed.

---

## Controller

Controllers coordinate application flow.

Responsibilities

- Read validated request data
- Call appropriate service
- Return HTTP response

Controllers do **not** implement business logic.

Example

```text
Request

↓

grantConsentHandler()

↓

grantConsent()

↓

Response
```

---

## Service Layer

The service layer contains all business logic.

Examples

- Grant Consent
- Revoke Consent
- Check Consent
- Fetch Audit Logs

Services interact with the database using Prisma.

---

## Prisma ORM

Prisma converts TypeScript queries into SQL.

Example

```typescript
await prisma.consent.findMany({
    where: {
        tenantId,
        userId
    }
});
```

Equivalent SQL

```sql
SELECT *
FROM Consent
WHERE tenantId = ?
AND userId = ?;
```

---

## PostgreSQL

PostgreSQL stores persistent application data.

Current tables

- Consent
- AuditLog

---

# Grant Consent Flow

Endpoint

```http
POST /api/consents
```

Execution Flow

```text
Client

↓

POST /api/consents

↓

Express Route

↓

Validation Middleware

↓

grantConsentHandler()

↓

grantConsent()

↓

Prisma Transaction

↓

Insert Consent

↓

Insert Audit Log

↓

Commit Transaction

↓

HTTP 201 Created
```

Sequence Diagram

```text
Client
   │
   │ POST /api/consents
   ▼
Route
   │
   ▼
Validation
   │
   ▼
Controller
   │
   ▼
Service
   │
   ▼
Prisma Transaction
   │
   ├────────► Consent Table
   │
   └────────► AuditLog Table
   │
   ▼
Response
```

---

# Check Consent Flow

Endpoint

```http
GET /api/consents/check
```

Execution Flow

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

Find Consent

↓

Return Boolean

↓

HTTP 200 OK
```

Sequence Diagram

```text
Client
   │
   ▼
Controller
   │
   ▼
Service
   │
   ▼
Prisma
   │
   ▼
Consent Table

↓

Boolean Result

↓

Response
```

Example Response

```json
{
    "success": true,
    "data": {
        "hasConsent": true
    }
}
```

---

# Fetch User Consents Flow

Endpoint

```http
GET /api/consents/{tenantId}/user/{userId}
```

Execution Flow

```text
Client

↓

Validation

↓

Controller

↓

Service

↓

SELECT Consent

↓

Response
```

SQL Conceptually

```sql
SELECT *
FROM Consent
WHERE tenantId = ?
AND userId = ?
AND status = 'GRANTED';
```

---

# Revoke Consent Flow

Endpoint

```http
POST /api/consents/revoke/{consentId}
```

Execution Flow

```text
Client

↓

Validation

↓

Controller

↓

revokeConsent()

↓

Begin Transaction

↓

Update Consent

↓

Insert AuditLog

↓

Commit

↓

Response
```

Sequence Diagram

```text
Client
   │
   ▼
Controller
   │
   ▼
Service
   │
   ▼
Transaction

   │
   ├──────► Update Consent
   │
   └──────► Insert AuditLog
   │
   ▼

Commit

↓

Response
```

---

# Fetch Audit Logs Flow

Endpoint

```http
GET /api/audit
```

Execution Flow

```text
Client

↓

Validation

↓

Controller

↓

fetchAuditLogs()

↓

AuditLog Table

↓

Response
```

Conceptual SQL

```sql
SELECT *
FROM AuditLog
WHERE tenantId = ?
AND userId = ?
ORDER BY createdAt DESC;
```

---

# Error Handling Flow

Unexpected errors are handled centrally by the error middleware.

```text
Request

↓

Controller

↓

Service

↓

Exception

↓

Error Middleware

↓

HTTP Response
```

Example

```json
{
    "success": false,
    "message": "Internal Server Error"
}
```

---

# Validation Failure Flow

If validation fails, the request never reaches the controller.

```text
Request

↓

Validation Middleware

↓

Validation Failed

↓

400 Bad Request
```

Example

```json
{
    "success": false,
    "message": "Validation failed"
}
```

---

# Database Transaction Flow

Some operations require multiple database updates.

Example

Grant Consent

```text
BEGIN TRANSACTION

↓

Insert Consent

↓

Insert AuditLog

↓

COMMIT
```

If any step fails

```text
BEGIN

↓

Insert Consent

↓

Insert AuditLog

↓

Error

↓

ROLLBACK
```

This guarantees database consistency.

---

# Request Flow Summary

| Endpoint | Validation | Transaction | Audit Log |
|----------|------------|-------------|-----------|
| Grant Consent | Yes | Yes | Yes |
| Check Consent | Yes | No | No |
| Fetch User Consents | Yes | No | No |
| Revoke Consent | Yes | Yes | Yes |
| Fetch Audit Logs | Yes | No | No |

---

# End-to-End Example

The complete lifecycle of a user's consent is illustrated below.

```text
User Grants Consent

        │

        ▼

POST /api/consents

        │

        ▼

Consent Stored

        │

        ▼

Audit Log Created

        │

        ▼

Application Verifies Consent

        │

        ▼

GET /api/consents/check

        │

        ▼

Allowed = true

        │

        ▼

User Revokes Consent

        │

        ▼

POST /api/consents/revoke/{id}

        │

        ▼

Consent Updated

        │

        ▼

Audit Log Created

        │

        ▼

Application Verifies Consent Again

        │

        ▼

Allowed = false

        │

        ▼

Administrator Views Audit History

        │

        ▼

GET /api/audit
```

---

# Design Benefits

This request flow provides several advantages:

- Clear separation of responsibilities
- Centralized validation
- Consistent error handling
- Transactional database operations
- Reusable business logic
- Easy testing
- Scalable architecture
- Auditability for compliance

As the project evolves, additional middleware such as authentication, API key validation, rate limiting, and consent enforcement can be introduced into the request pipeline without changing the existing service or database layers.