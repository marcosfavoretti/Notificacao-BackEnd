import { Topics } from "src/wpp/Objects/Topics";
import { IActionBot } from "./Interfaces/IActionBot";
import { IHelpMenu } from "./Interfaces/IHelpMenu";

export class HelpManu implements IActionBot {
    private actions: Record<string, IActionBot>
    constructor(actions: Record<string, IActionBot>) { this.actions = actions }

    async getData(): Promise<Topics[]> {
        const topics: Topics[] = []
        for (const [key, value] of Object.entries(this.actions)) {
            if (!(this.hasIHelpImplementation(value))) continue
            topics.push(new Topics(key, value.getHelp()))
        }
        return topics
    }

    private hasIHelpImplementation(obj: any): obj is IHelpMenu {
        return 'getHelp' in obj;
    }
}