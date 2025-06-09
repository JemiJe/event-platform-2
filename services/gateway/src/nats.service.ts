import { Injectable, Logger, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { connect, NatsConnection, StringCodec, JetStreamClient, StorageType, RetentionPolicy } from 'nats';
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

      const jsm = await this.natsConnection.jetstreamManager();

      // Define a single unified stream
      const streamName = 'events';

      try {
        await jsm.streams.add({
          name: streamName,
          subjects: ['events.>'], // Match all event topics
          storage: StorageType.Memory,
          retention: RetentionPolicy.Limits,
          max_msgs_per_subject: 1000,
          max_age: 24 * 60 * 60 * 1_000_000_000, // 24h in nanoseconds
        });
        this.logger.log(`✅ Stream '${streamName}' created`);
      } catch (error) {
        if (error.code === '10058') {
          this.logger.log(`ℹ️ Stream '${streamName}' already exists`);
        } else {
          this.logger.error(`❌ Failed to create stream '${streamName}': ${error.message}`);
          throw error;
        }
      }

      this.jetstream = this.natsConnection.jetstream();
      this.logger.log('✅ Connected to NATS JetStream');
    } catch (error) {
      this.logger.error(`❌ Failed to connect to NATS: ${error.message}`);
      throw error;
    }
  }

  async onModuleDestroy() {
    if (this.natsConnection) {
      await this.natsConnection.drain();
      this.logger.log('🛑 Disconnected from NATS');
    }
  }

  async publishEvent(event: Event) {
    if (!this.jetstream) {
      this.logger.warn('⚠️ NATS not connected, skipping event publish');
      return;
    }

    const subject = `events.${event.source}.${event.eventType}`;
    const payload = this.sc.encode(JSON.stringify(event));

    try {
      await this.jetstream.publish(subject, payload);
      // this.logger.log(`📤 Published event to '${subject}'`);
    } catch (error) {
      // this.logger.error(`❌ Failed to publish event: ${error.message}`);
      throw error;
    }
  }
}
