#!/usr/bin/env sh
set -eu

mode="${1:-}"

get_compose_cmd() {
  engine="$1"
  if [ "$engine" = "docker" ]; then
    if command -v docker >/dev/null 2>&1; then
      echo "docker compose"
      return 0
    fi
    echo "docker is not installed or not available on PATH." >&2
    return 1
  fi

  if [ "$engine" = "podman" ]; then
    if command -v podman-compose >/dev/null 2>&1; then
      echo "podman-compose"
      return 0
    elif command -v podman >/dev/null 2>&1; then
      echo "podman compose"
      return 0
    fi
    echo "podman is not installed or not available on PATH." >&2
    return 1
  fi
}

case "$mode" in
  docker)
    cmd=$(get_compose_cmd "docker")
    $cmd -f compose.yaml up --build -d
    ;;
  podman)
    cmd=$(get_compose_cmd "podman")
    $cmd -f compose.yaml up --build -d
    ;;
  logs)
    if command -v docker >/dev/null 2>&1; then
      docker compose -f compose.yaml logs -f
    elif command -v podman >/dev/null 2>&1; then
      podman compose -f compose.yaml logs -f
    else
      echo "Neither docker nor podman is available on PATH." >&2
      exit 1
    fi
    ;;
  local-db)
    echo "Running Prisma generation and schema push for local development..."
    npx prisma generate
    npx prisma db push
    echo "Local database schema push complete!"
    ;;
  *)
    echo "Usage: run-setup {docker|podman|logs|local-db}" >&2
    exit 1
    ;;
esac
