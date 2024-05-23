export abstract class IMessagesGeneric<T> {
    abstract send(message_pattern: T): Promise<void>
}