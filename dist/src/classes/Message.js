"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Message = void 0;
class Message {
    constructor(sender, senderName, receiver, receiverName, subject, text) {
        this.sender = sender;
        this.senderName = senderName;
        this.receiver = receiver;
        this.receiverName = receiverName;
        this.subject = subject;
        this.text = text;
    }
    getSender() {
        return this.sender;
    }
    setSender(sender) {
        this.sender = sender;
    }
    getReceiver() {
        return this.receiver;
    }
    setReceiver(receiver) {
        this.receiver = receiver;
    }
    getSubject() {
        return this.subject;
    }
    setSubject(subject) {
        this.subject = subject;
    }
    getText() {
        return this.text;
    }
    setText(text) {
        this.text = text;
    }
}
exports.Message = Message;
