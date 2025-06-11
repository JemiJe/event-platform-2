#!/bin/sh
set -e

# Wait for postgres to be ready
echo "Waiting for postgres..."
until npx prisma db push --skip-generate; do
  echo "Postgres is unavailable - sleeping"
  sleep 1
done
echo "PostgreSQL started"

# Create and run migrations
echo "Setting up database..."
npx prisma migrate reset --force
npx prisma migrate dev --name init --create-only
npx prisma migrate deploy

# Start the application
echo "Starting application..."
exec "$@" 