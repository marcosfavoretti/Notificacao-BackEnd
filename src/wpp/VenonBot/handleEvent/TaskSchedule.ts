import { Topics } from "src/wpp/Objects/Topics";
import { IActionBot } from "./Interfaces/IActionBot";
import axios from "axios"
import { IHelpMenu } from "./Interfaces/IHelpMenu";
export class TaskSchedule implements IActionBot, IHelpMenu {
    async getData(): Promise<Topics[]> {
        const { data } = await axios.get('http://192.168.99.102:3263/task')
        return this.fixData(data.onlineTasks)
    }
    getHelp(): string {
        return `data e comando das execuções dos scripts do servidor`
    }
    private fixData(data: any[]): Topics[] {
        return data.map(map => {
            return new Topics(
                "-->" + map.nome,
                "\n" +
                Object.entries(map)
                    .filter(([key]) => key !== 'nome')
                    .map(([key, value]) => `*${key}* : ${value}`)
                    .join('\n')
            );
        });
    }
}