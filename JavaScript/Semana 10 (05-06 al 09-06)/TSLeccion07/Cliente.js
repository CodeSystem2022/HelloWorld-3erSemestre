class Cliente extends Persona{

    static contadorClietes = 0;

    constructor(nombre, apellido, edad, fechaRegistro){
        suepr(nombre,apellido,edad);
        this._idCliente =++Cliente.contadorClietes;
        this._fechaRegistro =fechaRegistro;
    }

    get idCliente(){
        return this._idCliente;
    }

    get fechaRegistro(){
        return this._fechaRegistro;
    }
    
    set fechaRegistro(fechaRegistro){
        this._fechaRegistro = fechaRegistro;
    }

    toString(){
        return `
        ${super.toString()} 
        ${this._idCliente} 
        ${this._fechaRegistro}`;
    }
}