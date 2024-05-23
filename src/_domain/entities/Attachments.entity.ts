import { ReadStream } from "fs"

export class AttachmentsFile {
    filename: string
    content: ReadStream
}