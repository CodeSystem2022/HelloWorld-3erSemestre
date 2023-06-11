
package test;

import aritmetica.Aritmética.division;



public class TestExcepciones {
    public static void main(String[] args) {
        int resultado = 0;
        try{
            resultado = Aritmética.division(10, 2);
        }catch(OperaciónException e){
            System.out.println("Ocurrió un error de tipo OperaciónExcepción");
            System.out.println(e.getmessage());
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
