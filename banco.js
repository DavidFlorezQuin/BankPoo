
///CLASE PADRE
class Banco {
   // Constructor de la clase Banco
   constructor(nombre, saldoInicial = 0) {
      this.nombre = nombre; // Asigna el nombre del banco
      this.saldoInicial = saldoInicial; // Asigna el saldo inicial
   }

   // ENCAPSULAMIENTO

   // Setter para el nombre del banco
   set nombre(nombre) {
      this._nombre = nombre; // Asigna el nombre utilizando una variable interna
   }

   // Getter para el nombre del banco
   get nombre() {
      return this._nombre; // Retorna el nombre almacenado en la variable interna
   }

   // Setter para el saldo inicial
   set saldoInicial(saldoInicial) {
      this._saldoInicial = saldoInicial; // Asigna el saldo inicial utilizando una variable interna
   }

   // Getter para el saldo inicial
   get saldoInicial() {
      return this._saldoInicial; // Retorna el saldo inicial almacenado en la variable interna
   }

   // MÉTODO DEPOSITAR
   Depositar(montoDepositar) {
      this.saldoInicial += montoDepositar; // Incrementa el saldo con el monto depositado
      console.log();
      console.log("Depositar:");
      console.log("Se depositó $" + montoDepositar);
      console.log("El saldo es de $" + this.saldoInicial);
      console.log();
   }

   // MÉTODO DE RETIRAR DINERO
   Retirar(vRetirar) {
      if (vRetirar <= this.saldoInicial) {
         this.saldoInicial -= vRetirar; // Reduce el saldo con el monto a retirar
         console.log("Retirar:");
         console.log("Retiraste $" + vRetirar + ". El saldo actual es de $" + this.saldoInicial)
         console.log();
      } else {
         console.log("El saldo es insuficiente");
         console.log();
      }
   }

   // CONSULTAR SALDO
   ConsultarSaldo() {
      console.log("Consultar saldo:");
      console.log("El saldo es de $" + this.saldoInicial);
      console.log();
   }

   // PRESTAR DINERO A UNA CUOTA
   Prestar(montoPrestar, montoTotal, interes = 1.10) {
      montoTotal = montoPrestar * interes; // Calcula el monto total a pagar con intereses
      console.log("Prestamo:");
      console.log("La tasa de interes es del " + interes + "%");
      console.log("Realizas un prestamo de $" + montoPrestar + " el total a pagar con intereses es de $" + montoTotal);
      console.log();
   }

   // Resto de métodos de la clase...

   // Método para calcular intereses acumulados
   CalcularIntereses(tasaInteres, periodoMeses) {
      if (tasaInteres <= 0 || periodoMeses <= 0) {
         console.log("Error: La tasa de interés y el periodo deben ser mayores a 0.");
         return;
      }

      const interesAcumulados = this._saldoInicial * (tasaInteres / 100) * periodoMeses; // Calcula los intereses acumulados
      console.log("Intereses Acumulados:");
      console.log(`Con una tasa de interés del ${tasaInteres}% durante ${periodoMeses} meses, los intereses acumulados son de $${interesAcumulados}.`);
   }

}

module.exports = Banco; // Exportar la clase Banco



// const miBanco = new Banco("Bancolombia", 0);
// miBanco.Depositar(500);
// miBanco.Retirar(300);
// miBanco.ConsultarSaldo();
// miBanco.Prestar(600);
//const miBanco = new Banco("Bancolombia", 1000);
//miBanco.CalcularIntereses(5, 12); // Calcula intereses acumulados al 5% durante 12 meses
module.exports = Banco; // Exportar la clase Banco
