import { Injectable } from "@nestjs/common";
import { IExternalServices } from "src/_domain/abstract/external-services.abstract";
import { ExternalToolsParams } from "src/_domain/entities/ExternalToolsParams.entity";
import axios from "axios"

@Injectable()
export class PowerBiRefreshService extends IExternalServices {
    async execute(param: string): Promise<string> {
        (await axios.post("http://192.168.99.102:3000/powerbi", {
            dataset: param
        }))
        return `Relatório ${param} foi atualizado com sucesso`
    }
}