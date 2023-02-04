import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const port = configService.get('PORT') || 6541;

  const options = new DocumentBuilder()
    .setTitle('Nest BG API Swagger')
    .setDescription('The NEst BG API description')
    .setVersion('1.0')
    .addTag('change')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, options);

  SwaggerModule.setup('api', app, document);

  await app.listen(port);

  console.log(`Application is running on ${await app.getUrl()}`);
}
bootstrap();
