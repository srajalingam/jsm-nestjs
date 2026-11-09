import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import { TranformInterceptor } from './utils/tranform.interceptor.js';
import { ValidationPipe } from '@nestjs/common/pipes/index.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(new TranformInterceptor());
  await app.listen(process.env.PORT ?? 3000);
}
await bootstrap();
