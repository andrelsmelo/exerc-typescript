import readLineSync from 'readline-sync';
import { User } from './classes/User';
import { Users } from './classes/Users';
import { Message } from './classes/Message';
import { Messages } from './classes/Messages';





const menu: string = '\n1 - Cadastrar Usuário\n2 - Enviar Mensagem\n3 - Ver histórico de mensagens\n4 - Sair\n';
const typeItName: string = 'Digite seu nome\n';
const typeItId: string = 'Digite um ID\n';
const typeItSender: string = 'Escolha um remetente\n'
const typeItReceiver: string = 'Escolha um destinatario\n'
const typeItSubject: string = 'Digite um assunto\n'
const typeItText: string = 'Digite sua mensagem\n'
const seeText: string = 'Digite o ID do usuario que deseja ver o historico\n'


let option: number = 0;
let idViewMessage: number = 0;
const users = new Users();
const messages = new Messages()
// Tentativa de conectar com API users.getUser();


while (option !== 4) {
    console.log('---------')
    console.log(menu);
    option = readLineSync.questionInt('Digite uma opção\n');
    switch (option) {
        case 1:
            const name = readLineSync.question(typeItName);
            const id = readLineSync.questionInt(typeItId);
            if (users.hasUser(id) === false) {
                const user = new User(id, name)
                users.createUser(user);
                console.log('[Lista de Usuarios]')
                users.listUser();
            } else {
                console.log('ID já existente, tente Novamente');
            }
            break;
        case 2:
            if (users.users.length === 0) {
                console.log('Nenhum usuario cadastrado')
            } else {
                users.listUser();
                const sender = readLineSync.questionInt(typeItSender);
                const senderName = users.findUser(sender);
                console.log(senderName);
                if (!users.findUser(sender)) {
                    console.log('Código não existe');
                } else {
                    users.listUser();
                    const receiver = readLineSync.questionInt(typeItReceiver)
                    const receiverName = users.findUser(receiver)
                    if (!users.findUser(receiver)){
                        console.log('Código não existe')
                     } else if(receiver === sender){
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
                                const message = new Message(sender, senderName, receiver, receiverName, subject, text)
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
            idViewMessage = readLineSync.questionInt(seeText)
            messages.haveMessage(idViewMessage);
            if (users.findUser(idViewMessage) && messages.haveMessage(idViewMessage)) {
                console.log(`Mensagens do usuario ${idViewMessage}`);
                messages.findMessages(idViewMessage);
            } else if (!users.findUser(idViewMessage)){
                console.log('Usuario não existe')
            } else if(!messages.haveMessage(idViewMessage)){
                console.log('Nenhuma mensagem do usuario')
            }
            break;
    }
}