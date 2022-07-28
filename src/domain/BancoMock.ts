import { Cuenta } from "./Cuenta";

export class BancoMock {
    public cuentaDestino: Cuenta = new Cuenta();

    transferir(cuentaOrigen: Cuenta, nroCuentaDestino: number, monto: number){
        cuentaOrigen.extraer(monto);
        //validar

        this.cuentaDestino = this.getCuenta(nroCuentaDestino);
        this.cuentaDestino.depositar(monto);
    }

    getCuenta(nroCuenta: number): Cuenta {
        return new Cuenta();
    }
}