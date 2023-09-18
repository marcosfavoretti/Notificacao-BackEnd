import { Ip } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const ip = "192.168.4.16"
  const app = await NestFactory.create(AppModule);
  await app.listen(8090, ip);
}
bootstrap();
