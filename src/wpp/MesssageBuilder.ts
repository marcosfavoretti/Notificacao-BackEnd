import { HttpException } from "@nestjs/common";
import { Topics } from "./Objects/Topics";
import {
    MessageWppDto
} from "./wpp.dto/Message.dto";

export class MesssageBuilder {
    constructor() {
    }

    getMessage(message_wpp: MessageWppDto): Topics[] {
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

}