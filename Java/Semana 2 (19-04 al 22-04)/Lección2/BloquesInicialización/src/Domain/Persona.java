
package Domain;


public class Persona {
    private final int idPersona;
    private static int contadorPersona;
    
    static{ //bloque de inicialización estático
    System.out.print("Ejecución del bloque estático");
    ++Persona.contadorPersona;
    //idPersona
    }
    {
    System.out.print("Ejecución del bloque no estático");
    this.idPersona = Persona.contadorPersona++;
            
    }
    
    public Persona() {
        System.out.print("Ejecución del constructor");
        
    }
    
    public int idPersona(){
        return this.idPersona;
    }

    @Override
    public String toString() {
        return "Persona{" + "idPersona=" + idPersona + '}';
    }
     
    
}
