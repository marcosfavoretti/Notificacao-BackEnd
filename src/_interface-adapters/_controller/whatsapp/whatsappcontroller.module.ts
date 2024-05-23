/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { IMessagesGeneric } from 'src/_domain/abstract/message-generic.abstract';
import { WhatsAppService } from 'src/_infra/venombot-service/whatsapp-sendmsg.service';
import { SendWhatsAppMessageUseCase } from 'src/_usecase/whatsapp/controller-handle/whatsapp-sendmessage.usecase';
import { VenombotConfigModule } from 'src/config/venomBot/venombotconfig.module';
import { WhatsAppController } from './whatsapp.controller';

@Module({
    imports: [
        VenombotConfigModule.botInitialize(),
    ],
    controllers: [
        WhatsAppController
    ],
    providers: [
        {
            provide: SendWhatsAppMessageUseCase,
            useClass: SendWhatsAppMessageUseCase
        },
        {
            provide: IMessagesGeneric,
            useClass: WhatsAppService
        }
    ],
})
export class WhatsappcontrollerModule { }
