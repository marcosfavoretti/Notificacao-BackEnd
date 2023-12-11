import { IsString, IsInt, isString } from 'class-validator';

export class MessageWppDto {
    @IsString()
    celular: string
    @IsString()
    botnome: string
    @IsString()
    msg: string

    [key: string]: any; // Propriedade indexada para aceitar outras propriedades não especificadas
}