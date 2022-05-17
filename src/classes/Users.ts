import { User } from './User';

const axios = require('axios').default;

class Users {
    public users: User[] = [];

    public createUser(user: User): User {
        this.users.push(user);
        return user;
    }

    public hasUser(number: number) {
        return this.users.find(user => user.id === number)
    }

    public findUser(number: number) {
        return this.users.find(user => user.id === number)
    }

    public listUser(): User[] {
        return this.users
    }

    async getUser() {
        try {
          const response = await axios.get('https://foaas.com/');
          console.log(response.data);
        } catch (error) {
          console.error(error);
        }
      }
}

export { Users };