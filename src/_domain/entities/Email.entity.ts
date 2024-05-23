import { Attachment } from "nodemailer/lib/mailer";
import { AttachmentsFile } from "./Attachments.entity";
import * as fs from "fs"
import * as path from "path";


export abstract class Email {
    subject: string;
    to: string[];
    from: string = process.env.EMAIL_ADDRESS;
    attachments: Array<Attachment>
    constructor(
        to: string[],
        subject: string,
    ) {
        this.subject = subject;
        this.to = this.checkValidEmail(to);
    }

    attachFiles(filepath: Array<string>): void {
        console.log(filepath)
        this.attachments = filepath.map((file): AttachmentsFile => {
            return {
                filename: path.basename(file),
                content: fs.createReadStream(file)
            }
        })
    }
    // private checkfilepath(attachments: Array<string>): Array<AttachmentsFile> {
    //     if (!attachments) return
    //     // const filepahtRegex = /^(?:[a-zA-Z]:\\|\/)?(?:[^\/\\:*?"<>|\r\n]+[\/\\])*[^\/\\:*?"<>|\r\n]+(?:\.[^\/\\:*?"<>|\r\n]+)?$/
    //     console.log(attachments)
    //     // const result = attachments.every(att => filepahtRegex.test(att))

    //     if (true) {
    //         return attachments.map(
    //             (att): AttachmentsFile => {
    //                 return {
    //                     filename: path.basename(att),
    //                     filepath: att
    //                 }
    //             }
    //         )
    //     }

    // }
    private checkValidEmail(to: Array<string>): Array<string> {
        const result = to.every(
            email => email.indexOf('@') != -1
        )
        if (result) {
            return to
        }
        throw new Error('existe algum email invalido')
    }
}
