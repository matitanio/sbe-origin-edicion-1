import { binding, given, then, when} from 'cucumber-tsflow';
import { assert } from 'chai';
import {Cuenta} from '../src/domain/Cuenta'; 

@binding()
export class BankAccountSteps {
  
  private account: Cuenta;

  constructor() {
    this.account =  new Cuenta();
  }

  @given(/Una cuenta con un saldo inicial de \$(\d*)/)
  public unaCuentaCon(saldoInicial: number) {
    
    this.account.depositar(saldoInicial);
  }

  @when(/Cuando deposito \$(\d*)/)
  public depositamos(monto: number) {
    
    this.account.depositar(monto);
  }

  @then(/El saldo de la cuenta tiene que ser de \$(\d*)/)
  public laCuentaDeberTenerUn(saldoEsperado: number) {
    
    assert.equal(this.account.saldo, saldoEsperado);
  }
}
