import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { MessageWpp } from './wpp.dto/Message.dto';
import { WppService } from './wpp.service';

@Controller('notify')
export class WppController {
  constructor(private readonly wppService: WppService) { }

  @Post()
  async notify(@Body(new ValidationPipe()) message: MessageWpp) {
    await this.wppService.sendMessage(message);
  }

}
