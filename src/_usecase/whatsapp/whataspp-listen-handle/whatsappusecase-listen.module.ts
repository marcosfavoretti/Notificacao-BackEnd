/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { ReciveWhatsAppMessageUseCase } from './whatsapp-newmessage.usecase';
import { WhatsAppFactory } from 'src/_interface-adapters/factories/whatsapp/whatsapp.factory';
import { IFactoryGeneric } from 'src/_domain/abstract/factory-generics.abstract';
import { IMessagesGeneric } from 'src/_domain/abstract/message-generic.abstract';
import { WhatsAppService } from 'src/_infra/venombot-service/whatsapp-sendmsg.service';
import { InfraModule } from 'src/_infra/infra.module';
import { WhatsappServiceModule } from 'src/_infra/venombot-service/whatsapp-service.module';
import { VenombotConfigModule } from 'src/config/venomBot/venombotconfig.module';

@Module({
    imports: [WhatsappServiceModule, VenombotConfigModule.botInitialize(),
    ],
    controllers: [],
    providers: [
        ReciveWhatsAppMessageUseCase,
        {
            provide: IFactoryGeneric,
            useClass: WhatsAppFactory
        }, {
            provide: IMessagesGeneric,
            useClass: WhatsAppService
        }],
    exports: [ReciveWhatsAppMessageUseCase]
})
export class WhatsappListenUsecaseModule { }
