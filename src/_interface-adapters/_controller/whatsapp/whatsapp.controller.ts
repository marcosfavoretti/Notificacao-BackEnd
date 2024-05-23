import { Body, Controller, Get, HttpCode, HttpStatus, Inject, Injectable, Post, ValidationPipe } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { MessageWhatsAppDto } from "src/_domain/dto/message.dto";
import { SendWhatsAppMessageUseCase } from "src/_usecase/whatsapp/controller-handle/whatsapp-sendmessage.usecase";

@Injectable()

@ApiTags('WhatsApp')
@Controller('whatsapp')
export class WhatsAppController {
    @Inject(SendWhatsAppMessageUseCase) sendwhatsappusecase: SendWhatsAppMessageUseCase
    @Post()
    @HttpCode(HttpStatus.OK)
    async sendMessage(@Body(new ValidationPipe()) messageDto: MessageWhatsAppDto) {
        await this.sendwhatsappusecase.sendmsg(messageDto)
    }

}