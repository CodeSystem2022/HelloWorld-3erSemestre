let suma = 0;
let numero;
do{
    numero = prompt("Digite un número: ")
    suma += parseFloat(numero);
}while(numero != 0 );
console.log("La suma de todos los números es: "+suma);

