import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsInt, isString, IsArray, IsOptional, ValidateNested } from 'class-validator';
export class MessageWhatsAppDto {
    @ApiProperty()
    @IsString()
    celular: string;

    @ApiProperty()
    @IsString()
    botnome: string;

    @ApiProperty()
    @IsString()
    msg: string;

}