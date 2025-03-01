import { NestFastifyApplication } from '@nestjs/platform-fastify';

export class CorsConfiguration {
  static for(app: NestFastifyApplication) {
    app.enableCors();
  }
}
