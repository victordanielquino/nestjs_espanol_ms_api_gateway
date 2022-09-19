import { Module } from '@nestjs/common';
import * as Joi from 'joi';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import config from './common/config/config';
import { enviroments } from './common/config/enviroments';
import { ProxyModule } from './common/proxy/proxy.module';
import { AdministracionModule } from './microservices/administracion/administracion.module';
import { PasageroModule } from './microservices/pasagero/pasagero.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: enviroments[process.env.NODE_ENV] || '.env',
      load: [config],
      isGlobal: true,
      validationSchema: Joi.object({
        JWT_SECRET: Joi.string().required(),
        DATABASE_URL: Joi.string().required(),
        AMQP_URL: Joi.string().required(),
      }),
    }),
    ProxyModule,
    AdministracionModule,
    PasageroModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
