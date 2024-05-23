import { EmailusecaseModule } from './_usecase/email/emailusecase.module';
import { WhatsappcontrollerModule } from './_interface-adapters/_controller/whatsapp/whatsappcontroller.module';
import { InfraModule } from './_infra/infra.module';
import { Module } from '@nestjs/common';
import { ControllerModule } from './_interface-adapters/_controller/controller.module';
require('dotenv').config()
@Module({
  imports: [
    ControllerModule,
    InfraModule
  ],
  controllers: [
  ],
  providers: [],
})
export class AppModule { }
