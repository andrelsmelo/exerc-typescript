"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Message = void 0;
var Message = /** @class */ (function () {
    function Message(sender, receiver, subject, text) {
        this.sender = sender;
        this.receiver = receiver;
        this.subject = subject;
        this.text = text;
    }
    Message.prototype.getSender = function () {
        return this.sender;
    };
    Message.prototype.setSender = function (sender) {
        this.sender = sender;
    };
    Message.prototype.getReceiver = function () {
        return this.receiver;
    };
    Message.prototype.setReceiver = function (receiver) {
        this.receiver = receiver;
    };
    Message.prototype.getSubject = function () {
        return this.subject;
    };
    Message.prototype.setSubject = function (subject) {
        this.subject = subject;
    };
    Message.prototype.getText = function () {
        return this.text;
    };
    Message.prototype.setText = function (text) {
        this.text = text;
    };
    return Message;
}());
exports.Message = Message;
