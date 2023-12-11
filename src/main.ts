import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const ip = process.env.IP_ETHOS
  const app = await NestFactory.create(AppModule);
  await app.listen(8090, ip);
}
bootstrap();
