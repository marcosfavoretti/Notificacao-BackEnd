import axios from "axios";
import { IExternalServices } from "src/_domain/abstract/external-services.abstract";
import { ExternalTools } from "src/_domain/entities/ExternalTools.entity";

export class TaskScheduleRunTimeService implements IExternalServices {
    async execute(): Promise<string> {
        return (await axios.get('http://192.168.99.102:3263/task')).data
    }
}