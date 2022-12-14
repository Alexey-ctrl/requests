import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 4000;

  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(port, () => {
    console.log('Server started on', port);
  });
}
bootstrap();
