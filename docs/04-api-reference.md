# 4. API Reference

## Overview

The Consent Manager exposes a RESTful API that enables client applications to manage and verify user consent.

All API responses follow a common response format.

Success Response

```json
{
    "success": true,
    "data": {}
}
```

Error Response

```json
{
    "success": false,
    "message": "Error description"
}
```

---

# Base URL

```
http://localhost:3000/api
```

---

# API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/consents` | Grant user consent |
| POST | `/consents/revoke/:consentId` | Revoke user consent |
| GET | `/consents/check` | Verify whether consent exists |
| GET | `/consents/user/:userId` | Fetch all user consents |
| GET | `/audit` | Fetch audit logs |

---

# 1. Grant Consent

## Endpoint

```http
POST /api/consents
```

---

## Description

Creates or updates a user's consent for a specific purpose and records the action in the audit log.

---

## Request Body

```json
{
    "tenantId": "amazon",
    "userId": "user-123",
    "purpose": "marketing",
    "policyVersion": "v1"
}
```

---

## Request Parameters

| Field | Type | Required | Description |
|--------|------|----------|-------------|
| tenantId | string | Yes | Tenant identifier |
| userId | string | Yes | User identifier |
| purpose | string | Yes | Consent purpose |
| policyVersion | string | Yes | Accepted policy version |

---

## Success Response

**HTTP 201 Created**

```json
{
    "success": true,
    "data": {
        "id": "cmq0wjdg10000j9pp60waqi1k",
        "tenantId": "amazon",
        "userId": "user-123",
        "purpose": "marketing",
        "status": "GRANTED",
        "policyVersion": "v1",
        "createdAt": "2026-06-05T12:30:02.449Z"
    }
}
```

---

## Error Responses

### Missing Request Fields

**HTTP 400**

```json
{
    "success": false,
    "message": "Validation failed"
}
```

---

# 2. Check Consent

## Endpoint

```http
GET /api/consents/check
```

---

## Description

Checks whether a user currently has active consent for a specific purpose.

---

## Query Parameters

| Parameter | Required | Description |
|-----------|----------|-------------|
| tenantId | Yes | Tenant identifier |
| userId | Yes | User identifier |
| purpose | Yes | Consent purpose |

---

## Example Request

```http
GET /api/consents/check?tenantId=amazon&userId=user-123&purpose=marketing
```

---

## Success Response

```json
{
    "success": true,
    "data": {
        "hasConsent": true
    }
}
```

---

## Possible Responses

When consent exists

```json
{
    "success": true,
    "data": {
        "hasConsent": true
    }
}
```

When consent has been revoked

```json
{
    "success": true,
    "data": {
        "hasConsent": false
    }
}
```

---

# 3. Fetch User Consents

## Endpoint

```http
GET /api/consents/user/:userId
```

---

## Description

Returns all currently active consent records for a user within a tenant.

---

## Path Parameters

| Parameter | Description |
|-----------|-------------|
| tenantId | Tenant identifier |
| userId | User identifier |

---

## Example Request

```http
GET /api/consents/amazon/user/user-123
```

---

## Success Response

```json
{
    "success": true,
    "data": [
        {
            "id": "cmq0wjdg10000j9pp60waqi1k",
            "tenantId": "amazon",
            "userId": "user-123",
            "purpose": "marketing",
            "status": "GRANTED",
            "policyVersion": "v1",
            "createdAt": "2026-06-05T12:30:02.449Z"
        }
    ]
}
```

---

# 4. Revoke Consent

## Endpoint

```http
POST /api/consents/revoke/:consentId
```

---

## Description

Revokes an existing consent and creates a corresponding audit log entry.

---

## Path Parameters

| Parameter | Description |
|-----------|-------------|
| consentId | Consent identifier |

---

## Example Request

```http
POST /api/consents/revoke/cmq0wjdg10000j9pp60waqi1k
```

---

## Success Response

```json
{
    "success": true,
    "data": {
        "id": "cmq0wjdg10000j9pp60waqi1k",
        "tenantId": "amazon",
        "userId": "user-123",
        "purpose": "marketing",
        "status": "REVOKED",
        "policyVersion": "v1",
        "createdAt": "2026-06-05T12:30:02.449Z"
    }
}
```

---

## Notes

Revoking consent does **not** delete the record.

Instead, the consent status changes from:

```text
GRANTED
```

to

```text
REVOKED
```

An audit record is also created.

---

# 5. Fetch Audit Logs

## Endpoint

```http
GET /api/audit
```

---

## Description

Returns all audit events for a user within a tenant ordered by newest first.

---

## Query Parameters

| Parameter | Required | Description |
|-----------|----------|-------------|
| tenantId | Yes | Tenant identifier |
| userId | Yes | User identifier |

---

## Example Request

```http
GET /api/audit?tenantId=amazon&userId=user-123
```

---

## Success Response

```json
{
    "success": true,
    "data": [
        {
            "id": "cmq0wrjib0000ozpp8d1hzdjf",
            "tenantId": "amazon",
            "userId": "user-123",
            "action": "CONSENT_REVOKED",
            "purpose": "marketing",
            "metadata": null,
            "createdAt": "2026-06-05T12:36:23.555Z"
        },
        {
            "id": "cmq0wjdg70001j9pppmp8knns",
            "tenantId": "amazon",
            "userId": "user-123",
            "action": "CONSENT_GRANTED",
            "purpose": "marketing",
            "metadata": null,
            "createdAt": "2026-06-05T12:30:02.455Z"
        }
    ]
}
```

---

# HTTP Status Codes

| Status Code | Meaning |
|-------------|---------|
| 200 | Request successful |
| 201 | Resource created successfully |
| 400 | Validation failed |
| 404 | Resource not found |
| 500 | Internal server error |

---

# API Workflow

The typical lifecycle of a user's consent is shown below.

```text
Client

│

├── POST /consents
│
▼

Consent Created

│

├── GET /consents/check
│
▼

Allowed = true

│

├── POST /consents/revoke/{consentId}
│
▼

Consent Revoked

│

├── GET /consents/check
│
▼

Allowed = false

│

└── GET /audit

▼

View Complete Audit History
```

---

# Authentication

The current prototype does **not** implement authentication or authorization.

Future versions will support:

- API Keys
- JWT Authentication
- Tenant Authentication
- Role-Based Access Control (RBAC)

---

# Versioning

Current API Version

```
v1
```

Future versions may introduce API versioning using:

```text
/api/v1/...

/api/v2/...
```

to maintain backward compatibility while evolving the platform.