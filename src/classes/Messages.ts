import { Message } from './Message';

class Messages {

    public messages: Message[] = [];

    public createMessage(message: Message): Message {
        this.messages.push(message);
        return message;
    }

    public listMessages(): Message[] {
        for (let i = 0; i < this.messages.length; i++) {
            console.log(`[Assunto: ${this.messages[i].subject}]\n[Recebida/Enviada]\nEnviado por: [${this.messages[i].senderName}] | Recebida por: [${this.messages[i].receiverName}]\n[Mensagem]\n${this.messages[i].text}\n---------\n`)
        }
        return this.messages;
    }

    public findMessages(number: number) {
        for (let i = 0; i < this.messages.length; i++) {
            if (this.messages[i].sender === number || this.messages[i].receiver === number) {
                console.log(`[Assunto: ${this.messages[i].subject}]\n[Recebida/Enviada]\nEnviado por: [${this.messages[i].senderName}] | Recebida por: [${this.messages[i].receiverName}]\n[Mensagem]\n${this.messages[i].text}\n---------\n`)
            }
        }
    }
    public haveMessage(number: number) {
        if (this.messages.filter(e => e.sender === number || e.receiver === number).length > 0) {
            return true
        }
    }
}
export { Messages };