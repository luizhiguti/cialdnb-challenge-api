import { NestFastifyApplication } from '@nestjs/platform-fastify';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export class SwaggerConfiguration {
  static for(app: NestFastifyApplication) {
    const document = SwaggerModule.createDocument(app, swaggerConfig);
    SwaggerModule.setup('swagger', app, document);
  }
}

const swaggerConfig = new DocumentBuilder()
  .setTitle('App Packing')
  .setVersion('1.0')
  .build();
