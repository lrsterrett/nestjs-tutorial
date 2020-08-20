import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    // Transform not currently working, don't know why
    transform: true, // converts api request primitives to types expected by controllers
    forbidNonWhitelisted: true // this and 'whitelist' respond with 400 when request doesn't match DTOs
  })
  )
  await app.listen(3000);
}
bootstrap();
