import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const swConfig = new DocumentBuilder()
    .setTitle('PROYECTO INTEGRADOR DEL M4 FT52')
    .setDescription(
      'Este es el Proyecto final del M4. ecoomerce, pagina creada con Typescript y NestJs ',
    )
    .addBearerAuth()
    .build();

  const page = SwaggerModule.createDocument(app, swConfig);
  SwaggerModule.setup('api', app, page);

  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
