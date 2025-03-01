import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from 'src/app/app.module';
import { CorsConfiguration } from 'src/config/cors.config';
import { HelmetConfiguration } from 'src/config/helmet.config';
import { SwaggerConfiguration } from 'src/config/swagger.config';
import { ValidationPipeConfiguration } from 'src/config/validation-pipe.config';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({ logger: false }),
  );

  SwaggerConfiguration.for(app);
  HelmetConfiguration.for(app);
  CorsConfiguration.for(app);
  ValidationPipeConfiguration.for(app);

  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();
