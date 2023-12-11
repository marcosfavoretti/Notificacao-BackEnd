import { Topics } from "src/wpp/Objects/Topics";
import { IActionBot } from "./Interfaces/IActionBot";
import axios from "axios";
import { IHelpMenu } from "./Interfaces/IHelpMenu";

export class GetRefreshes implements IActionBot, IHelpMenu {
    async getData(): Promise<Topics[]> {
        const { data } = await axios.get("http://192.168.99.102:3000/powerbi")
        return this.fixData(data[0])
    }
    getHelp(): string {
        return `retorna uma lista com as datas das últimas atualizações do powerbi`
    }
    private fixData(data: any[]): Topics[] {
        return Object.entries(data).map(([key, value]) => {
            return new Topics(
                key,
                value
            );
        });
    }
}