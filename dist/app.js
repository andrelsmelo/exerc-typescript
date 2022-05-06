import readLineSync from 'readline-sync';
import { User } from './classes/User';
import { Users } from './classes/Users';
class Sms {
    constructor(destinatario, remetente, subject, message) {
        this.subject = subject;
        this.message = message;
        this.destinatario = destinatario;
        this.remetente = remetente;
    }
}
const menu = '\n1 - Cadastrar Usuário\n2 - Enviar Mensagem\n3 - Ver histórico de mensagens\n4 - Sair\n';
const digiteNome = 'Digite seu nome\n';
const digiteId = 'Digite um ID\n';
const digiteRemetente = 'Escolha um remetente\n';
const digiteDestinatario = 'Escolha um destinatario\n';
const digiteAssunto = 'Digite um assunto\n';
const digiteMensagem = 'Digite sua mensagem\n';
const verMensagem = 'Digite o ID do usuario que deseja ver o historico\n';
let option = 0;
let name;
let id;
let remetente = 0;
let destinatario = 0;
let subject = '';
let message = '';
let idViewMessage = 0;
let messages = [];
let fullMessage;
let showMessages = [];
function listMessages() {
    for (let i = 0; i < showMessages.length; i++) {
        console.log(`[Assunto: ${showMessages[i].subject}]\n[Recebida/Enviada]\nEnviado por: [${showMessages[i].remetente}] | Recebida por: [${showMessages[i].destinatario}]\n[Mensagem]\n${showMessages[i].message}\n---------\n`);
    }
}
function findMessages(number) {
    let showMessages = messages.filter(e => e.remetente === number || e.destinatario === number);
    return showMessages;
}
while (option !== 4) {
    const users = new Users();
    console.log('---------');
    console.log(menu);
    option = readLineSync.questionInt('Digite uma opção\n');
    switch (option) {
        case 1:
            name = readLineSync.question(digiteNome);
            id = readLineSync.questionInt(digiteId);
            if (users.codigoExistente(id) === false) {
                const user = new User(id, name);
                users.createUser(user);
                console.log('[Lista de Usuarios]');
                users.listUser();
            }
            else {
                console.log('ID já existente, tente Novamente');
            }
            break;
        case 2:
            if (users.listUser() === []) {
                console.log('Nenhum usuario cadastrado');
            }
            else {
                users.listUser();
                remetente = readLineSync.questionInt(digiteRemetente);
                if (users.codigoExistente(remetente) === true) {
                    console.log('Código não existe');
                }
                else {
                    users.listUser();
                    destinatario = readLineSync.questionInt(digiteDestinatario);
                    if (users.codigoExistente(destinatario) !== true && destinatario === remetente) {
                        console.log('Código não existe | Destinatario é igual ao remetente');
                    }
                    else {
                        subject = readLineSync.question(digiteAssunto);
                        if (subject === '') {
                            console.log('Assunto vazio');
                        }
                        else {
                            message = readLineSync.question(digiteMensagem);
                            if (message === '') {
                                console.log('Mensagem vazia');
                            }
                            else {
                                fullMessage = Object.assign({ destinatario, remetente, subject, message });
                                messages.push(fullMessage);
                                listMessages();
                            }
                        }
                    }
                }
            }
            break;
        case 3:
            users.listUser();
            idViewMessage = readLineSync.questionInt(verMensagem);
            if (users.codigoExistente(idViewMessage) === true && findMessages(idViewMessage) !== []) {
                console.log(`Mensagens do usuario ${idViewMessage}`);
                let messagesSpread = findMessages(idViewMessage);
                for (let i = 0; i < messagesSpread.length; i++) {
                    console.log(`[Assunto: ${messagesSpread[i].subject}]\n[Recebida/Enviada]\nEnviado por: [${messagesSpread[i].remetente}] | Recebida por: [${messagesSpread[i].destinatario}]\n[Mensagem]\n${messagesSpread[i].message}\n---------\n`);
                }
            }
            else {
                console.log('Usuario não existe | Nenhuma mensagem do usuario');
            }
            break;
    }
}
