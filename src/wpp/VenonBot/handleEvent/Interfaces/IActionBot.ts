import { Topics } from "src/wpp/Objects/Topics";

export interface IActionBot {
    getData(): Promise<Topics[]>
}