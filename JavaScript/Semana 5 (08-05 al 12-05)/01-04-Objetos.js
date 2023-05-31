let x = 10; //Variable de tipo primitivo
console.log(x.length);
console.log('Tipos primitivos');

//Objeto 
let persona = {
    nombre: 'Carlos',
    apellido: 'Gil',
    email: 'cgil@gmail.com',
    edad: 28,
    idioma: 'ES',
    get lang(){
        return this.idioma.toUpperCase();
    },
    set lang(lang){
        this.idioma = lang.toUpperCase();//Se usa para convertir las minúsculas a mayúsculas
    },
    nombreCompleto: function(){//Método o funcion en JavaScript
        return this.nombre +' '+this.apellido;
    },
    get nombreEdad(){// Este es el metodo get
        return 'El nombre es: '+this.nombre+', edad: '+this.edad; 
    }
    
}
console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.edad);
console.log(persona.email);
console.log(persona);
console.log(persona.nombreCompleto());

console.log('Ejecutando con un objeto');
let persona2 = new Object();// Debe crear un nuevo objeto en memoria
persona2.nombre = 'Marcos';
persona2.apellido = 'Gomez';
console.log('Creamos un nuevo objeto');
persona2.direccion = 'Cuadro benegas';
persona2.telefono = '2604546638';
persona2.nombreCompleto = persona2.nombre+' '+ persona2.apellido;

console.log(persona2.nombre);
console.log(persona2.telefono);
console.log(persona2.direccion);
console.log(persona2.nombreCompleto);
console.log(persona2);

console.log(persona['apellido']); //Accedemos como si fuera un arreglo
console.log('Usamos el ciclo for in');
//for in y accedemos al objeto como si fuera un arreglo
for(propiedad in persona){
    console.log(propiedad)
    console.log(persona[propiedad])
}
console.log('Cambiamos y eliminamos un error');
persona.apellida= 'betancud';
console.log(persona.apellida);//Cambiamos dinamicamente el valor del objeto
delete persona.apellida; //Eliminamos el error
console.log(persona);
//persona.apellido = null;
//console.log(persona);


//Distintas formas de imprimir un objeto
//Numero 1 la mas sencilla
console.log('Distintas formas de imprimir un objeto: Numero 1 la mas sencilla');
console.log(persona.nombre+', '+persona.apellido);

//Numero 2 a traves del ciclo for in
console.log('Numero 2 a traves del ciclo for in');
for(nombrePropiedad in persona){
    console.log(persona[nombrePropiedad]);
}

//Numero 3 la funcion Object.values()
console.log('Numero 3 la funcion Object.values()');
let personaArray = Object.values(persona);
console.log(personaArray);

//Número 4: Utilizaremos el metodo JSON.stringify
console.log('Número 4: Utilizaremos el metodo JSON.stringify');
let personaString = JSON.stringify(persona);
console.log(personaString);

console.log('Comenzamos a utilizar el método get');
console.log(persona.nombreEdad);

console.log('Comenzamos con el método get y set para idiomas');
console.log(persona.lang);
persona.lang = 'en';
console.log(persona.lang);

function persona3(nombre, apellido, email){//Constructor
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre+' '+this.apellido;
    }
}
let padre = new persona3('Leo','Lopez','lopezL@gmail.com');
padre.nombre = 'Luis';
padre.telefono = '65564224621';// Una propiedad exclusiva del objeto padre
console.log(padre);
console.log(padre.nombreCompleto()); //Modificamos el nombre

let madre = new persona3('Laura','Contreras','ConterarasL@gmail.com');
console.log(madre); 
console.log(madre.telefono);//La propiedad no está definida
console.log(madre.nombreCompleto());

//diferentes formas de crar objetos
let miObjeto = new Object();
let miObjeto2 = {};

//caso String 1
let miCadena1 = new String('Hola');
let miCadena2 = 'Hola'; // sintaxis recomendada

//caso numeros
let miNumero = new Number(1);
let miNumero2 = 1; //recomendada

//Booleanos
let miBoolean1 = new Boolean(false);
let miBoolean2 = false; //recomendada

//caso Arreglos
let miArreglo1 = new Array();
let miArreglo2 = []; //recomendada

//caso function
let miFuncion1 = new function(){};
let miFuncion2 = function(){}; // recomendada

//uso de prototype --> agrego una propuedad a todos los objetos
Persona3.prototype.telefono = '261232436';
console.log(padre);
console.log(madre.telefono);
madre.telefono = '2652404475';
console.log(madre.telefono)

//Uso de call
let persona4 = {
    nombre: 'Juan', 
    apellido: 'Perez',
    nombreCompleto2: function(titulo, telefono){
        return titulo+': '+this.nombre+' '+this.apellido+' '+telefono;
        //return this.nombre+' '+this.apellido;
    }
}

let persona5 = {
    nombre: 'Carlos',
    apellido: 'Lara',
}

console.log(persona4.nombreCompleto2('Lic.', '2604789456'));
console.log(persona4.nombreCompleto2.call(persona5, 'ingeniero','2604122334'));

//Metodo Apply
let arreglo = ['Ing.', '2625402021'];
console.log(persona4.nombreCompleto2.apply(persona5, arreglo));
//nos permite llamar un metodo en un objeto que no tiene definido cierto metodo, se ingresar 
//los argumentos necesarios para el metodo en un arreglo