package test;

import domain.Persona;

public class TestForEach {
    public static void main(String[] args) {
        int edades[] = {5, 6, 8, 9}; //Sintaxis resumida, arreglo 4 elementos
        for (int edad: edades) { //Sintaxis del for each // no puerdo usar **var**
            System.out.println("edad = " + edad);
            
        }
        Persona personas[] = {new Persona("Juan"), new Persona("Carla"), new Persona("Florencia")};
        
        
        //FOR EACH
        for(Persona persona: personas){
            System.out.println("persona = " + persona);
        }
    }
}
