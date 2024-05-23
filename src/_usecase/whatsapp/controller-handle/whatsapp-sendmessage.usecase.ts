import { Inject, Injectable } from "@nestjs/common";
import { IMessagesGeneric } from "src/_domain/abstract/message-generic.abstract";
import { MessageWhatsAppDto } from "src/_domain/dto/message.dto";
import { MessageWhatsApp } from "src/_domain/entities/MessageWpp.entity";
import { WhatsAppService } from "src/_infra/venombot-service/whatsapp-sendmsg.service";

@Injectable()
export class SendWhatsAppMessageUseCase {

    constructor(@Inject(IMessagesGeneric) private messageservice: WhatsAppService
    ) { }

    async sendmsg(messageDto: MessageWhatsAppDto) {
        const message = new MessageWhatsApp(messageDto.celular, messageDto.botnome, messageDto.msg)
        await this.messageservice.send(message)
    }

}   