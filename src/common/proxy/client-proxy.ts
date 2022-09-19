import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  ClientProxy,
  ClientProxyFactory,
  Transport,
} from '@nestjs/microservices';
import { RabbitMQ } from '../enums';

@Injectable()
export class ClientProxyAdministration {
  constructor(private readonly config: ConfigService) {}

  clientProxyUsers(): ClientProxy {
    return ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        urls: [process.env.AMQP_URL],
        queue: RabbitMQ.AdministrationQueue,
        queueOptions: {
          durable: false,
        },
      },
    });
  }
}
