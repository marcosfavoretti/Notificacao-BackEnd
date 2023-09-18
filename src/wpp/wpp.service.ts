import { Injectable } from '@nestjs/common';
import { MessageFactory } from './MessageFactory';
import { fixNumber } from './NumberFix';
import { MessageWpp } from './wpp.dto/Message.dto';

@Injectable()
export class WppService {
    messageHandle: MessageFactory

    constructor() {
        this.messageHandle = new MessageFactory()
    }

    public async sendMessage(message_wpp: MessageWpp) {
        let phone = fixNumber(message_wpp.celular)//arruma o numero para o uso
        let topics = this.messageHandle.getMessage(message_wpp)//pega os topicos da msg
        let msg = this.messageHandle.GenerateMessage(message_wpp.botnome, message_wpp.msg, topics)//gera o txt da msg
        await this.messageHandle.sendMessage(phone, msg)//envia a msg
    }

}
