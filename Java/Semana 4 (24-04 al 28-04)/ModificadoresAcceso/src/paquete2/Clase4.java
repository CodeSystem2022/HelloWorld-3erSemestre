package paquete2;

public class Clase4 {
    private String atributoPrivate = "atributo Privado"; //solo accedemos por get y set por ser privado
    
    private Clase4(){
        System.out.println("Constructor privado");
    }
    
    //Creamos un constructor publico apra poder crear objetos
    public Clase4(String argumento){ //aqui se puede llamar al constructor vacio
        this();
        System.out.println("Constructor publico");
        
    }

    public String getAtributoPrivate() {
        return atributoPrivate;
    }

    public void setAtributoPrivate(String atributoPrivate) {
        this.atributoPrivate = atributoPrivate;
    }
    
    
}
