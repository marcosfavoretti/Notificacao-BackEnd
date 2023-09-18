import { Module } from '@nestjs/common';
import { WppService } from './wpp.service';
import { WppController } from './wpp.controller';

@Module({
  controllers: [WppController],
  providers: [WppService],
})
export class WppModule {}
