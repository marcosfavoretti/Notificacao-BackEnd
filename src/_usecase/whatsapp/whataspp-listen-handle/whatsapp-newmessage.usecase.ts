import { Inject } from '@nestjs/common';
import { IExternalServices } from 'src/_domain/abstract/external-services.abstract';
import { IFactoryGeneric } from 'src/_domain/abstract/factory-generics.abstract';
import { IMessagesGeneric } from 'src/_domain/abstract/message-generic.abstract';
import { ExternalTools } from 'src/_domain/entities/ExternalTools.entity';
import { WhatsAppService } from 'src/_infra/venombot-service/whatsapp-sendmsg.service';
import { WhatsAppFactory } from 'src/_interface-adapters/factories/whatsapp/whatsapp.factory';
import { Message } from 'venom-bot';

export class ReciveWhatsAppMessageUseCase {
    // private readonly keywords = botCommands;
    constructor(
        @Inject(IFactoryGeneric) private factory: WhatsAppFactory,
        @Inject(IMessagesGeneric) private message: WhatsAppService
    ) { }
    async execute(message: Message) {
        try {
            const breakMsg = message.content.split(' ')
            const factoryResult = this.factory.build(breakMsg[0])
            if (typeof factoryResult === 'string') {
                return this.message.send({
                    celular: message.from,
                    botnome: "BotEthos",
                    msg: factoryResult,
                })
            }
            const api_response = await (factoryResult as IExternalServices).execute(breakMsg[1]);
            return this.message.send({
                celular: message.from,
                botnome: "BotEthos",
                msg: JSON.stringify(api_response)
            })
        }
        catch {
            return
        }
    }

}
