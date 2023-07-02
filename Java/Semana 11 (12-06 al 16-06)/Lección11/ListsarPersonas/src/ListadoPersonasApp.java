import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class ListadoPersonasApp {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        //Definimos la lista fuera del ciclo While
        List<Persona> personas = new ArrayList<>();
        //Menu
        var salir = false;
        while(!salir){
            mostrarMenu();
            try{
                salir = ejecutarOperacion(entrada, personas);
            } catch (Exception e){
                System.out.println("Ocurrio un error: "+e.getMessage());
            }
            System.out.println();
        }//Fin ciclo While
    }//Fin metodo Main

    private static void mostrarMenu(){
        //mostrar opciones
        System.out.print("""
                ****** Listado de Personas ******
                1. Agregar
                2. Listar
                3. Salir 
                """);
        System.out.print("Digite una de las ociones: ");
    }//Fin del metodo MostrarMenu

    private static boolean ejecutarOperacion(Scanner entrada, List<Persona> personas){
        var opcion = Integer.parseInt(entrada.nextLine());
        var salir = false;

        //Revisamos la opcion digitalizada a travez de un Switch
        switch (opcion){
            case 1 -> {//Agregar una persona a la lista
                System.out.print("Digite el nombre: ");
                var nombre = entrada.nextLine();
                System.out.print("Digite el numero de Telefono: ");
                var tel = entrada.nextLine();
                System.out.print("Digite el correo: ");
                var email = entrada.nextLine();
                //Creamos el objeto Persona
                var persona = new Persona(nombre, tel, email);
                //Agregamos la persona a la lista
                personas.add(persona);
                System.out.println("La lista tiene:  " + personas.size() + "elementos");
            }//Fin caso 1
            case 2 ->{//Listado de personas
                System.out.println("Listado de personas: ");
                //Mejoras con lambda y el metoo de referencia
                //personas.forEach((persona) -> System.out.println(persona));
                personas.forEach(System.out::println);
            }//Fin caso 2
            case 3 ->{
                System.out.println("Hasta pronto...");
                salir=true;
            }//Fin caso 3
            default -> System.out.println("Opcion incorrecta: "+opcion);
        }//Fin switch
        return salir;
    }//Fin del metodo ejecutarOperacion


}//Fin clase Persona