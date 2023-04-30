let numero = prompt("Digite un número para calcular su factorial");
let factorial = 1;
for(let i=1;i<=numero;i++){
    factorial *= i;
}
console.log("El factorial del número ingresado es: "+factorial)
