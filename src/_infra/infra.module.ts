import { Module } from '@nestjs/common';
import { WhatsappListenUsecaseModule } from 'src/_usecase/whatsapp/whataspp-listen-handle/whatsappusecase-listen.module';
import { VenomBotSetup } from './venomBo-setup/venomBot.setup';
import { VenombotConfigModule } from 'src/config/venomBot/venombotconfig.module';
import { PowerBiRefreshService } from './powerbi-api-service/service/powerbirefresh.service';
import { TaskScheduleRunTimeService } from './taskschedule-api-service/service/taskscheduleruntime.service';
@Module({
    imports: [
        VenombotConfigModule.botInitialize(),
        WhatsappListenUsecaseModule
    ],
    controllers: [],
    providers: [
        VenomBotSetup,
        PowerBiRefreshService,
        TaskScheduleRunTimeService
    ],
    exports: [
        VenomBotSetup,
        PowerBiRefreshService,
        TaskScheduleRunTimeService
    ],
})
export class InfraModule {
}
