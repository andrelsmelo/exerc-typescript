"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Messages = void 0;
var axios = require('axios').default;
var Messages = /** @class */ (function () {
    function Messages() {
        this.messages = [];
    }
    Messages.prototype.createMessage = function (message) {
        this.messages.push(message);
        return message;
    };
    Messages.prototype.listMessages = function () {
        for (var i = 0; i < this.messages.length; i++) {
            console.log("[Assunto: ".concat(this.messages[i].subject, "]\n[Recebida/Enviada]\nEnviado por: [").concat(this.messages[i].senderName, "] | Recebida por: [").concat(this.messages[i].receiverName, "]\n[Mensagem]\n").concat(this.messages[i].text, "\n---------\n"));
        }
        return this.messages;
    };
    Messages.prototype.findMessages = function (number) {
        for (var i = 0; i < this.messages.length; i++) {
            if (this.messages[i].sender === number || this.messages[i].receiver === number) {
                console.log("[Assunto: ".concat(this.messages[i].subject, "]\n[Recebida/Enviada]\nEnviado por: [").concat(this.messages[i].senderName, "] | Recebida por: [").concat(this.messages[i].receiverName, "]\n[Mensagem]\n").concat(this.messages[i].text, "\n---------\n"));
            }
        }
    };
    Messages.prototype.haveMessage = function (number) {
        if (this.messages.filter(function (e) { return e.sender === number || e.receiver === number; }).length > 0) {
            return true;
        }
    };
    return Messages;
}());
exports.Messages = Messages;
