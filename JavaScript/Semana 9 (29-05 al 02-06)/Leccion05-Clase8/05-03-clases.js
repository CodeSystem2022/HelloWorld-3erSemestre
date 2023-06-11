//let persona3 = new Persona('Carla','Ponce'); Esto no se debe hacer

class Persona{ // Clase padre

    static contadorPersonas = 0;// Atributo estático
    //email = 'Valor default email'; //Atributo NO estático

    static get MAX_OBJ(){//Este metodo simula una constante
        return 5;
    }
        

    constructor(nombre, apellido){// Si no se define un constructor js agrega uno vacio automaticamente
        this._nombre = nombre;
        this._apellido = apellido;
        if(Persona.contadorPersonas <Persona.MAX_OBJ){
            this.idPersona = ++Persona.contadorPersonas;
        }
        else{
            console.log('Se ha superado el máximo de objetos permitidos ')
        }
        
        //console.log('Se incrementa el contador: '+Persona.contadorObjetosPersona);
        

    }

    get nombre(){
        return this._nombre;
    }
    get apellido(){
        return this._apellido;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }
    set apellido(apellido){
        this._apellido = apellido;
    }
    nombreCompleto(){
        return this.idPersona+' '+this._nombre+' '+this._apellido;
    }

    toString(){ // Regresa un string
        //Se aplica el polimorfismo(multiples formas en tiempo de ejecución)
        //El método que se ejecuta depende si es una referencia de tipo padre o hija
        return this.nombreCompleto();
    }
    static saludar(){
        console.log('Saludos desde este método static');
    }
    static saludar2(persona){
        console.log(persona.nombre+' '+persona.apellido);
    }
}

class Empleado extends Persona{// Clase hija
    constructor(nombre, apellido, departamento){
        super(nombre, apellido);
        this._departamento = departamento;
    }
    get departamento(){
        return this._departamento;
    }
    set departamento(departamento){
        this._departamento = departamento;
    }

    //Sobreescritura(modificar el comportamiento de un metodo de la clase padre)
    nombreCompleto(){
        return super.nombreCompleto()+', '+this._departamento;
    }
}

let persona1 = new Persona('Martin','Perez');
console.log(persona1.nombre);
persona1.nombre = 'Juan Carlos';
persona1.apellido = 'Genez';
console.log(persona1.nombre);
console.log(persona1.apellido);
//console.log(persona1);

let persona2 = new Persona('Carlos','Lara');
console.log(persona2.nombre);
persona2.nombre = 'María Laura';
persona2.apellido = 'Camacaro';
console.log(persona2.nombre);
console.log(persona2.apellido);
//console.log(persona2);

let empleado1 = new Empleado('María','Gimenez', 'Sistemas');
console.log(empleado1);
console.log(empleado1.nombreCompleto());

//Object.prototype.toString Esta es la manera de acceder a atributos y metodos de manera dinamica

console.log(empleado1.toString());
console.log(persona1.toString()); 

//persona1.saludar(); no se utiliza desde el objeto
 Persona.saludar();
 Persona.saludar2(persona1);
 Persona.saludar2(persona2);

 Empleado.saludar();
 Empleado.saludar2(empleado1);

//console.log(persona1.contadorObjetosPersona);
//console.log(Persona.contadorObjetosPersona);
//console.log(Empleado.contadorObjetosPersona);

//console.log(persona1.email);
//console.log(empleado1.email);
//console.log(Persona.email); No se puede acceder desde la clase porque no es estático 
console.log(persona1.toString());
console.log(persona2.toString());
console.log(empleado1.toString());
console.log(Persona.contadorPersonas);

let persona3 = new Persona('Carla', 'Pertossi');
console.log(persona3.toString());

console.log(Persona.MAX_OBJ);
Persona.MAX_OBJ = 10;//El valor sigue siendo 5 porque es una constante
console.log(Persona.MAX_OBJ); 

let persona4 = new Persona('Franco', 'Diaz');
console.log(persona4.toString());

let persona5 = new Persona('Marcos', 'Gómez');
console.log(persona5.toString());
