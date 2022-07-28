export class Cuenta{

    saldo: number = 0;
    error: string = "";
    acuerdo: number = 0;
    interes: number = 0;

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
            let montoSobregirado = this.saldo - monto;
            let interesAplicado = 0;
             
            if(montoSobregirado < 0)           
                interesAplicado =  Math.abs(montoSobregirado)  * (this.interes / 100);
             this.saldo -= monto + interesAplicado;
        }
        else
        {
            if (this.acuerdo == 0)
                this.error = "saldo insuficiente"; 
            else
                this.error = "saldo insuficiente. Imposible cubrir con el acuerdo"
        }          
    }

    configAcuerdo(montoAcuerdo: number, interes: number) {
        this.acuerdo = montoAcuerdo;
        this.interes = interes;
    }
}