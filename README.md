# Event Platform

A microservices-based event processing platform that handles event spawning, data processing, and reporting.

## Architecture

The platform consists of the following microservices:
- Publisher: Generates test events (can be replaced with publisher-testing for development)
- Gateway: Receives webhook events and publishes them to NATS
- Facebook Collector: Processes Facebook events
- TikTok Collector: Processes TikTok events
- Reporter: Provides API for generating reports
- Monitoring: Prometheus and Grafana for metrics and visualization

## Prerequisites

- Node.js 22.14.0 (specified in .nvmrc)
- Docker and Docker Compose
- npm

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start the services:
```bash
# Development mode (default) - database cleared on each start, testing publisher
docker-compose --profile development up

# Staging mode - persistent database, production publisher
docker-compose --profile staging up

# Production mode - persistent database, production publisher
docker-compose --profile production up
```

## Environment Modes

The platform supports multiple environment modes for different deployment scenarios:

### Development Mode
- Uses testing publisher service with configurable event rates (10-100 events/sec)
- Perfect for local development and testing
- Run with: `docker-compose --profile development up`

### Staging Mode
- Uses production publisher service (10,000-50,000 events/sec)
- Perfect for pre-production testing
- Run with: `docker-compose --profile staging up`

### Production Mode
- Uses production publisher service (10,000-50,000 events/sec)
- Optimized for reliability and performance
- Run with: `docker-compose --profile production up`

### Database
- All environments use the same persistent volume `event-platform-postgres-data`
- Data persists between restarts and container removals
- To start fresh, you need to:
  1. Stop all containers: `docker-compose down`
  2. Remove the volume: `docker volume rm event-platform-postgres-data`
  3. Start again: `docker-compose --profile <environment> up -d`

### Database Migrations
The service automatically handles database migrations:
- On startup, it checks for and applies any pending migrations
- Migrations are applied safely without data loss
- Existing data is preserved during migrations

To create new migrations:
```bash
# 1. Make changes to schema.prisma
# 2. Generate migration
npx prisma migrate dev --name your_migration_name
# 3. Commit the generated migration files
git add prisma/migrations
git commit -m "Add database migration"
# 4. Deploy - migrations will be applied automatically
docker-compose --profile production up -d
```

### Database Connection
The service automatically:
- Waits for PostgreSQL to be ready
- Applies any pending migrations safely
- Preserves existing data during migrations
- Handles connection retries gracefully

For database management tools (like DBeaver):
- Host: localhost
- Port: 5433
- Database: events
- Username: postgres
- Password: postgres
- SSL: Disable

## Services

- Gateway: http://localhost:3000
- Reporter API: http://localhost:3001
- Grafana: http://localhost:3002
- Prometheus: http://localhost:9090

## Development

Each service is located in the `services` directory:
- `services/gateway`
- `services/fb-collector`
- `services/ttk-collector`
- `services/reporter`
- `services/publisher-testing` (alternative to the default publisher)

### Publisher Testing Service

The `publisher-testing` service is an alternative to the default publisher, designed for development and testing purposes. It provides more control over event generation rates and is easier to configure (in original publisher amount of events 10000 - 50000).

To use the publisher-testing service:
1. Comment out the default publisher service in `docker-compose.yml`
2. Uncomment the publisher-testing service configuration
3. Configure the event generation rates using environment variables:
   - `MIN_EVENTS_PER_SECOND`: Minimum number of events to generate per second (default: 10)
   - `MAX_EVENTS_PER_SECOND`: Maximum number of events to generate per second (default: 100)

Example configuration in docker-compose.yml:
```yaml
publisher:
  build:
    context: ./services/publisher-testing
  environment:
    - NATS_URL=nats://nats:4222
    - MIN_EVENTS_PER_SECOND=10
    - MAX_EVENTS_PER_SECOND=100
```

## Testing

Run tests for all services:
```bash
npm test
```

## dev notes
how to create prisma migration for collector
- run postgres container
- run this command in service/..-collector folder
```shell
❯ DATABASE_URL="postgresql://postgres:postgres@localhost:5433/events?schema=public" \
npx prisma migrate dev --name init
```