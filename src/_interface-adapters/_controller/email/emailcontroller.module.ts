/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { EmailSendMailUseCase } from 'src/_usecase/email/email-sendemail.usecase';
import { NodeMailerConfigModule } from 'src/config/nodeMailer/nodemailerconfig.module';
import { EmailController } from './email.controller';
import { IMessagesGeneric } from 'src/_domain/abstract/message-generic.abstract';
import { EmailSenderService } from 'src/_infra/nodemailer-service/email-sender.service';
import { IFactoryGeneric } from 'src/_domain/abstract/factory-generics.abstract';
import { EmailFactory } from 'src/_interface-adapters/factories/email/email.factory';

@Module({
    imports: [
        NodeMailerConfigModule.emailInitialize()

    ],
    controllers: [
        EmailController
    ],
    providers: [
        {
            provide: IMessagesGeneric,
            useClass: EmailSenderService
        },
        {
            provide: EmailSendMailUseCase,
            useClass: EmailSendMailUseCase
        }, {
            provide: IFactoryGeneric,
            useClass: EmailFactory
        }
    ],
})
export class EmailcontrollerModule { }
