import { IMessage } from '../interfaces/IMessage'

class Message implements IMessage{
    
    public sender: number;
    public senderName: string | boolean;
    public receiver: number;
    public receiverName: string | boolean;
    public subject: string;
    public text: string;
    
    constructor(sender: number, senderName: string | boolean, receiver: number, receiverName: string | boolean, subject: string, text: string){
        this.sender = sender;
        this.senderName = senderName;
        this.receiver = receiver;
        this.receiverName=  receiverName;
        this.subject = subject;
        this.text = text;
    }


    public getSender(): number {
        return this.sender;
    }

    public setSender(sender: number): void {
        this.sender = sender;
    }

    public getReceiver(): number {
        return this.receiver
    }

    public setReceiver(receiver: number): void {
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

    public setText(text: string){
        this.text = text;
    }
}

export { Message };