import { MesssageBuilder } from "../MesssageBuilder";
import { BotSender } from "./Bot.Sender";
import { EventFactory } from "./handleEvent/EventFactory";

export class BotManager {

    private factory: EventFactory
    private botSender: BotSender
    private message_builder: MesssageBuilder

    constructor(botSender: BotSender) {
        this.botSender = botSender
        this.factory = new EventFactory()
        this.message_builder = new MesssageBuilder()
    }

    async handleMessages(event_msg: any) {
        console.log(event_msg)
        if (event_msg.body === 'teste') return this.botSender.sendMessage(event_msg.from, 'estou funcionando')
        const event = this.factory.factory(event_msg.body)
        const data = await event.getData()
        const final_msg = this.message_builder.GenerateMessage("🤖BOT ETHOS🤖", "*", data)
        this.botSender.sendMessage(event_msg.from, final_msg)
    }
}