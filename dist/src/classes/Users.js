"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = void 0;
const axios = require('axios').default;
class Users {
    constructor() {
        this.users = [];
    }
    createUser(user) {
        this.users.push(user);
        return user;
    }
    codigoExistente(number) {
        for (let i = 0; i < this.users.length; i++) {
            if (number === this.users[i].id) {
                return true;
            }
        }
        return false;
    }
    findUser(number) {
        let user = this.users.filter(e => e.id === number);
        if (user.length > 0) {
            return user[0].name;
        }
        return false;
    }
    listUser() {
        for (let i = 0; i < this.users.length; i++) {
            console.log(this.users[i]);
        }
        return this.users;
    }
    hasUser() {
        if (1 === 1) {
            return true;
        }
        return false;
    }
    async getDataFromAPI() {
        let res = await axios.get('https://foaas.com/asshole/:from');
        let data = res.data;
        console.log(data);
    }
}
exports.Users = Users;
