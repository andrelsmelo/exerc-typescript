"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var readline_sync_1 = __importDefault(require("readline-sync"));
var User_1 = require("./classes/User");
var Users_1 = require("./classes/Users");
var Message_1 = require("./classes/Message");
var Messages_1 = require("./classes/Messages");
var menu = '\n1 - Cadastrar Usuário\n2 - Enviar Mensagem\n3 - Ver histórico de mensagens\n4 - Sair\n';
var digiteNome = 'Digite seu nome\n';
var digiteId = 'Digite um ID\n';
var digiteRemetente = 'Escolha um remetente\n';
var digiteDestinatario = 'Escolha um destinatario\n';
var digiteAssunto = 'Digite um assunto\n';
var digiteMensagem = 'Digite sua mensagem\n';
var verMensagem = 'Digite o ID do usuario que deseja ver o historico\n';
var option = 0;
var idViewMessage = 0;
var users = new Users_1.Users();
var messages = new Messages_1.Messages();
// Tentativa de conectar com API users.getUser();
while (option !== 4) {
    console.log('---------');
    console.log(menu);
    option = readline_sync_1.default.questionInt('Digite uma opção\n');
    switch (option) {
        case 1:
            var name_1 = readline_sync_1.default.question(digiteNome);
            var id = readline_sync_1.default.questionInt(digiteId);
            if (users.hasUser(id) === false) {
                var user = new User_1.User(id, name_1);
                users.createUser(user);
                console.log('[Lista de Usuarios]');
                users.listUser();
            }
            else {
                console.log('ID já existente, tente Novamente');
            }
            break;
        case 2:
            if (users.users.length === 0) {
                console.log('Nenhum usuario cadastrado');
            }
            else {
                users.listUser();
                var sender = readline_sync_1.default.questionInt(digiteRemetente);
                var senderName = users.findUser(sender);
                console.log(senderName);
                if (!users.findUser(sender)) {
                    console.log('Código não existe');
                }
                else {
                    users.listUser();
                    var receiver = readline_sync_1.default.questionInt(digiteDestinatario);
                    var receiverName = users.findUser(receiver);
                    if (!users.findUser(receiver)) {
                        console.log('Código não existe');
                    }
                    else if (receiver === sender) {
                        console.log('Destinatario é igual ao remetente');
                    }
                    else {
                        var subject = readline_sync_1.default.question(digiteAssunto);
                        if (subject === '') {
                            console.log('Assunto vazio');
                        }
                        else {
                            var text = readline_sync_1.default.question(digiteMensagem);
                            if (text === '') {
                                console.log('Mensagem vazia');
                            }
                            else {
                                var message = new Message_1.Message(sender, senderName, receiver, receiverName, subject, text);
                                messages.createMessage(message);
                                messages.listMessages();
                            }
                        }
                    }
                }
            }
            break;
        case 3:
            users.listUser();
            idViewMessage = readline_sync_1.default.questionInt(verMensagem);
            messages.haveMessage(idViewMessage);
            if (users.findUser(idViewMessage) && messages.haveMessage(idViewMessage)) {
                console.log("Mensagens do usuario ".concat(idViewMessage));
                messages.findMessages(idViewMessage);
            }
            else if (!users.findUser(idViewMessage)) {
                console.log('Usuario não existe');
            }
            else if (!messages.haveMessage(idViewMessage)) {
                console.log('Nenhuma mensagem do usuario');
            }
            break;
    }
}
