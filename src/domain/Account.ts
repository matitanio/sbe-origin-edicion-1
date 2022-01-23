export class Account{

    balance: number = 0;

    constructor(intialBalance: number = 0){

        this.balance = Number(intialBalance);
    }

    getBalance() : number{
        return this.balance;
    }

    deposit(amount : number){
        
        this.balance += Number(amount); 
    }

}