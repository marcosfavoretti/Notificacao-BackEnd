import { PowerBiRefreshService } from "src/_infra/powerbi-api-service/service/powerbirefresh.service";
import { IExternalServices } from "../abstract/external-services.abstract";
import { PowerBiLastUpdate } from "src/_infra/powerbi-api-service/service/powerbilastupdate.service";
import { TaskScheduleRunTimeService } from "src/_infra/taskschedule-api-service/service/taskscheduleruntime.service";


export const whatsapp_bot_commands: Record<string, IExternalServices | string> = {
    "!refresh": new PowerBiRefreshService,
    "!ultatt": new PowerBiLastUpdate,
    "!task": new TaskScheduleRunTimeService,
    "!help": `
        !refresh: adicione '!refresh' e após isso o nome do relatorio que gostaria de atualizar \n
        !ultatt: ultima atualização de cada BI\n
        !task: veja que horas as tasks foram rodadas\n`
}
