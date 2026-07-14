# consent-manager-prototype
consent-manager

# Docker Setup

The Consent Manager can run using Docker and Docker Compose.

Docker provides a consistent development environment and removes the need to manually install or configure PostgreSQL on every system.

The current Docker environment contains:

```text
Docker Compose

├── API
│   ├── Node.js 22
│   ├── Express.js
│   ├── TypeScript
│   └── Prisma ORM
│
└── PostgreSQL
    ├── PostgreSQL 16
    └── Persistent Docker Volume
```

---

## Prerequisites

Install the following tools:

- Docker
- Docker Compose
- Git

Verify the installation:

```bash
docker --version
```

```bash
docker compose version
```

---

## Clone the Repository

```bash
git clone <repository-url>
```

Navigate to the project directory:

```bash
cd consent-manager-prototype
```

---

## Configure Environment Variables

Create a local environment file from the example file.

Linux/macOS:

```bash
cp .env.example .env
```

Windows PowerShell:

```powershell
Copy-Item .env.example .env
```

Update the values if required.

Example development environment:

```env
PORT=3000
DATABASE_URL="postgresql://consent_user:consent_password@localhost:5432/consent_manager?schema=public"
```

The integration test suite must use the dedicated test database.

Example test environment:

```env
NODE_ENV=test
TEST_DATABASE_URL="postgresql://consent_user:consent_password@localhost:5433/consent_manager_test?schema=public"
DATABASE_URL="postgresql://consent_user:consent_password@localhost:5433/consent_manager_test?schema=public"
```

> The Docker Compose configuration provides separate service connections for the API and the test runner.
>
> Inside Docker, the PostgreSQL hostnames are `postgres` and `postgres-test`, not `localhost`.

---

# Start the Application with Docker

Build the images and start all services:

```bash
docker compose up --build
```

To run the containers in the background:

```bash
docker compose up --build -d
```

Docker Compose will:

1. Pull the PostgreSQL image.
2. Build the Consent Manager API image.
3. Start PostgreSQL.
4. Wait for PostgreSQL to become healthy.
5. Apply pending Prisma migrations.
6. Start the Consent Manager API.

---

## Verify Running Containers

```bash
docker compose ps
```

Expected services:

```text
api        Running

postgres   Running (healthy)
```

---

## View Application Logs

View logs from all services:

```bash
docker compose logs -f
```

View only API logs:

```bash
docker compose logs -f api
```

View only PostgreSQL logs:

```bash
docker compose logs -f postgres
```

Press:

```text
Ctrl + C
```

to stop following the logs.

This does not stop containers running in detached mode.

---

## Verify the API

Health endpoint:

```text
http://localhost:3000/health
```

Expected response:

```json
{
  "status": "ok"
}
```

---

## Open Swagger Documentation

Swagger UI is available at:

```text
http://localhost:3000/api/docs
```

Swagger can be used to:

- View API endpoints
- Inspect request schemas
- Execute API requests
- View API responses

---

# Docker Commands

## Start Existing Containers

```bash
docker compose up -d
```

---

## Rebuild the API

Rebuild after changing application code or dependencies:

```bash
docker compose up --build -d
```

---

## Force a Clean API Build

Use this when debugging dependency or Docker build issues:

```bash
docker compose --progress plain build --no-cache api
```

Start the containers after the build:

```bash
docker compose up -d
```

---

## Stop Containers

```bash
docker compose stop
```

This stops the containers without removing them.

---

## Stop and Remove Containers

```bash
docker compose down
```

The PostgreSQL data remains available because it is stored in a named Docker volume.

---

## Stop Containers and Delete Database Data

```bash
docker compose down -v
```

> **Warning**
>
> The `-v` option permanently deletes the PostgreSQL Docker volume and all database data stored inside it.

---

## Restart the API

```bash
docker compose restart api
```

---

## Open a Shell Inside the API Container

```bash
docker compose exec api sh
```

Exit the container shell:

```bash
exit
```

---

# Database Migrations with Docker

The API automatically applies pending migrations during startup using:

```bash
npx prisma migrate deploy
```

The container startup flow is:

```text
PostgreSQL Starts

↓

PostgreSQL Health Check Passes

↓

API Container Starts

↓

Prisma Migrations Are Applied

↓

Consent Manager API Starts
```

---

## Check Migration Status

```bash
docker compose exec api npx prisma migrate status
```

---

## Apply Pending Migrations Manually

```bash
docker compose exec api npx prisma migrate deploy
```

---

## Generate Prisma Client

```bash
docker compose exec api npx prisma generate
```

---

# Running Tests with Docker

The project uses:

- Vitest
- Supertest

The integration tests verify the complete API flow:

```text
Supertest

↓

Express Routes

↓

Zod Validation

↓

Controllers

↓

Services

↓

Prisma ORM

↓

PostgreSQL

↓

HTTP Response
```

---

