import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WppModule } from './wpp/wpp.module';

@Module({
  imports: [WppModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
