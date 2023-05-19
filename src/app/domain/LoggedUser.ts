export class LoggedUser {
    name: String;
    surname: String;
    isAdmin: Boolean;
    fullname() {
    return `${this.name} ${this.surname}`;
    }
    constructor(name: String, surname: String, isAdmin: Boolean) {
    this.name = name;
    this.surname = surname;
    this.isAdmin = isAdmin;
    }
    }