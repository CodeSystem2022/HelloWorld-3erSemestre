import java.util.Scanner;
public class CalculadoraUTN2 {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        while (true){// Ciclo infinito
            System.out.println("************ APLICACION CALCULADORA ************");
            mostrarMenu();
            try {
                var operacion = Integer.parseInt(entrada.nextLine());
                if (operacion >= 1 && operacion <= 4) {

                    ejecutarOperacion(operacion,entrada);

                }//Fin  IF
                else if (operacion == 5) {
                    System.out.println("Hasta pronto...");
                    break;//rompe el ciclo y sale
                } else {
                    System.out.println("Opción Erronea: " + operacion);
                }
                //imprimimos un salto de linea antes de repetir
                System.out.println();
            } catch (Exception e){//Fin try, Comienzo catch
                System.out.println("Ocirrio un error : " + e.getMessage());}
            System.out.println();
        }//Fin while
    }//Fin main

    private static void mostrarMenu(){
        //Mostramos el Menú
        System.out.println("""
                    1.Suma
                    2.Resta
                    3.Multiplicacion
                    4.Division
                    5.Salir
                    """);
        System.out.println("Operacion a realizar? ");
    }//Fin metodo mostrar menu
    private static void ejecutarOperacion(int operacion, Scanner entrada){
        System.out.println("Digite el valor para el operando 1: ");
        var operando1 = Double.parseDouble(entrada.nextLine());
        System.out.println("Digite el valor para el operando 2: ");
        var operando2 = Double.parseDouble(entrada.nextLine());
        Double resultado;
        switch (operacion) {
            case 1 -> {
                resultado = operando1 + operando2;
                System.out.println("resultado de la Suma = " + resultado);
            }
            case 2 -> {
                resultado = operando1 - operando2;
                System.out.println("resultado de la Resta = " + resultado);
            }
            case 3 -> {
                resultado = operando1 * operando2;
                System.out.println("resultado de la Multiplicacion = " + resultado);
            }
            case 4 -> {
                resultado = operando1 / operando2;
                System.out.println("resultado de la Division = " + resultado);
            }
            default -> System.out.println("Opcion erronea: " + operacion);
        }//Fin Switch
    }//Fin metodo ejecutarOperacion
}//Fin Clase
