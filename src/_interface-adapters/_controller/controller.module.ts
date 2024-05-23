/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { WhatsAppController } from './whatsapp/whatsapp.controller';
import { EmailController } from './email/email.controller';
import { EmailSendMailUseCase } from 'src/_usecase/email/email-sendemail.usecase';
import { NodeMailerConfigModule } from 'src/config/nodeMailer/nodemailerconfig.module';
import { VenombotConfigModule } from 'src/config/venomBot/venombotconfig.module';
import { SendWhatsAppMessageUseCase } from 'src/_usecase/whatsapp/controller-handle/whatsapp-sendmessage.usecase';
import { IMessagesGeneric } from 'src/_domain/abstract/message-generic.abstract';
import { WhatsAppService } from 'src/_infra/venombot-service/whatsapp-sendmsg.service';
import { EmailcontrollerModule } from './email/emailcontroller.module';
import { WhatsappcontrollerModule } from './whatsapp/whatsappcontroller.module';

@Module({
    imports: [
        EmailcontrollerModule,
        WhatsappcontrollerModule
    ],
    controllers: [

    ],
    providers: [



    ],

})
export class ControllerModule { }
