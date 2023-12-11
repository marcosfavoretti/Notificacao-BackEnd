import { BotSender } from "../Bot.Sender"
import { BotManager } from "../BotManager"
import { EventFactory } from "../handleEvent/EventFactory"
import { Bot } from "../init/Bot.intance"

export class BotSettings {
    constructor(client: any, botManager: BotManager) {
        client.onMessage(botManager.handleMessages.bind(botManager))
    }
}