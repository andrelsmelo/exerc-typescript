import { IMessage } from '../interfaces/IMessage'
import { User } from './User';

class Message implements IMessage {

    public sender: User;
    public receiver: User;
    public subject: string;
    public text: string;

    constructor(sender: User, receiver: User, subject: string, text: string) {
        this.sender = sender;
        this.receiver = receiver;
        this.subject = subject;
        this.text = text;
    }


    public getSender(): User {
        return this.sender;
    }

    public setSender(sender: User): void {
        this.sender = sender;
    }

    public getReceiver(): User {
        return this.receiver
    }

    public setReceiver(receiver: User): void {
        this.receiver = receiver;
    }

    public getSubject(): string {
        return this.subject
    }

    public setSubject(subject: string) {
        this.subject = subject;
    }

    public getText(): string {
        return this.text;
    }

    public setText(text: string) {
        this.text = text;
    }
}

export { Message };