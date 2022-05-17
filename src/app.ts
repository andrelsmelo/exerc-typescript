import readLineSync from 'readline-sync';
import { User } from './classes/User';
import { Users } from './classes/Users';
import { Message } from './classes/Message';
import { Messages } from './classes/Messages';
import { IUser } from './interfaces/IUsers';

const firstMenu: string = '\n1 - Cadastrar Usuário\n2 - Enviar Mensagem\n3 - Ver histórico de mensagens\n4 - Sair\n';
const typeItName: string = 'Digite seu nome\n';
const typeItId: string = 'Digite um ID\n';
const typeItSender: string = 'Escolha um remetente\n'
const typeItReceiver: string = 'Escolha um destinatario\n'
const typeItSubject: string = 'Digite um assunto\n'
const typeItText: string = 'Digite sua mensagem\n'
const verMensagem: string = 'Digite o ID do usuario que deseja ver o historico\n'


let option: number = 0;
let idViewMessage: number = 0;
const users = new Users();
const messages = new Messages()

enum menu {
    Cadastro = 1,
    EnviarMensagem = 2,
    HistoricoDeMensagens = 3,
    Sair = 4
}

function showAllUsers(users: IUser[]){
    for (let i = 0; i < users.length; i++) {
        console.log(users[i]);
    }
}

while (option !== menu.Sair) {
    console.log('---------');
    console.log(firstMenu);
    option = readLineSync.questionInt('Digite uma opção\n');
    switch (option) {
        case menu.Cadastro:
            const name = readLineSync.question(typeItName);
            const id = readLineSync.questionInt(typeItId);
            if (!users.hasUser(id)) {
                const user = new User(id, name)
                users.createUser(user);
                console.log('[Lista de Usuarios]');
                const allUsers = users.listUser();
                showAllUsers(allUsers);
            } else {
                console.log('ID já existente, tente Novamente');
            }
            break;
        case menu.EnviarMensagem:
            if (users.users.length === 0) {
                console.log('Nenhum usuario cadastrado')
            } else {
                users.listUser();
                const senderId = readLineSync.questionInt(typeItSender);
                const senderName = users.findUser(senderId);
                console.log(senderName);
                if (users.findUser(senderId) === undefined) {
                    console.log('Código não existe');
                } else {
                    users.listUser();
                    const receiverId = readLineSync.questionInt(typeItReceiver)
                    const receiverName = users.findUser(receiverId)
                    if (users.findUser(receiverId) === null) {
                        console.log('Código não existe')
                    } else if (receiverId === senderId) {
                        console.log('Destinatario é igual ao remetente')
                    } else {
                        const subject = readLineSync.question(typeItSubject)
                        if (subject === '') {
                            console.log('Assunto vazio')
                        } else {
                            const text = readLineSync.question(typeItText)
                            if (text === '') {
                                console.log('Mensagem vazia')
                            } else {
                                const sender = new User(senderId, senderName)
                                const receiver = new User(receiverId, receiverName)
                                const message = new Message(sender, receiver, subject, text)
                                messages.createMessage(message);
                                messages.listMessages();
                            }
                        }
                    }
                }
            }
            break;
        case menu.HistoricoDeMensagens:
            users.listUser();
            idViewMessage = readLineSync.questionInt(verMensagem)
            messages.haveMessage(idViewMessage);
            if (users.findUser(idViewMessage) && messages.haveMessage(idViewMessage)) {
                console.log(`Mensagens do usuario ${idViewMessage}`);
                messages.findMessages(idViewMessage);
            } else if (!users.findUser(idViewMessage)) {
                console.log('Usuario não existe')
            } else if (!messages.haveMessage(idViewMessage)) {
                console.log('Nenhuma mensagem do usuario')
            }
            break;
        case menu.Sair:
            console.log('Até Mais!');
            break;
    }
}