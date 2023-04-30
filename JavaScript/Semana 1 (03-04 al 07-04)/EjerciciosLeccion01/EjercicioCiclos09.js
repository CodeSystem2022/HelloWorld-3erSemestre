let dia = prompt("Digite el día: ");
let mes= prompt("Digite el mes: ");
let anio = prompt("Digite el año: ");
if((dia !=0)&&(dia <= 30)){
    if ((mes !=0)&&(mes <= 12)){
        if ((anio !=0)&&(anio <= 2023)){
            console.log("La fecha ingresada es: "+dia+"/"+mes+"/"+anio);
        }
        else{
            console.log("Fecha incorrecta, año incorrecto")
        }
    }
    else{
        console.log("Fecha incorrecta, mes incorrecto")
    }
}
else{
    console.log("Fecha incorrecta, día incorrecto")
}