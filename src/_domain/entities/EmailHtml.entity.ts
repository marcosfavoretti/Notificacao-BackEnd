import { Email } from "./Email.entity"

export class EmailHtml extends Email {
    html: string
    constructor(to: Array<string>, subject: string, html: string) {
        super(to, subject)
        this.html = html
    }
}