# Client Integration Guide

## Overview

This guide explains how external services, 3rd-party integrations, and frontend clients interact with the Consent Manager API.

---

## 🔑 Key Rule: Tenant Resolution via Authentication

> **[IMPORTANT]**
> You **DO NOT** need to pass a `tenantId` in request bodies, query parameters, or custom headers. 
> 
> The Consent Manager backend automatically identifies and scopes all operations to your tenant using the authentication header provided in the HTTP request.

---

## Authentication Methods

The API supports two authentication mechanisms depending on the caller type:

### 1. Machine-to-Machine (M2M) & 3rd-Party Server Integration
For server-to-server calls (e.g., your backend checking or recording user consent), use an **API Key**.

* **Header Name**: `X-API-Key`
* **Header Value**: `cm_live_<your_api_key>`
* **Tenant Scoping**: Each API key is generated for and permanently linked to a specific tenant in the database. When the request is received, the backend inspects the key and attaches the corresponding `tenantId` to the request context.

#### Example Header
```http
X-API-Key: cm_live_2ca0ea7386d4462eccac04b08ecbf8ba5921a171968b90beb4da40b532b78b9a
```

---

### 2. User & Admin Dashboard Integration
For browser/dashboard interactions, use a **JWT Bearer Token**.

* **Header Name**: `Authorization`
* **Header Value**: `Bearer <access_token>`
* **Tenant Scoping**: The JWT payload contains the `tenantId` claims. The backend middleware decodes and verifies the token, scoping all database operations to that `tenantId`.

#### Example Header
```http
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

---

## API Endpoints Quick Reference

All endpoints automatically inherit tenant scoping from the authentication header (`X-API-Key` or `Authorization`).

### 1. Grant Consent
Create or update user consent for a specific policy.

* **Method**: `POST`
* **Path**: `/api/consents`
* **Headers**: `X-API-Key: <key>`
* **Body**:
```json
{
  "userId": "user_98765",
  "policyId": "pol_12345"
}
```
*(Notice: No `tenantId` in the body)*

---

### 2. Check Consent Status
Verify if a user currently has granted consent for a specific purpose.

* **Method**: `GET`
* **Path**: `/api/consents/check?userId=user_98765&purpose=marketing`
* **Headers**: `X-API-Key: <key>`
* **Query Parameters**:
  * `userId` (required): Target user ID
  * `purpose` (required): Consent purpose identifier (e.g. `marketing`, `analytics`)
*(Notice: No `tenantId` in query parameters)*

---

### 3. List Consents (With Query Filters & Pagination)
Filter consents by `userId`, `purpose`, or `status`.

* **Method**: `GET`
* **Path**: `/api/consents?userId=user_98765&status=GRANTED`
* **Headers**: `X-API-Key: <key>`

---

### 4. Fetch Active User Consents
Get all active (`GRANTED`) consents for a specific user.

* **Method**: `GET`
* **Path**: `/api/consents/user/user_98765`
* **Headers**: `X-API-Key: <key>`

---

### 5. Revoke Consent
Revoke a previously granted consent by consent ID.

* **Method**: `POST`
* **Path**: `/api/consents/revoke/consent_id_here`
* **Headers**: `X-API-Key: <key>`

---

## 💻 cURL Examples

Replace `http://localhost:3000` and `cm_live_YOUR_API_KEY` with your server environment details.

### 1. Grant Consent
```bash
curl -X POST http://localhost:3000/api/consents \
  -H "Content-Type: application/json" \
  -H "X-API-Key: cm_live_YOUR_API_KEY" \
  -d '{
    "userId": "user_98765",
    "policyId": "cmq0wjdg10000j9pp60waqi1k"
  }'
```

### 2. Check Consent Status
```bash
curl -X GET "http://localhost:3000/api/consents/check?userId=user_98765&purpose=marketing" \
  -H "X-API-Key: cm_live_YOUR_API_KEY"
```

### 3. List Consents for a User
```bash
curl -X GET "http://localhost:3000/api/consents?userId=user_98765" \
  -H "X-API-Key: cm_live_YOUR_API_KEY"
```

### 4. Fetch User Active Consents
```bash
curl -X GET "http://localhost:3000/api/consents/user/user_98765" \
  -H "X-API-Key: cm_live_YOUR_API_KEY"
```

### 5. Revoke Consent
```bash
curl -X POST "http://localhost:3000/api/consents/revoke/cmq0wjdg10000j9pp60waqi1k" \
  -H "X-API-Key: cm_live_YOUR_API_KEY"
```

---

## Client Service Wrapper Example (Node.js)

When building a client wrapper/SDK for your application, store your `CONSENT_MANAGER_API_KEY` in environment variables:

```typescript
// consent-client.ts
import axios from "axios";

const CONSENT_MANAGER_URL = process.env.CONSENT_MANAGER_URL || "http://localhost:3000";
const CONSENT_MANAGER_API_KEY = process.env.CONSENT_MANAGER_API_KEY!;

const client = axios.create({
  baseURL: CONSENT_MANAGER_URL,
  headers: {
    "X-API-Key": CONSENT_MANAGER_API_KEY,
    "Content-Type": "application/json",
  },
});

export async function checkUserConsent(userId: string, purpose: string): Promise<boolean> {
  const response = await client.get("/api/consents/check", {
    params: { userId, purpose },
  });
  return response.data.data.hasConsent;
}

export async function grantUserConsent(userId: string, policyId: string) {
  const response = await client.post("/api/consents", {
    userId,
    policyId,
  });
  return response.data.data;
}

export async function listUserConsents(userId: string) {
  const response = await client.get("/api/consents", {
    params: { userId },
  });
  return response.data.data;
}
```

---

## Dynamic Touchpoint Consent Resolution

Instead of hardcoding policy IDs into client screens (e.g. Onboarding, Login, Checkout), client applications query Touchpoint Configs by slug:

### Query Touchpoint Config (cURL)
```bash
curl -X GET "http://localhost:3000/api/touchpoints/config/onboarding_journey?userId=user_98765" \
  -H "X-API-Key: cm_live_YOUR_API_KEY"
```

### Example Response
```json
{
  "success": true,
  "data": {
    "touchpointId": "tp_123",
    "name": "Onboarding Journey",
    "slug": "onboarding_journey",
    "policies": [
      {
        "policyId": "pol_tnc_1",
        "title": "Terms of Service",
        "purpose": "terms_of_service",
        "isRequired": true,
        "customLabel": "I accept the Operational Terms of Service",
        "userHasConsent": true
      },
      {
        "policyId": "pol_mkt_2",
        "title": "Marketing Communications",
        "purpose": "marketing_email",
        "isRequired": false,
        "customLabel": "Subscribe to weekly newsletter (Optional)",
        "userHasConsent": false
      }
    ]
  }
}
```

---

## Common Misconceptions

| Misconception | Fact |
| :--- | :--- |
| **"I need to pass `tenantId` in query parameters or body."** | **False.** `tenantId` is automatically extracted from your `X-API-Key` or `Bearer` token. |
| **"I need to pass both `tenantId` and `X-API-Key`."** | **False.** The API key is already linked to your tenant in PostgreSQL. |
| **"Revoking consent deletes the DB row."** | **False.** Revoking sets status to `REVOKED` and appends an audit event. |
