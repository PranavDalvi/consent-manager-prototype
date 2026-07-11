FROM node:22-bookworm-slim

WORKDIR /app
RUN apt-get update \
    && apt-get install -y --no-install-recommends openssl \
    && rm -rf /var/lib/apt/lists/*

COPY package.json package-lock.json ./

RUN npm ci --ignore-scripts

# 1. Copy config files and the prisma directory
COPY prisma ./prisma
COPY prisma.config.ts ./
COPY tsconfig.json ./

# 2. MOVE THIS HERE: Copy your source code before generating the client
COPY src ./src

# 3. Now generate the client (it will write directly into /app/src/generated)
RUN npx prisma generate

# 4. Compile the application
RUN npm run build

EXPOSE 3000

CMD ["sh", "-c", "npx prisma migrate deploy && npm start"]
