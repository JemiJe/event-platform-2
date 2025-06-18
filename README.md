# Event Platform

A scalable event processing platform that collects, processes, and analyzes events from various sources.

## Architecture

The platform consists of several microservices:

- **Publisher**: Generates test events at configurable rates
- **Gateway**: Receives events and publishes them to NATS
- **Collectors**: Process events from different sources (Facebook, TikTok)
- **Reporter**: Provides analytics and reporting capabilities

## Database Configuration

The platform uses separate PostgreSQL instances for different collectors:

- **Facebook Collector Database**:
  - Port: 5433
  - Database: events
  - Username: postgres
  - Password: postgres

- **TikTok Collector Database**:
  - Port: 5434
  - Database: events
  - Username: postgres
  - Password: postgres

## Getting Started

### Prerequisites

- Docker and Docker Compose
- Node.js 18 or later
- pnpm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/event-platform.git
   cd event-platform
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Start the services:
   ```bash
   # Development mode (default)
   docker-compose --profile development up -d

   # Staging mode
   docker-compose --profile staging up -d

   # Production mode
   docker-compose --profile production up -d
   ```

### Environment Profiles

The platform supports different deployment profiles:

- **Development** (`--profile development`):
  - Uses testing publisher with configurable event rates (10-100 events/sec)
  - Perfect for local development and testing
  - Includes all monitoring tools

- **Staging** (`--profile staging`):
  - Uses production publisher (10,000-50,000 events/sec)
  - Includes monitoring and debugging tools
  - Suitable for pre-production testing

- **Production** (`--profile production`):
  - Uses production publisher (10,000-50,000 events/sec)
  - Optimized for reliability and performance
  - Minimal monitoring overhead

### Development

To run the platform in development mode:

```bash
docker-compose --profile development up -d
```

This will start:
- Publisher service with configurable event rates
- NATS server
- Gateway service
- Facebook Collector
- TikTok Collector
- Separate PostgreSQL instances for each collector

### Testing Event Generation

The publisher service can be configured with different event rates:

```bash
# Set minimum and maximum events per second
MIN_EVENTS_PER_SECOND=10 MAX_EVENTS_PER_SECOND=100 docker-compose up publisher
```

## Monitoring

The platform includes monitoring capabilities:

- Prometheus for metrics collection
- Grafana for visualization
- Health checks for all services

## `reporter` requests example

### GET `reports/events`
```bash
curl http://localhost:3001/health
curl "http://localhost:3001/reports/events?source=facebook"
curl "http://localhost:3001/reports/events?source=tiktok&funnelStage=bottom&from=2025-06-01T00:00:00Z"
```

### GET `reports/revenue`
```bash
curl "http://localhost:3001/reports/revenue?source=facebook"
curl "http://localhost:3001/reports/revenue?source=tiktok&from=2025-06-18T00:00:00Z"
```

## dev notes
1. after creating prisma/schema.prisma, run this command
```
cd services/...-collector
npx prisma generate
```
2. how to create prisma migration for collector
- run postgres container
- run this command in service/..-collector folder
```shell
DATABASE_URL="postgresql://postgres:postgres@localhost:5433/events?schema=public" \
npx prisma migrate dev --name init
```