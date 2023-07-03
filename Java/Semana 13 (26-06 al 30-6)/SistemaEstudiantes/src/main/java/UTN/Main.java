package UTN;

import UTN.conexion.Conexion;

import javax.swing.*;

// Press Shift twice to open the Search Everywhere dialog and type `show whitespaces`,
// then press Enter. You can now see whitespace characters in your code.
public class Main {
    public static void main(String[] args) {
        var conextion = Conexion.getConnection();
        if(conextion != null)
            System.out.println("Conexion Exitosa: "+conextion);
        else
            System.out.println("Error al conectarse");
    }//Fin main
}//Fin class