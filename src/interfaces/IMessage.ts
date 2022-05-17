import { User } from "../classes/User"

interface IMessage {
    sender: User,
    receiver: User,
    subject: string,
    text: string
}

export { IMessage }