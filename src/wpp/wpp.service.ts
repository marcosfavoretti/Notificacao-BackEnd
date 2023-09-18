import { HttpException, Injectable } from '@nestjs/common';
import { MessageFactory } from './MessageFactory';
import { fixNumber } from './NumberFix';
import { TimerChecker } from './TimeChecker';
import { MessageWpp } from './wpp.dto/Message.dto';

@Injectable()
export class WppService {
    messageHandle: MessageFactory

    constructor() {
        this.messageHandle = new MessageFactory()
    }

    public async sendMessage(message_wpp: MessageWpp) {
        if (TimerChecker()) {//verifico se esta no turno certo
            let phone = fixNumber(message_wpp.celular)//arruma o numero para o uso
            let topics = this.messageHandle.getMessage(message_wpp)//pega os topicos da msg
            let msg = this.messageHandle.GenerateMessage(message_wpp.botnome, message_wpp.msg, topics)//gera o txt da msg
            await this.messageHandle.sendMessage(phone, msg)//envia a msg
            return
        }
        //jogo exception caso ja tenho passado da hora 
        throw new HttpException("mensagem nao pode ser enviada devido ao horario", 501)
    }

}
