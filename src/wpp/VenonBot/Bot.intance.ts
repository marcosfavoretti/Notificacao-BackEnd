
const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

export class Bot {
    private client

    constructor() {
        this.client = new Client();
        this.client.on('qr', (qr) => {
            qrcode.generate(qr, { small: true })
        });

        this.client.on('ready', () => {
            console.log('O Cliente esta pronto!');
        });

        /*this.client.on('message', msg => {
             if (msg.body == '!ping') {
                 msg.reply('pong');
             }
         });*/

        this.client.initialize();
    }
    getClient() {
        return this.client
    }
}
