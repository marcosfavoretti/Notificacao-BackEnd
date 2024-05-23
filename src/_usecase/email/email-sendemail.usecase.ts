import { HttpException, HttpStatus, Inject, Injectable } from "@nestjs/common";
import Mail from "nodemailer/lib/mailer";
import { IConnectionService } from "src/_domain/abstract/connection-services.abstract";
import { IFactoryGeneric } from "src/_domain/abstract/factory-generics.abstract";
import { IMessagesGeneric } from "src/_domain/abstract/message-generic.abstract";
import { Emaildto } from "src/_domain/dto/email.dto";
import { Email } from "src/_domain/entities/Email.entity";
import { EmailSenderService } from "src/_infra/nodemailer-service/email-sender.service";
import { EmailFactory } from "src/_interface-adapters/factories/email/email.factory";


@Injectable()
export class EmailSendMailUseCase {
    constructor(
        @Inject(IMessagesGeneric) private emailservice: EmailSenderService,
        @Inject(IFactoryGeneric) private factoryservice: EmailFactory
    ) { }
    async send(emaildto: Emaildto) {
        const email = this.factoryservice.build(emaildto)
        if (emaildto.attachments && !!emaildto.attachments.length) {
            email.attachFiles(emaildto.attachments)
        }
        console.log(email)
        await this.emailservice.send(email)
    }
}