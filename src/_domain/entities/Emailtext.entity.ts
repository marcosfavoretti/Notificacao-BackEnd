import { Email } from "./Email.entity"

export class EmailText extends Email {
    text: string
    constructor(to: Array<string>, subject: string, text: string) {
        super(to, subject)
        this.text = text
    }
}