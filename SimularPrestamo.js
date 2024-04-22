const Banco = require('./banco'); 

class SimularPrestamo extends Banco {
    constructor(saldoInicial) {
        super("Simular Prestamo", saldoInicial);
    }

}

// Ejemplo de uso de la clase EuroBank
const simulacion = new SimularPrestamo(1000); // Inicializar el saldo inicial con un valor adecuado
simulacion.SimularPrestamo(10, 600, 4); //tasaInteres, cantidadPrestamo, Cantidadcuotas
