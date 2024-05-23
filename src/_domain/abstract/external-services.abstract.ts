export abstract class IExternalServices {
    abstract execute(params?: string): Promise<string>
}