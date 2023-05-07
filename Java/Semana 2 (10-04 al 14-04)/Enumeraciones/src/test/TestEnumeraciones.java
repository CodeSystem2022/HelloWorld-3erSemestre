package test;

import enumeraciones.Continentes;
import enumeraciones.Dias;


public class TestEnumeraciones {
    public static void main(String[] args) {
        //System.out.println("Día 1: "+Dias.LUNES);
        indicarDiaSemana(Dias.MARTES);//Las enumeraciones se tratan como cadenas 
        //No se deben utilizar comillas, se accede a través del operador de punto
        
        System.out.println("Continente N°. 1: "+Continentes.AFRICA);
        System.out.println("N°. de paises en el 1°. contienete: "+Continentes.AFRICA.getPaises());
        System.out.println("N°. de habitantes en el 1°. contienete: "+Continentes.AFRICA.getHabitantes());

        System.out.println("Continente N°. 2: "+Continentes.EUROPA);
        System.out.println("N°. de paises en el 2do. contienete: "+Continentes.EUROPA.getPaises());
        System.out.println("N°. de habitantes en el 2do. contienete: "+Continentes.EUROPA.getHabitantes());

        System.out.println("Continente N°. 3: "+Continentes.ASIA);
        System.out.println("N°. de paises en el 3er. contienete: "+Continentes.ASIA.getPaises());
        System.out.println("N°. de habitantes en el 3er. contienete: "+Continentes.ASIA.getHabitantes());

        System.out.println("Continente N°. 4: "+Continentes.AMERICA);
        System.out.println("N°. de paises en el 4to. contienete: "+Continentes.AMERICA.getPaises());
        System.out.println("N°. de habitantes en el 4to. contienete: "+Continentes.AMERICA.getHabitantes());

        System.out.println("Continente N°. 5: "+Continentes.OCEANIA);
        System.out.println("N°. de paises en el 5to. contienete: "+Continentes.OCEANIA.getPaises());
        System.out.println("N°. de habitantes en el 5to. contienete: "+Continentes.OCEANIA.getHabitantes());

    }
    
    private static void indicarDiaSemana(Dias dias){
        switch(dias){
            case LUNES:
                System.out.println("Primer día de la semana");
                break;
            case MARTES:
                System.out.println("Segundo día de la semana");
                break;
            case MIERCOLES:
                System.out.println("Tercer día de la semana");
                break;
            case JUEVES:
                System.out.println("Cuarto día de la semana");
                break;
            case VIERNES:
                System.out.println("Quinto día de la semana");
                break;
            case SABADO:
                System.out.println("Sexto día de la semana");
                break;
            case DOMINGO:
                System.out.println("Séptimo día de la semana");
                break;
            default:
                System.out.println("No existe el día ingresado");
                
        }
    }
}
