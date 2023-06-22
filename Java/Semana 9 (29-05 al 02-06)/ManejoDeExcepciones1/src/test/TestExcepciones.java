package test;

import static aritmetica.Aritmetica.division;
import Excepciones.OperacionExcepcion;

public class TestExcepciones {
    public static void main(String[] args) {
        int resultado = 0;
        try{
            resultado = division(10, 2);
            
        }catch(OperacionExcepcion e){
            System.out.println("Ocurrió un error de tipo OperaciónExcepción");
            System.out.println(e.getMessage());
        } catch(Exception e){
            System.out.println("Ocurrió un error");
            e.printStackTrace(System.out);
            System.out.println("e.getMessage");
        }
        finally{
            System.out.println("Se reviso la división entre cero");
        }
        System.out.println("La variable de resultado tiene como valro= "+resultado);
        
    }
}
