
//const { Client } = require('whatsapp-web.js');
const venom = require('venom-bot');
const qrcode = require('qrcode-terminal');

export class Bot {
    private client
    async initialize() {
        try {
            this.client = await venom.create({
                session: 'session-ethos' //name of session
            });
        } catch (error) {
            console.error(error);
        }
    }


    getClient() {
        return this.client
    }
}
