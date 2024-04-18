class Banco {
   constructor(nombre, saldoInicial = 0) {

      this.nombre = nombre
      this.saldoInicial = saldoInicial

   }

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


   Depositar(montoDepositar) {
      this.saldoInicial += montoDepositar;
      console.log("se deposito" + montoDepositar);
      console.log("tu saldo es:" + this.saldoInicial);
   }

   retirar(vRetirar) {
      if (vRetirar <= this.saldoInicial) {
         this.saldoInicial -= vRetirar;
         console.log("El saldo que quedo es de $" + this.saldoInicial)
      } else {
         console.log("El saldo es insuficiente")
      }
   }

   consultarSaldo(){
      console.log("saldo que tienes" +this.saldoInicial)
   }

   prestar(montoPrestar,interes=1.10){
      montoPrestar=montoPrestar*interes;
      console.log("tu prestamo con interes incluido es:"+montoPrestar);
   }
}

const miBanco = new Banco("Bancolombia", 0);
miBanco.Depositar(500);
miBanco.retirar(300);
miBanco.consultarSaldo();
miBanco.prestar(600);
