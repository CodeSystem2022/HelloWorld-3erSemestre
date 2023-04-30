let suma = 0;
let numero;
for(let i = 1; i <= 10;i++){
    numero = prompt("Digite a continuación 10 números: ");
    suma+= parseFloat(numero);

}
console.log("La suma de todos los números es: "+suma);
