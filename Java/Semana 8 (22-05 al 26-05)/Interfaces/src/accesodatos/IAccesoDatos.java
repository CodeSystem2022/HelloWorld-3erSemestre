package accesodatos;

public interface IAccesoDatos {
    int MAX_REGISTRO = 10;
    /* Cuando declaramos un atrivuto en una interface debemos agregarle un 
    valor si o si*/
    
    // Método insertar es abstracto y sin cuerpo
    void insertar();
    
    void listar();
    
    void actualizar();
    
    void eliminar();


}
