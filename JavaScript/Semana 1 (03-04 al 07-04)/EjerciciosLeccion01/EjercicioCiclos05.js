let numero;
let conteo = 0;
let aleatorio = Math.floor(Math.random() *101);
do{
    numero = prompt("Digite un número: ")
    if (numero < aleatorio){
        console.log("Ingrese un número mayor")
    }
    else if (numero > aleatorio){
        console.log("Ingrese un numero menor")
    }
    else{
        console.log("Felicidades has adivinado el numero")
    }
    conteo++;

}while(numero != aleatorio);
console.log("Has adivinado el número en "+conteo+" intentos")
