
package domain;

public class Gerente extends Empleado {
    private String departamento;
    
    public Gerente(String nombre, double sueldo,String departamento){
        super(nombre, sueldo);
        this.departamento = departamento;           
    }
    //SobreEscritura de la clase PADRE en la clase HIJA
    @Override
    public String obtenerDetalles(){
        return super.obtenerDetalles()+", Departamento: "+this.departamento;   
    }
    
    
}
