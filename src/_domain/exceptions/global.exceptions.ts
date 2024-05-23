export class Not_bot_command extends Error {
    constructor(mensagem: string) {
        super(mensagem);
        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor);
    }
}