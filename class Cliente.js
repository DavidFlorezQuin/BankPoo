class Banco {
    constructor(nombre, direccion, telefono) {
        this._nombre = nombre;
        this._direccion = direccion;
        this._telefono = telefono;
    }

    obtenerNombre() {
        return this._nombre;
    }

    obtenerDireccion() {
        return this._direccion;
    }

    obtenerTelefono() {
        return this._telefono;
    }
}

module.exports = Cliente;
