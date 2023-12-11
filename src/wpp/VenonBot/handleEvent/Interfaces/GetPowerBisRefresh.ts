import { Topics } from "src/wpp/Objects/Topics";
import { IActionBot } from "./IActionBot";
import axios from "axios";

export class GetRefreshes implements IActionBot {
    async getData(): Promise<Topics[]> {
        const { data } = await axios.get("http://192.168.99.102:3000/powerbi")
        return this.fixData(data[0])
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