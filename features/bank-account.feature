Feature: Operaciones con cuentas

  Scenario: Depositar dinero
    Given Una cuenta con un saldo inicial de 100
    When Cuando deposito 100
    Then El saldo de la cuenta tiene que ser de 200

  Scenario: Depositar dinero en cuenta con saldo negativo
    Given Una cuenta con un saldo inicial de -150
    When Cuando deposito 400
    Then El saldo de la cuenta tiene que ser de 250

  Scenario: Extraer dinero
    Given Una cuenta con un saldo inicial de 100
    When Cuando extraigo 100
    Then El saldo de la cuenta tiene que ser de 0

  Scenario: Extraer dinero de una cuenta con saldo insuficiente
    Given Una cuenta con un saldo inicial de 150
    When Cuando extraigo 400
    Then El saldo de la cuenta tiene que ser de 150
    Then El error debe ser saldo insuficiente

  Scenario: Extraer dinero de una cuenta con saldo suficiente, que tiene acuerdo
    Given Una cuenta con un saldo inicial de 100 
    Given Una cuenta con acuerdo de 300 y un interes de 10 porciento sobre descubierto
    When Cuando extraigo 100
    Then El saldo de la cuenta tiene que ser de 0
  
  Scenario: Extraer dinero de una cuenta con saldo insuficiente aplicando el acuerdo y su interes
    Given Una cuenta con un saldo inicial de 100 
    Given Una cuenta con acuerdo de 300 y un interes de 10 porciento sobre descubierto
    When Cuando extraigo 200
    Then El saldo de la cuenta tiene que ser de -110
  
  Scenario: Extraer dinero y sobrepaso el limite del acuerdo
    Given Una cuenta con un saldo inicial de 100 
    Given Una cuenta con acuerdo de 300 y un interes de 10 porciento sobre descubierto
    When Cuando extraigo 1000
    Then El error debe ser saldo insuficiente. Imposible cubrir con el acuerdo

  Scenario: Ingresar dinero
    Given Una cuenta con un saldo inicial de 100
    When Cuando ingreso 100
    Then El saldo de la cuenta tiene que ser de 200