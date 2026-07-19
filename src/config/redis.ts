import type { RedisOptions } from "ioredis";

function toNumber(value: string | undefined, fallback: number): number {
  if (!value) {
    return fallback;
  }

  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
}

export function getRedisConnectionOptions(): RedisOptions {
  const redisUrl = process.env.REDIS_URL ?? "redis://localhost:6379";
  const url = new URL(redisUrl);

  return {
    host: url.hostname,
    port: toNumber(url.port, 6379),
    username: url.username || undefined,
    password: url.password || undefined,
    db: url.pathname && url.pathname !== "/" ? toNumber(url.pathname.slice(1), 0) : 0,
    maxRetriesPerRequest: null,
  };
}