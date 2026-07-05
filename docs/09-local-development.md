# 9. Local Development

## Overview

This document describes how to set up the Consent Manager Prototype for local development.

Following these steps will configure the project, database, and development environment.

---

# Prerequisites

Ensure the following software is installed before setting up the project.

| Software | Recommended Version |
|-----------|---------------------|
| Node.js | 22.x or later |
| npm | Latest |
| PostgreSQL | 16.x or later |
| Git | Latest |

Verify the installation.

```bash
node -v
```

```bash
npm -v
```

```bash
psql --version
```

```bash
git --version
```

---

# Clone the Repository

Clone the project from GitHub.

```bash
git clone <repository-url>
```

Navigate into the project directory.

```bash
cd consent-manager-prototype
```

---

# Install Dependencies

Install all required packages.

```bash
npm install
```

---

# Environment Variables

Create a `.env` file in the project root.

```text
.env
```

Example

```env
PORT=3000

DATABASE_URL="postgresql://pranav:123456789@localhost:5432/consent_manager?schema=public"
```

Replace the username, password, host, and database name according to your local PostgreSQL configuration.

---

# Create PostgreSQL Database

Open PostgreSQL.

```bash
psql -U postgres
```

Create the database.

```sql
CREATE DATABASE consent_manager;
```

Verify.

```sql
\l
```

Exit.

```sql
\q
```

---

# Configure Prisma

Generate the Prisma Client.

```bash
npx prisma generate
```

---

# Create Database Tables

For local development, synchronize the schema with the database.

```bash
npx prisma db push
```

If using migrations instead:

```bash
npx prisma migrate dev --name init
```

---

# Verify Database Connection

Start the application.

```bash
npm run dev
```

Open the health endpoint.

```text
http://localhost:3000/health
```

Example response

```json
{
    "status": "ok"
}
```

---

# Verify Prisma Connection

Open

```text
http://localhost:3000/db-check
```

Example

```json
{
    "consentCount": 0
}
```

If this endpoint responds successfully, Prisma is connected to PostgreSQL.

---

# Start Development Server

Run

```bash
npm run dev
```

Example output

```text
Server running on port 3000
Connected to PostgreSQL
```

The application automatically reloads whenever source files change.

---

# Project Scripts

| Command | Description |
|----------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Compile TypeScript |
| `npm start` | Run compiled application |
| `npx prisma generate` | Generate Prisma Client |
| `npx prisma db push` | Synchronize schema with database |
| `npx prisma migrate dev` | Create and apply migrations |
| `npx prisma studio` | Open Prisma Studio |

---

# Prisma Studio

Prisma Studio provides a graphical interface for viewing and editing database records.

Start Prisma Studio.

```bash
npx prisma studio
```

Default URL

```text
http://localhost:5555
```

Using Prisma Studio you can:

- View consent records
- View audit logs
- Inspect database contents
- Edit records during development

---

# Swagger Documentation

After starting the server, open

```text
http://localhost:3000/api/docs
```

Swagger UI allows you to:

- View all endpoints
- Inspect request schemas
- Execute API requests
- View responses

---

# Testing the API

A typical development workflow is:

### Grant Consent

```http
POST /api/consents
```

↓

### Verify Consent

```http
GET /api/consents/check
```

↓

### Fetch User Consents

```http
GET /api/consents/{tenantId}/user/{userId}
```

↓

### Revoke Consent

```http
POST /api/consents/revoke/{consentId}
```

↓

### Verify Again

```http
GET /api/consents/check
```

↓

### Fetch Audit Logs

```http
GET /api/audit
```

---

# Recommended Development Workflow

```text
Start PostgreSQL

↓

Open Project

↓

npm install

↓

npx prisma generate

↓

npx prisma db push

↓

npm run dev

↓

Open Swagger

↓

Test Endpoints

↓

Develop New Features
```

---

# Folder Structure

During development, the project structure is organized as follows.

```text
consent-manager-prototype/

├── prisma/
├── src/
├── docs/
├── .env
├── package.json
├── tsconfig.json
└── README.md
```

---

# Common Development Tasks

## Install a New Dependency

```bash
npm install <package-name>
```

Development dependency

```bash
npm install -D <package-name>
```

---

## Regenerate Prisma Client

Whenever `schema.prisma` changes.

```bash
npx prisma generate
```

---

## Update Database Schema

Development

```bash
npx prisma db push
```

Production-style workflow

```bash
npx prisma migrate dev --name <migration-name>
```

---

## View Database Records

```bash
npx prisma studio
```

---

## Build the Project

Compile TypeScript.

```bash
npm run build
```

Generated files are placed in

```text
dist/
```

---

# Troubleshooting

## PostgreSQL Connection Failed

Verify:

- PostgreSQL is running.
- `DATABASE_URL` is correct.
- The database exists.
- The database user has sufficient privileges.

---

## Prisma Client Errors

Regenerate the Prisma client.

```bash
npx prisma generate
```

If necessary, remove generated files and regenerate.

---

## Port Already in Use

Change the application port in `.env`.

```env
PORT=4000
```

or terminate the process using the current port.

---

## Database Schema Out of Sync

Synchronize the schema.

```bash
npx prisma db push
```

or

```bash
npx prisma migrate dev
```

---

# Development Best Practices

- Keep controllers lightweight.
- Place business logic inside services.
- Validate all requests using Zod.
- Handle errors through centralized middleware.
- Use Prisma transactions for multi-step database operations.
- Test APIs using Swagger before committing changes.
- Regenerate the Prisma Client after schema changes.
- Commit migrations whenever the database schema changes.

---

# Summary

A typical local development session consists of:

```text
Clone Repository

↓

Install Dependencies

↓

Configure Environment

↓

Start PostgreSQL

↓

Generate Prisma Client

↓

Push Database Schema

↓

Run Development Server

↓

Open Swagger

↓

Develop and Test APIs
```

Following this workflow ensures a consistent and reproducible local development environment for all contributors.