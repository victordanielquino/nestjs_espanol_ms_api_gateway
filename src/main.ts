import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AllExceptionFilter } from './core/filters/http-exception.filter';
import { TimeoutInterceptor } from './core/interceptors/timeout.interceptor';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // FILTRO PARA CAPTURAR ERRORES
  app.useGlobalFilters(new AllExceptionFilter());

  // INTERCEPTOR: PARA QUE LA CONSULTA A UNA API NO DURE MAS DE 2 MIN
  app.useGlobalInterceptors(new TimeoutInterceptor());

  // CLASS VALIDATION / CLASS TRANSFORM
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // se llegan atributos que no estan definidos en el dtos, los ignora y continua
      forbidNonWhitelisted: true, // alerta de atributos que no esta definido en el esquema de los dtos
      transformOptions: { enableImplicitConversion: true }, // convierte string a number en @Query params
    }),
  );

  // ENABLED ACCESS CORS ALL:
  app.enableCors();

  // DOCUMENT OF APIS
  const config = new DocumentBuilder()
    .setTitle('API-REST: MINEDU-SIE-ESPECIAL')
    .setDescription('DOCUMENTS OF API MINEDU-SIE-SPECIAL')
    .setVersion('1.0')
    .addBearerAuth()
    .addTag('API-GATEWAY')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/v1/docs', app, document, {
    swaggerOptions: {
      filter: true,
    },
  });

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
