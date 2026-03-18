export class Customer { 
    constructor (
        //Creacion de por medio de un constructor de la Customer, 
        // con los atributos id, firstName, lastname y email
        public id: number | undefined,
        public firstName: string,
        public lastName: string,
        public email: string
    ){}
}
