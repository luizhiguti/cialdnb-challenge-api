import { ValidationPipe } from '@nestjs/common';
import { NestFastifyApplication } from '@nestjs/platform-fastify';

export class ValidationPipeConfiguration {
  static for(app: NestFastifyApplication) {
    app.useGlobalPipes(
      new ValidationPipe({
        // whitelist: true,
        transform: true,
      }),
    );
  }
}
