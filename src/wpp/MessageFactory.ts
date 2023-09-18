import { HttpException } from "@nestjs/common";
import { throwError } from "rxjs";
import { Topics } from "./Topics";
import { VenonBot } from "./VenonBot/VenonBot.intance";
import { MessageWpp } from "./wpp.dto/Message.dto";

export class MessageFactory {
    venon: VenonBot
    constructor() {
        this.venon = new VenonBot()
    }
    getMessage(message_wpp: MessageWpp): Topics[] {
        let topics = []
        for (let i of Object.keys(message_wpp)) {
            if (i !== 'celular' && i !== 'botnome' && i !== 'msg') {
                topics.push(new Topics(i, message_wpp[i]))
            }
        }
        return topics //retorno um map
    }
    GenerateMessage(botnome: string, title: string, dataList: Topics[]): string {
        let msgBody = ''

        msgBody += "⚠️ *" + botnome + "* ⚠️\n"

        msgBody += '🚨 *' + title + "* \n"

        for (let [index, data] of dataList.entries()) {
            msgBody += "*" + data.topic + "*: " + data.value + "\n"
        }
        return msgBody;
    }
    async sendMessage(number: string, msg: string) {
        const venon_instance = this.venon.getClient()
        try {
            if (venon_instance !== undefined) {
                await venon_instance.sendText(number, msg)
            }
        }
        catch (err) {
            console.log(err)
            throw new HttpException('erro ao enviar a msg', 500)
        }
    }
}