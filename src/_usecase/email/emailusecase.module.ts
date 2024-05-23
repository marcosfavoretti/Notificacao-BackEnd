/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { IFactoryGeneric } from 'src/_domain/abstract/factory-generics.abstract';
import { EmailFactory } from 'src/_interface-adapters/factories/email/email.factory';

@Module({
    imports: [],
    controllers: [],
    providers: [{
        provide: IFactoryGeneric,
        useClass: EmailFactory
    }],
})
export class EmailusecaseModule { }
