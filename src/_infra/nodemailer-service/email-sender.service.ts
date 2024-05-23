import { HttpException, HttpStatus, Inject } from "@nestjs/common";
import Mail, { Attachment } from "nodemailer/lib/mailer";
import { IConnectionService } from "src/_domain/abstract/connection-services.abstract";
import { IMessagesGeneric } from "src/_domain/abstract/message-generic.abstract";
import { Email } from "src/_domain/entities/Email.entity";
import * as fs from "fs"
export class EmailSenderService implements IMessagesGeneric<Email> {
    constructor(@Inject(IConnectionService) private emailConnection: Mail) { }
    async send(message_pattern: Email): Promise<void> {

        await this.emailConnection.sendMail(message_pattern).
            catch(
                () => {
                    throw new HttpException('Não foi possivel enviar o email', HttpStatus.BAD_REQUEST)
                }
            )

    }
}