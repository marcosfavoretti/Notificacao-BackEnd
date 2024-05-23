import { HttpException } from "@nestjs/common"

export function fixNumber(celular: string) {
    let phonenumber: string = celular
    if (phonenumber.indexOf('55') !== 0) {
        phonenumber = '55' + celular + '@c.us'//caso a pessoa nao mandar o numero do pais na req
        if (phonenumber.length !== 18) {
            throw new HttpException('numero de celular invalido', 500)
        }
    }
    else {
        phonenumber = phonenumber + '@c.us'
    }
    return phonenumber
}