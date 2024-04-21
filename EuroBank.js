const Banco = require('./Banco'); 

class EuroBank extends Banco {
    constructor(saldoInicial, intereses) {
        super("EuroBank", saldoInicial); // Ajustar el constructor de super para pasar el nombre y el saldo inicial
        this.intereses = intereses; 
    }

    TransferirDinero(montoTransferir, recaudo, cuenta) {
        let totalTransferir = montoTransferir * recaudo;

        if (totalTransferir <= this.saldoInicial) {
            this.saldoInicial -= totalTransferir;
            console.log("El dinero se transferirá a la cuenta: " + cuenta);
            console.log("El saldo que queda es de $" + this.saldoInicial);
        } else {
          console.log(totalTransferir); //1212
          console.log(this.saldoInicial); //0
            console.log("El saldo es insuficiente");
        }
    }
}

// Ejemplo de uso de la clase EuroBank
const miSucursal = new EuroBank(1000, 12); // Inicializar el saldo inicial con un valor adecuado
miSucursal.TransferirDinero(23, 1, 1231);
