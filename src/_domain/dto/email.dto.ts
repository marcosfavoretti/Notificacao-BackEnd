import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, IsNotEmpty, ValidateIf, IsArray, IsOptional } from 'class-validator';

export class Emaildto {
    @ApiProperty()
    @IsString()
    @ValidateIf(o => !o.text)
    html: string
    @ApiProperty()
    @IsString()
    @ValidateIf(o => !o.html)
    text: string
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    subject: string
    @ApiProperty()
    @IsArray()
    @IsEmail({}, { each: true })
    @IsNotEmpty()
    to: string[]
    @ApiProperty({
        type: [String]
    })
    @IsOptional()
    @IsArray()
    attachments: string[]

}