## Run All Tests Inside Docker

Ensure the Docker services are running:

```bash
docker compose up -d
```

Run the complete test suite inside the API container:

```bash
docker compose exec api npm test
```

Equivalent command:

```bash
docker compose exec api npm run test
```

Expected output:

```text
✓ Consent API

✓ should grant consent

✓ should return true when consent is granted

✓ should fetch active user consents

✓ should revoke consent

✓ should return false after revocation

Test Files  1 passed

Tests       5 passed
```

---

## Run Tests Once

```bash
docker compose exec api npm run test
```

The test command should use:

```json
{
  "scripts": {
    "test": "vitest run"
  }
}
```

---

## Run Tests in Watch Mode

```bash
docker compose exec api npm run test:watch
```

Watch mode reruns affected tests when files change.

> Watch mode is most useful with a development Docker configuration that mounts the source code into the container.
>
> If the current Docker image copies source files only during the image build, local code changes will not appear inside the running container until the image is rebuilt.

---

## Run a Specific Test File

Run only the consent API integration tests:

```bash
docker compose exec api npx vitest run tests/integration/consent.api.test.ts
```

Run only the audit API integration tests:

```bash
docker compose exec api npx vitest run tests/integration/audit.api.test.ts
```

---

## Run Tests with Coverage

Install the Vitest coverage provider if it is not already installed:

```bash
npm install -D @vitest/coverage-v8
```

Run coverage inside Docker:

```bash
docker compose exec api npm run test:coverage
```

The `package.json` script should be:

```json
{
  "scripts": {
    "test:coverage": "vitest run --coverage"
  }
}
```

---

# Important Test Database Note

Integration tests create, update, and delete database records.

The recommended database setup is:

```text
consent_manager

↓

Development Database
```

```text
consent_manager_test

↓

Automated Integration Test Database
```

Tests should not use the development or production database.

A dedicated test database prevents automated tests from modifying development data.

The planned Docker test architecture is:

```text
Docker Compose

├── API

├── PostgreSQL Development Database

└── PostgreSQL Test Database
```

Until the dedicated test database is configured, verify the active `DATABASE_URL` before running integration tests.

---

# Current Docker Architecture

```text
                    Host Machine

                         │

                         │ localhost:3000

                         ▼

                Consent Manager API

                    API Container

                         │

                         │ postgres:5432

                         ▼

                    PostgreSQL

                PostgreSQL Container

                         │

                         ▼

              Persistent Docker Volume
```

---

# Docker Troubleshooting

## API Container Is Not Running

Check container status:

```bash
docker compose ps
```

View API logs:

```bash
docker compose logs api
```

---

## PostgreSQL Is Not Healthy

View PostgreSQL logs:

```bash
docker compose logs postgres
```

Verify the configured:

- Database name
- Database username
- Database password
- PostgreSQL health check

---

## API Cannot Connect to PostgreSQL

Inside Docker, use:

```text
postgres
```

as the database hostname.

Correct:

```env
DATABASE_URL="postgresql://consent_user:consent_password@postgres:5432/consent_manager?schema=public"
```

Incorrect:

```env
DATABASE_URL="postgresql://consent_user:consent_password@localhost:5432/consent_manager?schema=public"
```

`localhost` inside the API container refers to the API container itself.

---

## Prisma Migration Errors

Check migration status:

```bash
docker compose exec api npx prisma migrate status
```

Apply migrations:

```bash
docker compose exec api npx prisma migrate deploy
```

---

## Dependency Changes Are Not Available

When `package.json` or `package-lock.json` changes, rebuild the API image:

```bash
docker compose up --build -d
```

For a completely clean build:

```bash
docker compose --progress plain build --no-cache api
```

Then recreate the containers:

```bash
docker compose up -d
```

---

## Source Code Changes Are Not Available

The current production-style Docker image copies application files during the image build.

Rebuild after changing source code:

```bash
docker compose up --build -d
```

A future development-specific Docker configuration may use bind mounts and automatic application reload.

---

# Recommended Docker Workflow

Initial setup:

```text
Clone Repository

↓

Create .env

↓

docker compose up --build -d

↓

Check Container Status

↓

Open Health Endpoint

↓

Open Swagger

↓

Test APIs
```

Daily development:

```text
Update Source Code

↓

Rebuild API Image

↓

Start Containers

↓

Check API Logs

↓

Run Integration Tests
```

Commands:

```bash
docker compose up --build -d

docker compose logs -f api

docker compose exec api npm test
```

---

# Current Limitations

The current Docker setup includes:

- Consent Manager API
- PostgreSQL database
- Persistent PostgreSQL storage
- Automatic Prisma migration deployment

The following features are planned:

- Dedicated PostgreSQL test database
- Development Docker configuration
- Source-code bind mounts
- Automatic development reload
- Redis
- Production multi-stage Docker image
- Docker Compose profiles
- CI test automation
