import { Message } from './Message';

class Messages {

    public messages: Message[] = [];

    public createMessage(message: Message): Message {
        this.messages.push(message);
        return message;
    }

    public listMessages(): Message[] {
        for (let i = 0; i < this.messages.length; i++) {
            console.log(`[Assunto: ${this.messages[i].subject}]\n[Recebida/Enviada]\nEnviado por: [${this.messages[i].sender.name}] | Recebida por: [${this.messages[i].receiver.name}]\n[Mensagem]\n${this.messages[i].text}\n---------\n`)
        }
        return this.messages;
    }

    public findMessages(number: number) {
        for (let i = 0; i < this.messages.length; i++) {
            if (this.messages[i].sender.id === number || this.messages[i].receiver.id === number) {
                console.log(`[Assunto: ${this.messages[i].subject}]\n[Recebida/Enviada]\nEnviado por: [${this.messages[i].sender.name}] | Recebida por: [${this.messages[i].receiver.name}]\n[Mensagem]\n${this.messages[i].text}\n---------\n`)
            }
        }
    }
    public haveMessage(number: number) {
        if (this.messages.filter(e => e.sender.id === number || e.receiver.id === number).length > 0) {
            return true
        }
    }
}
export { Messages };