
//Inicializar operación nativa de recibir datos
const readline = require("readline");

// Definición de la clase Banco
class Banco {
  constructor(nombre, saldoInicial = 0) {
    this.nombre = nombre;
    this.saldoInicial = saldoInicial;
  }

  Depositar(montoDepositar, descuentoDepositado) {
    this.saldoInicial += montoDepositar;
    this.saldoInicial -= descuentoDepositado;
    console.log("Se depositó $" + montoDepositar);
    console.log("Por cada deposito el banco le restará: " + descuentoDepositado)
    console.log("Su saldo es de $" + this.saldoInicial);
  }

  Retirar(vRetirar) {
    if (vRetirar <= this.saldoInicial) {
      this.saldoInicial -= vRetirar;
      console.log(
        "Retiraste $" +
          vRetirar +
          ". El saldo actual es de $" +
          this.saldoInicial
      );
    } else {
      console.log("El saldo es insuficiente");
    }
  }

  ConsultarSaldo() {
    console.log("El saldo es de $" + this.saldoInicial);
  }

  Prestar(montoPrestar, interes) {

         // 20      =     10        *  2
    const montoTotal = montoPrestar * interes;

    console.log(
      "Realizas un prestamo de $" +
        montoPrestar +
        " el total a pagar con intereses es de $" +
        montoTotal
    );
  }
}

// Función para iniciar el programa
function iniciarPrograma() {

   
   //función para obtener desde terminal el dato que ingrese el usuario
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  // Crear una instancia de Banco
  const miBanco = new Banco("Mi Banco");

  // Función para mostrar el menú
  function mostrarMenu() {
    console.log("\nBienvenido al Banco " + miBanco.nombre);
    console.log("1. Depositar");
    console.log("2. Retirar");
    console.log("3. Consultar Saldo");
    console.log("4. Prestar");
    console.log("5. Salir");
    rl.question("Seleccione una opción: ", (opcion) => {
      // Convertir la opción a número
      opcion = parseInt(opcion);

      // Ejecutar la opción seleccionada
      switch (opcion) {
        case 1:
          rl.question("Ingrese el monto a depositar: ", (monto) => {
            miBanco.Depositar(parseFloat(monto), descuentoDepositado);
            mostrarMenu(); // Mostrar el menú nuevamente
          });
          break;
        case 2:
          rl.question("Ingrese el monto a retirar: ", (monto) => {
            miBanco.Retirar(parseFloat(monto));
            mostrarMenu(); // Mostrar el menú nuevamente
          });
          break;
        case 3:
          miBanco.ConsultarSaldo();
          mostrarMenu(); // Mostrar el menú nuevamente
          break;
        case 4:
          rl.question("Ingrese el monto a prestar: ", (monto) => {
            miBanco.Prestar(parseFloat(monto), interes);
            mostrarMenu(); // Mostrar el menú nuevamente
          });
          break;
        case 5:
          rl.close(); // Cerrar el programa
          break;
        default:
          console.log("Opción no válida.");
          mostrarMenu(); // Mostrar el menú nuevamente
      }
    });
  }

  var interes; 
  var descuentoDepositado;

  //Función para mostrar sucursales

  function mostrarSucursal() {
    console.log("Elige tu sucursal");
    console.log("1. EuroBank");
    console.log("2. AmericaBank");
    console.log("3. AsiaBank");
    console.log("4. OceanBank");
    console.log("5. Salir");
    rl.question("Seleccione una opción: ", (opcion) => {
      // Convertir la opción a número
      opcion = parseInt(opcion);

      // Ejecutar la opción seleccionada
      switch (opcion) {
        case 1:
           interes = 1.3;
           descuentoDepositado = 5;

          break;
        case 2:
           interes = 1.5;
           descuentoDepositado = 6;

          break;
        case 3:
          interes = 1.2;
          descuentoDepositado = 3;

          break;
        case 4:
          interes = 2.3;
          descuentoDepositado = 8;

          break;
        case 5:
          rl.close(); // Cerrar el programa
          break;
        default:
          console.log("Opción no válida.");
          mostrarSucursal(); // Mostrar el menú nuevamente
      }
      mostrarMenu();
    });
  }

//Muestra el primer menú
  mostrarSucursal();

}

// Iniciar el programa
iniciarPrograma();
