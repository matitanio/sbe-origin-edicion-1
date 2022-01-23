import { binding, given, then, when} from 'cucumber-tsflow';
import { assert } from 'chai';
import {Account} from '../src/domain/Account'; 

@binding()
export class BankAccountSteps {
  
  private account: Account;

  constructor() {
    this.account =  new Account();
  }

  @given(/A bank account with starting balance of \$(\d*)/)
  public givenAnAccountWithStartingBalance(amount: number) {
    
    this.account.deposit(amount);
  }

  @when(/\$(\d*) is deposited/)
  public deposit(amount: number) {
    
    this.account.deposit(amount);
  }

  @then(/The bank account balance should be \$(\d*)/)
  public accountBalanceShouldEqual(expectedAmount: number) {
    
    assert.equal(this.account.balance, expectedAmount);
  }
}
