export class BotSender {
    private client
    constructor(client) {
        this.client = client
    }
    sendMessage(to: string, msg: string) {
        this.client.sendText(to, msg)
    }
}