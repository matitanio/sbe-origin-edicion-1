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
  public unaCuentaConSaldoInicial(amount: number) {
    
    this.account.deposit(amount);
  }

  @when(/Cuando deposito \$(\d*)/)
  public depositamos(amount: number) {
    
    this.account.deposit(amount);
  }

  @then(/El saldo de la cuenta tiene que ser de \$(\d*)/)
  public elSaldoDeLaCuentaDebeSer(expectedAmount: number) {
    
    assert.equal(this.account.balance, expectedAmount);
  }
}
