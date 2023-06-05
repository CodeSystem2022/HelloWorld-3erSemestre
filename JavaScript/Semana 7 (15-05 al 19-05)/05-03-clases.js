class Persona{//CLASE PADRE

    static contadorPersonas = 0; //Atributo estatico
    //email = 'Valor default email'; //Atributo No Estatico

    static get MAX_OBJ(){//simula una constante
        return 5;
    }

    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
        if(Persona.contadorPersonas < Persona.MAX_OBJ){
            this.idPersona = ++Persona.contadorPersonas;
        }
        else{
            console.log('Se ha superado el maximo de objetos permitidos');
        }
        //this.idPersona = ++Persona.contadorPersonas
        //console.log('Se incrementa el contador : '+Persona.contadorObjetosPersona);
    
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
    //Herencia, para heredarlo a la clase hija
    nombreCompleto(){
        return this.idPersona+' '+this._nombre+' '+this._apellido;
    }
    //sobreescritura de la clase padre(Object)
    toString(){
        //polimorfismo
        //se va a ejecutar dependiendo el objeto
        //objeto de la clase hija (empleado1)=> se ejecuta la clase hija
        //si llamo el objeto de la clase padre como Persona1
        //=> solo me muestra lo de la clase padre
        return this.nombreCompleto();
    }

    static saludar(){
        console.log('Saludos desde este metodo STATIC');
    }

    static saludar2(persona){
        console.log(persona.nombre+ ' '+persona.apellido);
    }

}

class Empleado extends Persona{//CLASE HIJA
    constructor(nombre, apellido, departamento){
        super(nombre,apellido)
        this._departamento = departamento;
    }
    get departamento(){
        return this._departamento;
    }
    set departamento(departamento){
        this._departamento = departamento;
    }
    
    //SobreEscritura
    nombreCompleto(){
        return super.nombreCompleto()+', '+this._departamento;
    }
}

let persona1 = new Persona('Martin', 'Perez');
console.log(persona1.nombre);
persona1.nombre = 'Juancho';
console.log(persona1.nombre);
//console.log(persona1);
console.log(persona1.apellido);
persona1.apellido = 'Lopez';
console.log(persona1.apellido);

let persona2 = new Persona('Carlos','Sanchez');
console.log(persona2.nombre);
persona2.nombre = 'Maria Laura';
console.log(persona2.nombre);
//console.log(persona2);
console.log(persona2.apellido);
persona2.apellido = 'Funez';
console.log(persona2.apellido);

let empleado1 = new Empleado('Juancho','Lopez','Sistemas');
console.log(empleado1);
console.log(empleado1.nombreCompleto());

//Object.prototype.toString .... asi accedemos de manera dinamica
console.log(empleado1.toString());
//lo saca de la clase Hija aunque lo hayamos creado en la clase padre
//porque lo llame por empleado1 que es de la clase hija

//ahora lo llamo como persona1 y viene de la clase padre
console.log(persona1.nombreCompleto());

//persona1.saludar(); //no se utiliza desde el objeto
Persona.saludar();

Persona.saludar2(persona1);

Empleado.saludar();
Empleado.saludar2(persona2);

//console.log(persona1.contadorObjetosPersona);
console.log(Persona.contadorObjetosPersona);
console.log(Empleado.contadorObjetosPersona);

console.log(persona1.email);
console.log(empleado1.email);//se accede desde la variable
//no se puede acceder desde la clase

console.log(persona1.toString());
console.log(persona2.toString());
console.log(empleado1.toString());

console.log(Persona.contadorPersonas);

let persona3 = new Persona('Clara','Gonzalez');
console.log(persona3.toString());

let persona4 = new Persona('Silvestre','Rodriguez');
console.log(persona4.toString())
console.log(Persona.contadorPersonas);

console.log(Persona.MAX_OBJ);//metodo que funciona directamente desde la clase
//Persona.MAX_OBJ = 10;
console.log(Persona.MAX_OBJ);//no se puede alterar

let persona5 = new Persona('Asier','Prieto');
console.log(persona5.toString())