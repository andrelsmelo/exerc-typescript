"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Messages = void 0;
const axios = require('axios').default;
class Messages {
    constructor() {
        this.messages = [];
    }
    createMessage(message) {
        this.messages.push(message);
        return message;
    }
    listMessages() {
        for (let i = 0; i < this.messages.length; i++) {
            console.log(`[Assunto: ${this.messages[i].subject}]\n[Recebida/Enviada]\nEnviado por: [${this.messages[i].senderName}] | Recebida por: [${this.messages[i].receiverName}]\n[Mensagem]\n${this.messages[i].text}\n---------\n`);
        }
        return this.messages;
    }
    findMessages(number) {
        for (let i = 0; i < this.messages.length; i++) {
            if (this.messages[i].sender === number || this.messages[i].receiver === number) {
                console.log(`[Assunto: ${this.messages[i].subject}]\n[Recebida/Enviada]\nEnviado por: [${this.messages[i].senderName}] | Recebida por: [${this.messages[i].receiverName}]\n[Mensagem]\n${this.messages[i].text}\n---------\n`);
            }
        }
    }
    haveMessage(number) {
        if (this.messages.filter(e => e.sender === number || e.receiver === number).length > 0) {
            return true;
        }
    }
}
exports.Messages = Messages;
