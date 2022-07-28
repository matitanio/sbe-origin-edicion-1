import { binding, given, then, when} from 'cucumber-tsflow';
import { assert } from 'chai';
import {Cuenta} from '../src/domain/Cuenta'; 
import { BancoMock } from '../src/domain/BancoMock';
//import { setDefaultTimeout } from 'cucumber';

//setDefaultTimeout(10000);


@binding()
export class BankAccountSteps {
  
  private account: Cuenta;
  private banco: BancoMock;

  constructor() {
    this.account =  new Cuenta();
    this.banco = new BancoMock();
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

  @when(/Cuando ingreso (\d+)/)
  public ingresarDinero(monto: number) {
    this.account.depositar(monto);
  }

  @when(/Cuando transfiero a la cuenta (\d+) un monto de (\d+)/)
  public transferir(nroCuenta: number, monto: number) {
    this.banco.transferir(this.account, nroCuenta, monto);
  }

  @then(/El saldo de la cuenta tiene que ser de (-?\d+)/)
  public laCuentaDeberTenerUn(saldoEsperado: number) {
    assert.equal(this.account.saldo, saldoEsperado);
  }

  @then(/El error debe ser (.*)/)
  public mostrarMensajeError(mensajeError: string) {
    assert.equal(this.account.error, mensajeError);
  }
}