export class Cuenta{

    saldo: number = 0;
    error: string = "";


    constructor(saldoInicial: number = 0){

        this.saldo = Number(saldoInicial);
    }

    consultarSaldo() : number{
        return this.saldo;
    }

    depositar(monto : number){
        
        this.saldo += Number(monto); 
    }

    extraer(monto: number){
        if(this.saldo >= monto )
            this.saldo -= monto;
        else this.error = "saldo insuficiente";      
    }

}