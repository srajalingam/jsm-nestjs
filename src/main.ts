import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import { TranformInterceptor } from './utils/tranform.interceptor.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new TranformInterceptor());
  await app.listen(process.env.PORT ?? 3000);
}
await bootstrap();
