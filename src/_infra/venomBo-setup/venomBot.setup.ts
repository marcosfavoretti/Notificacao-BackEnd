import { Inject, Injectable, OnModuleInit } from "@nestjs/common";
import { IConnectionService } from "src/_domain/abstract/connection-services.abstract";
import { SendWhatsAppMessageUseCase } from "src/_usecase/whatsapp/controller-handle/whatsapp-sendmessage.usecase";
import { ReciveWhatsAppMessageUseCase } from "src/_usecase/whatsapp/whataspp-listen-handle/whatsapp-newmessage.usecase";
import { Whatsapp, Message } from "venom-bot";
@Injectable()
export class VenomBotSetup implements OnModuleInit {
    @Inject(IConnectionService) private botconnection: Whatsapp
    @Inject(ReciveWhatsAppMessageUseCase) private messagerecive: ReciveWhatsAppMessageUseCase
    //passar na vdd lista de IBotTrigger por contrutor para iniciar aqui e tirar a abstração dessa classe
    onModuleInit() {
        console.log('setup triggers')
        this.trigger();
    }
    async trigger(): Promise<void> {
        this.botconnection.onMessage((msg: Message) => {
            this.messagerecive.execute(msg)
        })
    }
}