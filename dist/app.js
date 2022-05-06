"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const User_1 = require("./classes/User");
const Users_1 = require("./classes/Users");
const Message_1 = require("./classes/Message");
const Messages_1 = require("./classes/Messages");
const menu = '\n1 - Cadastrar Usuário\n2 - Enviar Mensagem\n3 - Ver histórico de mensagens\n4 - Sair\n';
const digiteNome = 'Digite seu nome\n';
const digiteId = 'Digite um ID\n';
const digiteRemetente = 'Escolha um remetente\n';
const digiteDestinatario = 'Escolha um destinatario\n';
const digiteAssunto = 'Digite um assunto\n';
const digiteMensagem = 'Digite sua mensagem\n';
const verMensagem = 'Digite o ID do usuario que deseja ver o historico\n';
let option = 0;
let idViewMessage = 0;
const users = new Users_1.Users();
const messages = new Messages_1.Messages();
while (option !== 4) {
    console.log('---------');
    console.log(menu);
    option = readline_sync_1.default.questionInt('Digite uma opção\n');
    switch (option) {
        case 1:
            const name = readline_sync_1.default.question(digiteNome);
            const id = readline_sync_1.default.questionInt(digiteId);
            if (users.codigoExistente(id) === false) {
                const user = new User_1.User(id, name);
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
                const sender = readline_sync_1.default.questionInt(digiteRemetente);
                const senderName = users.findUser(sender);
                console.log(senderName);
                if (!users.findUser(sender)) {
                    console.log('Código não existe');
                }
                else {
                    users.listUser();
                    const receiver = readline_sync_1.default.questionInt(digiteDestinatario);
                    const receiverName = users.findUser(receiver);
                    if (!users.findUser(receiver) || receiver === sender) {
                        console.log('Código não existe | Destinatario é igual ao remetente');
                    }
                    else {
                        const subject = readline_sync_1.default.question(digiteAssunto);
                        if (subject === '') {
                            console.log('Assunto vazio');
                        }
                        else {
                            const text = readline_sync_1.default.question(digiteMensagem);
                            if (text === '') {
                                console.log('Mensagem vazia');
                            }
                            else {
                                const message = new Message_1.Message(sender, senderName, receiver, receiverName, subject, text);
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
                console.log(`Mensagens do usuario ${idViewMessage}`);
                messages.findMessages(idViewMessage);
            }
            else {
                console.log('Usuario não existe | Nenhuma mensagem do usuario');
            }
            break;
    }
}
