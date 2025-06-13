#!/bin/sh
set -e

echo "Waiting for postgres..."
until npx prisma migrate status > /dev/null 2>&1; do
  echo "Postgres is unavailable - sleeping"
  sleep 2
done
echo "PostgreSQL started"

sleep 2

echo "Applying safe production migrations..."
npx prisma migrate deploy

exec "$@"
