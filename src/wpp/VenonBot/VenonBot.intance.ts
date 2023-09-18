const venon = require("venom-bot")
export class VenonBot {
    private client
    constructor() {
        venon.create({//cria a sessao do venonBot
            session: "syneco"
        }).then((cli: any) => {
            console.log('logado')
            this.client = cli
        }).catch((err: any) => {
            throw new Error('problemas para instanciar o VenonBot')
        })
    }
    getClient() {
        return this.client
    }
}
