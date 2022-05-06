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
            return false;
        }
        return false;
    }
    listUser() {
        for (let i = 0; i < this.users.length; i++) {
            console.log(this.users[i]);
        }
        return this.users;
    }
}
export { Users };
