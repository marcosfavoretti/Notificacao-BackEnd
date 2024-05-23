import { DynamicModule, Module } from '@nestjs/common';
import { IConnectionService } from 'src/_domain/abstract/connection-services.abstract';
const venomBot = require('venom-bot')
import { Browser } from 'puppeteer';
import { exec } from 'child_process';
@Module({
})
export class VenombotConfigModule {
    static botInitialize(): DynamicModule {
        const botInitialize = {
            provide: IConnectionService,
            useFactory: async () => {
                const client = await venomBot.create({
                    session: 'session-ethos',
                    browserInstance: (browser: Browser) => {
                        exec(`setx chromePid ${browser.process().pid}`);
                    },
                });
                return client;
            },
        };

        return {
            module: VenombotConfigModule,
            providers: [botInitialize],
            exports: [botInitialize],
        };
    }
}
