import { DynamicModule, Module } from '@nestjs/common';
import { IConnectionService } from 'src/_domain/abstract/connection-services.abstract';
import * as nodemailer from 'nodemailer';

@Module({
    imports: [],
    controllers: [],
    providers: [],
})
export class NodeMailerConfigModule {
    static emailInitialize(): DynamicModule {
        const emailInitialize = {
            provide: IConnectionService,
            useFactory: async () => {
                console.log('iniciando serviço de email...')
                try {
                    const transporter = nodemailer.createTransport({
                        host: process.env.HOST_NAME,
                        port: +process.env.EMAIL_PORT,
                        secure: false,
                        auth: {
                            user: process.env.EMAIL_ADDRESS,
                            pass: process.env._EMAIL_PASSWORD,
                        },
                        tls: {
                            ciphers: 'SSLv3',
                        },
                    });
                    await transporter.verify();
                    return transporter;
                } catch (error) {
                    throw error;
                }
            },
        };

        return {
            module: NodeMailerConfigModule,
            providers: [emailInitialize],
            exports: [emailInitialize],
        };
    }
}
