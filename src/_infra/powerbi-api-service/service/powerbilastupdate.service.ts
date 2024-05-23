import { IExternalServices } from "src/_domain/abstract/external-services.abstract";
import { ExternalTools } from "src/_domain/entities/ExternalTools.entity";
import axios from "axios"
import { info } from "console";

export class PowerBiLastUpdate implements IExternalServices {
    async execute(): Promise<string> {
        return (await axios.get("http://192.168.99.102:3000/powerbi")).data
    }
}
