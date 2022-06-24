Feature: Operaciones con cuentas

  Scenario: Depositar dinero
    Given Una cuenta con un saldo inicial de $100
    When Cuando deposito $100
    Then El saldo de la cuenta tiene que ser de $200
