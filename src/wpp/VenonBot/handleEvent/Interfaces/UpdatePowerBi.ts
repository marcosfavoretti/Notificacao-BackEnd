import { Topics } from "src/wpp/Objects/Topics";
import { IActionBot } from "./IActionBot";
import axios from "axios"
import { IParamActions } from "./IParamActions";

export class UpdatePowerBI implements IActionBot, IParamActions {
    param: string;
    setparam(param: string): void {
        this.param = param
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