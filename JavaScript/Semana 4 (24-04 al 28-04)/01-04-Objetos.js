let x = 10; //Variable de tipo primitivo
console.log(x.length);
console.log('Tipos primitivos');

//Objeto 
let persona = {
    nombre: 'Carlos',
    apellido: 'Gil',
    email: 'cgil@gmail.com',
    edad: 30,
    nombreCompleto: function(){//Método o funcion en JavaScript
        return this.nombre +' '+this.apellido;
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