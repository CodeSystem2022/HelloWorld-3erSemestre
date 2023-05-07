//CREACION DE ARRAYS O ARREGLOS
//let autos = new Array('Ferrari','Renault','BMW'); forma vieja de sintaxis, ya no se usa
const autos =['Ferrari','Renault','BMW'];
console.log(autos);

//Cómo recorrer el array  -- recordar que empiezan desde 0
console.log(autos[0]); 

for(let i = 0; i < autos.length; i++){
    console.log(i+' : '+autos[i]);
}

//Modificar los elementos del array
autos[1] = 'Volvo';
console.log(autos[1]);

//Agregar un elemento al array
autos.push('Audi'); // se agrega al final
console.log(autos);


//otra forma
autos[autos.length] = 'Porche' // tb se agrega al final
console.log(autos);

//otra manera  --> hay q tner cuidado para no desperdiciar memoria
// si mi array tiene 3 elementos y yo inserto el 5, perdi espacio..
autos[6] = 'Renault';
console.log(autos);

//Cómo preguntar si el codigo qeu tengo es un array
console.log(Array.isArray(autos)); //responde booleano
console.log(autos instanceof Array);
