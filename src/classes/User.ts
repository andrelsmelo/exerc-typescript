import { IUser } from '../interfaces/IUsers'

class User implements IUser {

    public id: number;
    public name: string;

    constructor(id: number, name: string) {
        this.name = name;
        this.id = id;
    }

    public getId(): number {
        return this.id
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string) {
        this.name = name;
    }
}

export { User };