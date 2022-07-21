import { binding, given, then, when} from 'cucumber-tsflow';
import { assert } from 'chai';
import {Cuenta} from '../src/domain/Cuenta'; 
//import { setDefaultTimeout } from 'cucumber';

//setDefaultTimeout(10000);


@binding()
export class BankAccountSteps {
  
  private account: Cuenta;

  constructor() {
    this.account =  new Cuenta();
  }

  @given(/Una cuenta con un saldo inicial de (-?\d+)/)
  public unaCuentaCon(saldoInicial: number) {
    this.account.depositar(saldoInicial);
  }

  @given(/Una cuenta con acuerdo de (\d+) y un interes de (\d+) porciento sobre descubierto/)
  public setAcuerdo(acuerdoMonto: number, interes: number) {
    this.account.configAcuerdo(acuerdoMonto, interes);
  }

  @when(/Cuando deposito (-?\d+)/)
  public depositamos(monto: number) {
    this.account.depositar(monto);
  }

  @when(/Cuando extraigo (\d+)/)
  public extraemos(monto: number) {
    this.account.extraer(monto);
  }

  @then(/El saldo de la cuenta tiene que ser de (-?\d+)/)
  public laCuentaDeberTenerUn(saldoEsperado: number) {
    assert.equal(this.account.saldo, saldoEsperado);
  }

  @then(/El error debe ser saldo insuficiente/)
  public pepe() {
    assert.equal(this.account.error, "saldo insuficiente");
  }
}