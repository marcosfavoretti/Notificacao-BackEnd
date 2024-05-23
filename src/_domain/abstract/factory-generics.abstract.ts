import { ExternalTools } from "../entities/ExternalTools.entity";
import { IExternalServices } from "./external-services.abstract";

export abstract class IFactoryGeneric<Input, Output> {
    abstract build(param: Input): Output
}