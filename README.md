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
- Database is cleared each time you run `docker-compose up`
- Perfect for local development and testing
- Uses ephemeral storage
- Uses testing publisher service with configurable event rates (10-100 events/sec)
- Run with: `docker-compose --profile development up`

### Staging Mode
- Database persists between restarts
- Uses a separate volume for staging data
- Perfect for pre-production testing
- Uses production publisher service (10,000-50,000 events/sec)
- Run with: `docker-compose --profile staging up`

### Production Mode
- Database persists between restarts
- Uses a dedicated production volume
- Optimized for reliability and performance
- Uses production publisher service (10,000-50,000 events/sec)
- Run with: `docker-compose --profile production up`

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