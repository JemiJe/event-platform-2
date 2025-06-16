#!/bin/sh
set -e

echo "Waiting for postgres to be ready..."
until pg_isready -h postgres-ttk -p 5432 -U postgres > /dev/null 2>&1; do
  echo "Postgres is unavailable - sleeping"
  sleep 2
done
echo "PostgreSQL is ready"

echo "Generating Prisma client..."
npx prisma generate

echo "Applying safe production migrations..."
npx prisma migrate deploy

exec "$@"
