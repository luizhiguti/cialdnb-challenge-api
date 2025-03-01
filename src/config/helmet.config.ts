import helmet from '@fastify/helmet';
import { NestFastifyApplication } from '@nestjs/platform-fastify';

export class HelmetConfiguration {
  static for(app: NestFastifyApplication) {
    app.register(helmet);
  }
}
