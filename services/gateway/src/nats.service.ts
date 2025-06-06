import { Injectable, Logger, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { connect, NatsConnection, StringCodec, JetStreamClient, StreamConfig, StorageType, RetentionPolicy } from 'nats';
import { Event } from './types/events';

@Injectable()
export class NatsService implements OnModuleInit, OnModuleDestroy {
  private readonly logger = new Logger(NatsService.name);
  private natsConnection: NatsConnection | null = null;
  private jetstream: JetStreamClient | null = null;
  private readonly sc = StringCodec();

  async onModuleInit() {
    try {
      this.natsConnection = await connect({
        servers: process.env.NATS_URL || 'nats://nats:4222',
      });
      this.jetstream = this.natsConnection.jetstream();

      // Ensure streams exist
      const js = this.jetstream;
      const streams = ['events_facebook', 'events_tiktok'];

      for (const stream of streams) {
        try {
          const jsm = await this.natsConnection.jetstreamManager();
          await jsm.streams.add({
            name: stream,
            subjects: [`${stream}.*`],
            storage: StorageType.Memory,
            retention: RetentionPolicy.Workqueue,
            max_msgs_per_subject: 1000,
            max_age: 24 * 60 * 60 * 1000 * 1000, // 24 hours in nanoseconds
          });
          this.logger.log(`Stream ${stream} created or already exists`);
        } catch (error) {
          if (error.code === '10058') { // Stream already exists
            this.logger.log(`Stream ${stream} already exists`);
          } else {
            throw error;
          }
        }
      }

      this.logger.log('Connected to NATS JetStream');
    } catch (error) {
      this.logger.error(`Failed to connect to NATS: ${error.message}`);
      throw error;
    }
  }

  async onModuleDestroy() {
    if (this.natsConnection) {
      await this.natsConnection.drain();
      this.logger.log('Disconnected from NATS');
    }
  }

  async publishEvent(event: any) {
    if (!this.jetstream) {
      this.logger.warn('NATS not connected, skipping event publish');
      return;
    }
  
    const streamName = 'events'; // Single stream for all events
    const subject = `${streamName}.${event.source}.${event.eventType}`;
  
    const payload = this.sc.encode(JSON.stringify(event));
  
    try {
      await this.jetstream.publish(subject, payload);
      // Optional: you can comment this out for less console noise
      this.logger.log(`📤 Published event to ${subject}`);
    } catch (error) {
      this.logger.error(`Failed to publish event: ${error.message}`);
      throw error;
    }
  }
} 