import { IFactoryGeneric } from "src/_domain/abstract/factory-generics.abstract";
import { Emaildto } from "src/_domain/dto/email.dto";
import { Email } from "src/_domain/entities/Email.entity";
import { EmailHtml } from "src/_domain/entities/EmailHtml.entity";
import { EmailText } from "src/_domain/entities/Emailtext.entity";

export class EmailFactory implements IFactoryGeneric<Emaildto, EmailHtml | EmailText> {
    build(param: Emaildto): EmailText | EmailHtml {
        return param.html ?
            new EmailHtml(param.to, param.subject, param.html) :
            new EmailText(param.to, param.subject, param.text)
    }
}