import { User } from './User'

class Users {
    public users: User[] = [];
    
    public createUser(user: User): User {
        this.users.push(user);
        return user;
    }

    public codigoExistente(number: number): boolean{
        for (let i = 0; i < this.users.length; i++) {
            if(number === this.users[i].id) {
                return true;
            }
        }
        return false;
    }

    public findUser(number: number) {
        
        let user = this.users.filter(e => e.id === number)
        if(user.length > 0){
            return user[0].name
        } return false

    }

    public listUser(): User[] {
        for (let i = 0; i < this.users.length; i++) {
          console.log(this.users[i]);
        }
        return this.users
    }

    public hasUser(): boolean{
        if(1 === 1){
            return true;
        }
        return false;
    }
}

export { Users };