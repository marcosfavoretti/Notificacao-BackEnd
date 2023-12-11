import { Topics } from "src/wpp/Objects/Topics";
import { IActionBot } from "./Interfaces/IActionBot";
import axios from "axios"
import { IParamActions } from "./Interfaces/IParamActions";
import { IHelpMenu } from "./Interfaces/IHelpMenu";

export class UpdatePowerBI implements IActionBot, IParamActions, IHelpMenu {
    param: string;
    setparam(param: string): void {
        this.param = param
    }
    getHelp(): string {
        return `faz a atulização de um dataset do powerbi\n*parametros*\n->SOLDA\n->BANHO\n->PINTURA\n->EMBARQUE\n->SEMANAL\n->RNC\n->Trello`
    }
    public setDataset(dataset: string) {
        this.param = dataset
    }
    async getData(): Promise<Topics[]> {
        return await axios.post('http://192.168.99.102:3000/powerbi', {
            dataset: this.param
        }).then(() => {
            return [new Topics('atualização concluída', this.param)]
        }).catch((err) => {
            return [new Topics('atualização falhou', err)]
        })
    }
}