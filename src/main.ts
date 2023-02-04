import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('Nest BG API Swagger')
    .setDescription('The NEst BG API description')
    .setVersion('1.0')
    .addTag('change')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, options);

  SwaggerModule.setup('api', app, document);

  await app.listen(6541);

  console.log(`Application is running on ${await app.getUrl()}`);
}
bootstrap();
