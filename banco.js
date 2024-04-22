
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
      console.log("se deposito" + montoDepositar);
      console.log("tu saldo es:" + this.saldoInicial);
   }

   // MÉTODO DE RETIRAR DINERO
   Retirar(vRetirar) {
      if (vRetirar <= this.saldoInicial) {
         this.saldoInicial -= vRetirar;
         console.log("El saldo que quedo es de $" + this.saldoInicial)
      } else {
         console.log("El saldo es insuficiente")
      }
   }

// CONSULTAR SALDO
   ConsultarSaldo(){
      console.log("saldo que tienes" +this.saldoInicial)
   }

   // PRESTAR DINERO
   Prestar(montoPrestar,interes=1.10){
      montoPrestar=montoPrestar*interes;
      console.log("tu prestamo con interes incluido es:"+montoPrestar);
   }

   
   TransferirDinero(montoTransferir, recaudo, cuenta){

      let totalTransferir = montoTransferir * recaudo;

      if (totalTransferir <= this.saldoInicial) {

         this.saldoInicial -= totalTransferir;
         console.log("El dinero se tranferirá a la cuenta: "+cuenta)
         console.log("El saldo que quedo es de $" + this.saldoInicial)
      } else {
         console.log("El saldo es insuficiente")
      }
   }
   
}


// const miBanco = new Banco("Bancolombia", 0);
// miBanco.Depositar(500);
// miBanco.Retirar(300);
// miBanco.ConsultarSaldo();
// miBanco.Prestar(600);
// module.exports = Banco; // Exportar la clase Banco
