//while
let contador = 0;

while(contador < 3){
    console.log(contador);
    contador++;
}
console.log("Fin del ciclo while")

//Do While
let conteo = 0;
do{

    console.log(conteo);
    conteo++;

}while(conteo < 3);
console.log("Fin del ciclo do while");

//For

for (let contando = 0; contando < 3; contando++) {
    console.log(contando);     
}
console.log("Fin del ciclo for")


/* for (let contando = 0; contando < 10; contando++) {

    if((contando%2 == 0)){
        console.log(contando+" es par")
    }else{
        console.log(contando+" Es impar");
    }    
}
console.log("Termina el ciclo que diferencia los pares"); */

for (let contando = 0; contando < 10; contando++) {

    if((contando%2 == 0)){
        console.log(contando+" es par");
        break;//Dejara de iterar cuando encuentre en primer número par.
    }
}
console.log("Termina el ciclo que diferencia los pares");

//Palabra reservada break

for(let contando = 0; contando <= 10; contando++){
    if (contando%2 == 0) {
        console.log(contando); //Muestra todos los pares
        break;
    }
}

console.log("Termina el ciclo al encontrar el primer número par.");

//Palabra continue

for(let contando = 0; contando <= 10; contando++){
    if (contando%2 !== 0) {
        continue; //Continua con la siguiente iteración
    }   
    console.log(contando);
}
console.log("Termina el ciclo");

//Etiquetas labels

inicio:
for(let contando = 0; contando <= 10; contando++){
    if (contando%2 !== 0) {
        break inicio; //Continua con la siguiente iteración
    }   
    console.log(contando);
}
console.log("Termina el ciclo");