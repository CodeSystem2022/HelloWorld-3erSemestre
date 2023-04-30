let conteo = 0;
let numero = prompt("Digite un número: ");
while(numero >=0){
    console.log("El número "+numero+" es positivo")
    conteo++;
    numero = prompt("Digite otro número")
}
console.log("Usted ingresó "+conteo+" números que NO son negativos")
