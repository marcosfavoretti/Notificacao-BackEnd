/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { WhatsAppService } from './whatsapp-sendmsg.service';
import { VenombotConfigModule } from 'src/config/venomBot/venombotconfig.module';

@Module({
    imports: [VenombotConfigModule.botInitialize(),],
    controllers: [],
    providers: [WhatsAppService],
    exports: [WhatsAppService]
})
export class WhatsappServiceModule { }
