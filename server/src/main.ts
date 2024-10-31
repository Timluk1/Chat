import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  
  // Включаем глобальную валидацию
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,        // Удаляет поля, которых нет в DTO
    forbidNonWhitelisted: true, // Блокирует запросы с полями, не предусмотренными DTO
    transform: true,         // Преобразует типы данных на основе DTO
  }));
  // somewhere in your initialization file
  app.use(cookieParser());

  
  await app.listen(3000);
}

bootstrap();
