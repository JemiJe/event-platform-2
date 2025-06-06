# Event Platform

A microservices-based event processing platform that handles event spawning, data processing, and reporting.

## Architecture

The platform consists of the following microservices:
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
docker-compose up
```

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

## Testing

Run tests for all services:
```bash
npm test
```

## Environment Variables

Required environment variables:
- `EVENT_ENDPOINT`: Webhook endpoint for the publisher
- `NATS_URL`: NATS connection URL
- `DATABASE_URL`: PostgreSQL connection URL

## License

MIT 