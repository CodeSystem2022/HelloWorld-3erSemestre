let conteo = 0;
let suma = 0;
let promedio = 0;
let numero = prompt("Digite un número: ")
while(numero >= 0){
    suma += parseFloat(numero);
    conteo++;
    numero = prompt("Digite otro número: ")    
}
if (conteo == 0){
    console.log("Error, la division entre cero no existe")
}
else{
    promedio = suma/conteo;
    console.log("El promedio de los números ingresados es: "+promedio);
    
}