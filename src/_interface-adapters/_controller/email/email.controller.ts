/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, HttpCode, HttpStatus, Inject, Post, ValidationPipe } from '@nestjs/common';
import { HttpErrorByCode } from '@nestjs/common/utils/http-error-by-code.util';
import { ApiTags } from '@nestjs/swagger';
import { Emaildto } from 'src/_domain/dto/email.dto';
import { Email } from 'src/_domain/entities/Email.entity';
import { EmailSendMailUseCase } from 'src/_usecase/email/email-sendemail.usecase';

@ApiTags('Email')
@Controller('email')
export class EmailController {
    @Inject(EmailSendMailUseCase) private sendMailUseCase: EmailSendMailUseCase
    @Post()
    @HttpCode(HttpStatus.OK)
    async sendEmail(@Body(new ValidationPipe()) emaildto: Emaildto) {
        await this.sendMailUseCase.send(emaildto)
    }
}
