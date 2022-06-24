export class Cuenta{

    saldo: number = 0;

    constructor(saldoInicial: number = 0){

        this.saldo = Number(saldoInicial);
    }

    consultarSaldo() : number{
        return this.saldo;
    }

    depositar(monto : number){
        
        this.saldo += Number(monto); 
    }

}