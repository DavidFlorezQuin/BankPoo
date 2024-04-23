const Banco = require('./banco'); 

class EuroBank extends Banco {
    constructor(saldoInicial, intereses) {
        super("EuroBank", saldoInicial); // Ajustar el constructor de super para pasar el nombre y el saldo inicial
        this.intereses = intereses; 
    }

}

// Ejemplo de uso de la clase EuroBank
const miSucursal = new EuroBank(1000, 12); // Inicializar el saldo inicial con un valor adecuado
miSucursal.TransferirDinero(23, 1, 1231);
