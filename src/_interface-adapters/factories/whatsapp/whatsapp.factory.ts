import { Injectable } from "@nestjs/common";
import { IExternalServices } from "src/_domain/abstract/external-services.abstract";
import { IFactoryGeneric } from "src/_domain/abstract/factory-generics.abstract";
import { whatsapp_bot_commands } from "src/_domain/constants/whatsapp_bot_commands.dictionary";
import { Not_bot_command } from "src/_domain/exceptions/global.exceptions";

@Injectable()
export class WhatsAppFactory implements IFactoryGeneric<string, IExternalServices | string> {
    private readonly command = whatsapp_bot_commands
    build(param: string): IExternalServices | string {
        const value = this.command[param]
        if (!value) throw new Not_bot_command('ação não encontrada na lista do BOT')
        return value
    }
}