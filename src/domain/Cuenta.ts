export class Cuenta{

    saldo: number = 0;
    error: string = "";
    acuerdo: number = 0;

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
       
        if(this.saldo + this.acuerdo >= monto )
        {
            this.saldo -= monto;
        }          
        else this.error = "saldo insuficiente"; 
        
       
    }

    configAcuerdo(montoAcuerdo: number) {
        this.acuerdo = montoAcuerdo;
    }
}