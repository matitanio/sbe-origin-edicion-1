import { binding, given, then, when} from 'cucumber-tsflow';
import { assert } from 'chai';
import {Account} from '../src/domain/Account'; 

@binding()
export class BankAccountSteps {
  
  private account: Account;

  constructor() {
    this.account =  new Account();
  }

  @given(/Una cuenta con un saldo inicial de \$(\d*)/)
  public givenAnAccountWithStartingBalance(amount: number) {
    
    this.account.deposit(amount);
  }

  @when(/Cuando deposito \$(\d*)/)
  public deposit(amount: number) {
    
    this.account.deposit(amount);
  }

  @then(/El saldo de la cuenta tiene que ser de \$(\d*)/)
  public accountBalanceShouldEqual(expectedAmount: number) {
    
    assert.equal(this.account.balance, expectedAmount);
  }
}
