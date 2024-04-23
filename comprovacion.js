const Sucursal = require('./sucursal');
const Cliente = require('./class Cliente');

// Código de uso de las clases
const sucursal = new Sucursal("Banco ABC", "Calle Principal", "123456789", 1, 5, 10000);
const cliente = new Cliente("Juan", "Calle Secundaria", "987654321");

console.log(`Nombre del banco: ${sucursal.obtenerNombre()}`);
console.log(`Saldo inicial de la sucursal: ${sucursal.obtenerBalance()}`);
sucursal.depositar(5000);
console.log(`Saldo actual de la sucursal: ${sucursal.obtenerBalance()}`);
sucursal.retirar(3000);
console.log(`Saldo actual de la sucursal: ${sucursal.obtenerBalance()}`);

sucursal.prestar(cliente, 11000);
console.log(`Saldo actual de la sucursal: $${sucursal.consultarSaldo()}`);
