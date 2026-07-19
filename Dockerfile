FROM node:22-bookworm-slim

WORKDIR /app
RUN apt-get update \
    && apt-get install -y --no-install-recommends openssl \
    && rm -rf /var/lib/apt/lists/*

COPY package.json package-lock.json ./
RUN npm install --ignore-scripts

COPY prisma ./prisma
COPY prisma.config.ts ./
COPY tsconfig.json ./
COPY vitest.config.ts ./
COPY src ./src
COPY tests ./tests

RUN npx prisma generate
RUN npm run build

EXPOSE 3000

CMD ["sh", "-c", "npx prisma migrate deploy && npm start"]
