import { BotSender } from "./Bot.Sender";
import { BotManager } from "./BotManager";
import { Bot } from "./init/Bot.intance";
import { BotSettings } from "./settings/Bot.settings";

export class Botmain {
    private bot: Bot
    private bot_settings: BotSettings
    private bot_manager: BotManager
    private bot_sender: BotSender
    constructor() {
        this.bot = new Bot()
        this.bot.initialize().then(() => {
            this.bot_sender = new BotSender(this.bot.getClient())
            this.bot_manager = new BotManager(this.bot_sender)
            this.bot_settings = new BotSettings(this.bot.getClient(), this.bot_manager)//aki e criado onde vai ser chamado meus eventos de callback
        })
    }
    getBot() {
        return this.bot.getClient()
    }

    sendMsg(to, who) {
        this.bot_sender.sendMessage(to, who)
    }

}