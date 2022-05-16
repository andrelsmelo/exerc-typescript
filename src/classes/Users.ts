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

        let user = this.users.filter(e => e.id === number)
        if (user.length > 0) {
            return user[0].name
        } return false

    }

    public listUser(): User[] {
        for (let i = 0; i < this.users.length; i++) {
            console.log(this.users[i]);
        }
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