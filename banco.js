
// CONSTRUCTOR

class Banco {
   constructor(nombre, saldoInicial = 0) {
      this.nombre = nombre
      this.saldoInicial = saldoInicial
   }

   // ENCAPSULAMIENTO

   set nombre(nombre) {
      this._nombre = this.nombre;
   }

   get nombre() {
      return this._nombre;
   }
   set saldoInicial(saldoInicial) {
      this._saldoInicial = saldoInicial;
   }

   get saldoInicial() {
      return this._saldoInicial;
   }

   // MÉTODO DEPOSITAR
   Depositar(montoDepositar) {
      this.saldoInicial += montoDepositar;
      console.log();
      console.log("Depositar:");
      console.log("Se depositó $" + montoDepositar);
      console.log("El saldo es de $" + this.saldoInicial);
      console.log();
   }

   // MÉTODO DE RETIRAR DINERO
   Retirar(vRetirar) {
      if (vRetirar <= this.saldoInicial) {
         this.saldoInicial -= vRetirar;
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
      montoTotal = montoPrestar * interes;
      console.log("Prestamo:");
      console.log("La tasa de interes es del " + interes + "%");
      console.log("Realizas un prestamo de $" + montoPrestar + " el total a pagar con intereses es de $" + montoTotal);
      console.log();
   }


   TransferirDinero(montoTransferir, recaudo, cuenta) {

      let totalTransferir = montoTransferir * recaudo;

      if (totalTransferir <= this.saldoInicial) {

         this.saldoInicial -= totalTransferir;
         console.log("El dinero se tranferirá a la cuenta: " + cuenta)
         console.log("El saldo que quedo es de $" + this.saldoInicial)
      } else {
         console.log("El saldo es insuficiente")
      }
   }

   //PRESTAR DINERO A 5 CUOTAS CON EL VALOR DE INTERES ACUMULADOS
   SimularPrestamo(tasaInteres, cantidadPrestamo, cantidadCuotas) {
      if (tasaInteres <= 0 || cantidadPrestamo <= 0 || cantidadCuotas <= 0) {
         console.log("Error, Los datos deben ser mayores a 0");
         return;
      }

      const interesAcumulados = cantidadPrestamo * (tasaInteres / 100) * cantidadCuotas;
      const montoTotal = cantidadPrestamo + interesAcumulados;
      console.log("Simular Prestamo: ");
      console.log("El monto a prestar es de $" + cantidadPrestamo);
      console.log("Más la tasa de interes del " + tasaInteres + "%");
      console.log("Por un periodo de " + cantidadCuotas + (cantidadCuotas == 1 ? " mes" : " meses"));
      console.log("Dónde el valor acumulado de los interes de " + (cantidadCuotas == 1 ? "la " : "las ") + cantidadCuotas + (cantidadCuotas == 1 ? " cuota" : " cuotas") + " es de $" + interesAcumulados);
      console.log("Entonces el total a pagar a lo largo de " + cantidadCuotas + (cantidadCuotas == 1 ? " mes" : " meses") + " es de $" + montoTotal);
   }

   // Método para calcular intereses acumulados
   CalcularIntereses(tasaInteres, periodoMeses) {
      if (tasaInteres <= 0 || periodoMeses <= 0) {
         console.log("Error: La tasa de interés y el periodo deben ser mayores a 0.");
         return;
      }

      const interesAcumulados = this._saldoInicial * (tasaInteres / 100) * periodoMeses;
      console.log("Intereses Acumulados:");
      console.log(`Con una tasa de interés del ${tasaInteres}% durante ${periodoMeses} meses, los intereses acumulados son de $${interesAcumulados}.`);
   }

}


// const miBanco = new Banco("Bancolombia", 0);
// miBanco.Depositar(500);
// miBanco.Retirar(300);
// miBanco.ConsultarSaldo();
// miBanco.Prestar(600);
//const miBanco = new Banco("Bancolombia", 1000);
//miBanco.CalcularIntereses(5, 12); // Calcula intereses acumulados al 5% durante 12 meses
module.exports = Banco; // Exportar la clase Banco
