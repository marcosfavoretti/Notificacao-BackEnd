import { Inject, Injectable } from "@nestjs/common";
import { IConnectionService } from "src/_domain/abstract/connection-services.abstract";
import { IMessagesGeneric } from "src/_domain/abstract/message-generic.abstract";
import { MessageWhatsApp } from "src/_domain/entities/MessageWpp.entity";
import { Whatsapp } from "venom-bot";

@Injectable()
export class WhatsAppService implements IMessagesGeneric<MessageWhatsApp> {
    constructor(@Inject(IConnectionService) private botconnection: Whatsapp
    ) { }
    async send(message_pattern: MessageWhatsApp): Promise<void> {
        await this.botconnection.sendText(message_pattern.celular, `🤖_*${message_pattern.botnome}*_🤖\n${message_pattern.msg}`)
    }
}