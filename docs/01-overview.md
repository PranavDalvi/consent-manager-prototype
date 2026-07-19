# 1. Project Overview

## Introduction

The Consent Manager Prototype is a multi-tenant backend service designed to manage, verify, and audit user consent for processing personal data. The project is inspired by the requirements introduced under India's **Digital Personal Data Protection (DPDP) Act**, where organizations are expected to maintain auditable records of user consent and provide mechanisms for users to withdraw previously granted consent.

Rather than embedding consent logic directly into every application, this project centralizes consent management into a dedicated service that exposes REST APIs. Applications can integrate with this service to record consent, verify permissions before processing personal data, and maintain a complete audit trail of user actions.

---

# Problem Statement

Modern applications frequently collect and process personal data such as:

- User profiles
- Contact information
- Analytics data
- Marketing preferences
- Behavioral data

Most systems store consent as a simple boolean value:

```text
marketingConsent = true
```

This approach introduces several challenges:

- No record of when consent was granted
- No record of which policy version the user accepted
- No immutable audit history
- Difficult to prove compliance during audits
- No centralized mechanism to revoke consent
- Consent logic duplicated across multiple applications

As privacy regulations become stricter, these limitations create significant compliance risks.

---

# Motivation

The DPDP Act requires organizations to:

- Obtain explicit user consent before processing personal data.
- Record and maintain consent information.
- Allow users to withdraw consent at any time.
- Maintain auditable records of consent activities.
- Process data only for the purposes explicitly consented to.

Instead of each application implementing these requirements independently, a centralized Consent Manager provides a reusable compliance service that can be integrated across multiple applications.

---

# Objectives

The primary objectives of this prototype are:

- Build a centralized consent management service.
- Support multiple organizations (multi-tenancy).
- Store consent records securely.
- Allow users to revoke consent.
- Verify consent before data processing.
- Maintain a complete audit trail.
- Provide REST APIs for external integration.
- Document APIs using Swagger/OpenAPI.

---

# Scope of the Prototype

The current prototype focuses on the backend components required for consent management.

Implemented features include:

- Grant Consent
- Revoke Consent
- Verify Consent
- Fetch User Consents
- Fetch Audit Logs
- Multi-tenant architecture
- Request validation using Zod
- Centralized error handling
- Swagger API documentation
- PostgreSQL persistence using Prisma ORM

The prototype intentionally excludes frontend components, authentication, authorization, API keys, SDKs, and deployment infrastructure in order to focus on the core business logic.

---

# High-Level Workflow

The overall request flow is shown below.

```text
             Client Application
                     │
                     ▼
          Consent Manager REST API
                     │
         ┌───────────┴───────────┐
         │                       │
         ▼                       ▼
   Consent Service         Audit Service
         │                       │
         └───────────┬───────────┘
                     ▼
               PostgreSQL Database
```

Applications interact with the Consent Manager exclusively through REST APIs.

---

# Core Concepts

## Tenant

A tenant represents an organization or company using the platform.

Examples:

- Amazon
- Flipkart
- Swiggy
- Zomato

Each tenant has complete logical isolation of its consent data.

---

## User

A user represents an individual whose personal data is processed by a tenant.

Example:

```text
tenant = amazon
userId = user-123
```

---

## Purpose

A purpose defines why personal data is being processed.

Examples:

- marketing
- analytics
- personalization
- email_notifications
- fraud_detection

Consent is always associated with a specific purpose.

---

## Consent

Consent represents the user's current permission for a particular purpose.

Current states:

- GRANTED
- REVOKED

Only granted consent allows data processing.

---

## Audit Log

Every consent-related action generates an immutable audit record.

Examples:

- CONSENT_GRANTED
- CONSENT_REVOKED

These records provide traceability for compliance and auditing.

---

# Current Architecture

```text
                Express API
                     │
        ┌────────────┴────────────┐
        ▼                         ▼
   Controllers              Middlewares
        │                         │
        └────────────┬────────────┘
                     ▼
                 Services
                     │
                  Prisma ORM
                     │
                PostgreSQL
```

The project follows a layered architecture that separates HTTP handling, business logic, validation, and database access.

---

# Technology Stack

| Layer | Technology |
|--------|------------|
| Language | TypeScript |
| Runtime | Node.js |
| Framework | Express.js |
| Database | PostgreSQL |
| ORM | Prisma |
| Validation | Zod |
| API Documentation | Swagger/OpenAPI |
| Development | ts-node-dev |

---

# Future Vision

The long-term goal is to evolve this prototype into a reusable **Consent Management Platform** capable of serving multiple client applications.

Planned enhancements include:

- Consent enforcement middleware
- API key authentication
- Tenant management
- User management
- Webhook notifications
- Policy engine
- JavaScript/TypeScript SDK
- React administration dashboard
- Docker deployment
- CI/CD pipeline
- Monitoring and observability
- Rate limiting
- Caching

Ultimately, applications should be able to verify user consent through a single API before processing personal data, enabling compliance with privacy regulations while minimizing duplicated implementation effort.