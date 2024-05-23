import { fixNumber } from "../functions/NumberFix"

export class MessageWhatsApp {
    celular: string
    botnome: string
    msg: string


    constructor(celular: string, botnome: string, msg: string) {
        this.celular = fixNumber(celular)
        this.botnome = botnome
        this.msg = msg
    }

}