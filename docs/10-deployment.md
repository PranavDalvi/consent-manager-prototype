# 10. Deployment

## Overview

This document describes how to deploy the Consent Manager Prototype in a production environment.

Although the current project is intended as a prototype, the architecture has been designed so that it can be deployed with minimal changes.

A typical production deployment consists of:

```text
                Internet
                    │
                    ▼
            Reverse Proxy (NGINX)
                    │
                    ▼
          Consent Manager API
                    │
                    ▼
              PostgreSQL Database
```

---

# Deployment Architecture

```text
                    Clients
                       │
        ┌──────────────┴──────────────┐
        │                             │
        ▼                             ▼
    Web Client                  Mobile Client
        │                             │
        └──────────────┬──────────────┘
                       │
                       ▼
                 Reverse Proxy
                    (NGINX)
                       │
                       ▼
            Consent Manager API
                       │
                       ▼
                PostgreSQL Database
```

---

# Production Requirements

The following software is recommended for deployment.

| Software | Version |
|----------|----------|
| Ubuntu Server | 22.04+ |
| Node.js | 22.x |
| PostgreSQL | 16.x |
| NGINX | Latest |
| Git | Latest |
| PM2 (Optional) | Latest |

---

# Clone Repository

```bash
git clone <repository-url>

cd consent-manager-prototype
```

---

# Install Dependencies

```bash
npm install
```

---

# Configure Environment Variables

Create a production `.env`.

Example

```env
NODE_ENV=production

PORT=3000

DATABASE_URL="postgresql://username:password@db-host:5432/consent_manager?schema=public"
```

Sensitive values should never be committed to source control.

---

# Generate Prisma Client

```bash
npx prisma generate
```

---

# Apply Database Schema

If deploying for the first time:

```bash
npx prisma migrate deploy
```

For development environments:

```bash
npx prisma db push
```

Production deployments should always use migrations.

---

# Build Application

Compile the TypeScript application.

```bash
npm run build
```

Compiled output

```text
dist/
```

---

# Start Application

Run the compiled application.

```bash
npm start
```

Or directly:

```bash
node dist/server.js
```

---

# Process Management

For production, a process manager is recommended.

Example using PM2

Install PM2

```bash
npm install -g pm2
```

Start application

```bash
pm2 start dist/server.js --name consent-manager
```

View processes

```bash
pm2 list
```

View logs

```bash
pm2 logs consent-manager
```

Restart

```bash
pm2 restart consent-manager
```

Enable startup

```bash
pm2 startup

pm2 save
```

---

# Reverse Proxy

NGINX is recommended for:

- HTTPS termination
- Load balancing
- Compression
- Security headers
- Static asset serving (future frontend)

Example configuration

```nginx
server {

    listen 80;

    server_name api.example.com;

    location / {

        proxy_pass http://localhost:3000;

        proxy_http_version 1.1;

        proxy_set_header Host $host;

        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;

        proxy_set_header X-Forwarded-Proto $scheme;
    }

}
```

Reload

```bash
sudo systemctl reload nginx
```

---

# HTTPS

For production deployments, HTTPS should always be enabled.

Recommended options:

- Let's Encrypt
- Cloudflare
- AWS Load Balancer
- Azure Application Gateway

---

# Docker (Future)

Although Docker is not currently included in the prototype, future deployments can be containerized.

Example architecture

```text
Docker Compose

│

├── consent-manager

├── postgres

└── nginx
```

Example

```bash
docker compose up -d
```

---

# Health Monitoring

The application exposes a health endpoint.

```http
GET /health
```

Expected response

```json
{
    "status": "ok"
}
```

This endpoint can be used by:

- NGINX
- Load balancers
- Monitoring systems

---

# Database Connectivity Check

Development endpoint

```http
GET /db-check
```

Example response

```json
{
    "consentCount": 10
}
```

This endpoint is intended for development and debugging and should be disabled or protected in production.

---

# Logging

The current prototype uses:

```text
console.log()

console.error()
```

Future improvements include:

- Pino
- Winston
- Structured JSON logging
- Centralized log aggregation

---

# Monitoring

Future production deployments should include monitoring.

Recommended tools

| Tool | Purpose |
|------|---------|
| Prometheus | Metrics collection |
| Grafana | Dashboards |
| Loki | Log aggregation |
| Uptime Kuma | Uptime monitoring |

---

# Backup Strategy

PostgreSQL should be backed up regularly.

Example

```bash
pg_dump consent_manager > backup.sql
```

Restore

```bash
psql consent_manager < backup.sql
```

Backups should be automated using scheduled jobs or managed database services.

---

# Security Recommendations

For production deployments:

- Enable HTTPS.
- Disable development endpoints.
- Validate every request.
- Store secrets in environment variables.
- Restrict database access.
- Use strong database passwords.
- Rotate credentials periodically.
- Keep dependencies up to date.

Future improvements include:

- API Key authentication
- JWT authentication
- Role-Based Access Control (RBAC)
- Rate limiting
- Helmet middleware
- CORS configuration
- Request logging

---

# CI/CD (Future)

A typical deployment pipeline could follow this workflow:

```text
Developer Push

↓

GitHub

↓

GitHub Actions

↓

Install Dependencies

↓

Run Tests

↓

Build Project

↓

Generate Prisma Client

↓

Deploy Application

↓

Restart Service
```

---

# Cloud Deployment Options

The application can be deployed to various cloud providers.

| Platform | Status |
|----------|--------|
| AWS EC2 | Supported |
| Azure VM | Supported |
| Google Compute Engine | Supported |
| DigitalOcean Droplet | Supported |
| Railway | Suitable for prototypes |
| Render | Suitable for prototypes |
| Fly.io | Suitable for prototypes |

---

# Production Checklist

Before deploying, verify the following:

- PostgreSQL is running.
- Environment variables are configured.
- Database migrations have been applied.
- Prisma Client has been generated.
- TypeScript project builds successfully.
- Health endpoint responds correctly.
- Swagger documentation is available (if enabled).
- HTTPS is configured.
- Reverse proxy is configured.
- Logs are monitored.

---

# Future Deployment Improvements

The following enhancements are planned as the project evolves:

- Docker support
- Docker Compose configuration
- Kubernetes deployment
- Helm charts
- GitHub Actions CI/CD
- Infrastructure as Code (Terraform)
- Secret management
- Horizontal scaling
- Redis integration
- Observability stack
- Zero-downtime deployments

---

# Summary

The current deployment process is intentionally simple to support rapid development while maintaining a clear path toward production readiness.

The architecture allows the application to evolve from a single-node prototype into a scalable, production-ready consent management platform with minimal architectural changes. Future additions such as authentication, API keys, containerization, monitoring, and automated deployments can be introduced incrementally without redesigning the existing system.