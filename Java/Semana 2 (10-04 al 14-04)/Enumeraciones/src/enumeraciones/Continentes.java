
package enumeraciones;


public enum Continentes {
    /*Pueden llevar uno o varios parámetros, separados por una coma.
    Todos deben tener la misma cantidad, de lo contrario nos dara error.
    */
    AFRICA(53,"1.2 billones"),
    EUROPA(46, "1.3 billones"),
    ASIA(44, "1.5 billones"),
    AMERICA(34, "1.1 billones"),
    OCEANIA(14, "1.0 billones");
    
    private final int paises;
    private final String habitantes;
    
    Continentes(int paises, String habitantes){
        this.paises = paises;
        this.habitantes = habitantes;
    }
    
    //Método Get
    public int getPaises(){
        return this.paises;
    }
    
    public String getHabitantes(){
        return this.habitantes;
    }
}
