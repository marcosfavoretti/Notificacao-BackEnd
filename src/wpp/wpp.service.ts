import { HttpException, Injectable } from '@nestjs/common';
import { MesssageBuilder } from './MesssageBuilder';
import { fixNumber } from './NumberFix';
import { TimerChecker } from './TimeValidation/TimeChecker';
import { MessageWppDto } from './wpp.dto/Message.dto';
import { BotManager } from './VenonBot/BotManager';
import { Bot } from './VenonBot/init/Bot.intance';
import { BotSettings } from './VenonBot/settings/Bot.settings';
import { Botmain } from './VenonBot/Bot.Main';

@Injectable()
export class WppService {
    messageHandle: MesssageBuilder
    bot: Botmain = new Botmain()

    constructor() {
        this.messageHandle = new MesssageBuilder()
    }

    public async sendMessage(message_wpp: MessageWppDto) {

        if (!TimerChecker()) throw new HttpException("mensagem nao pode ser enviada devido ao horario", 501)

        let phone = fixNumber(message_wpp.celular)//arruma o numero para o uso
        let topics = this.messageHandle.getMessage(message_wpp)//pega os topicos da msg
        let msg = this.messageHandle.GenerateMessage(message_wpp.botnome, message_wpp.msg, topics)//gera o txt da msg
        await this.bot.sendMsg(phone, msg)//envia a msg
        return
    }

}
