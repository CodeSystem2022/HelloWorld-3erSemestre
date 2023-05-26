
package domain;


public abstract class FiguraGeometrica {
   protected String tiopFigura;
   
   protected FiguraGeometrica(String tipoFigura){
       this.tiopFigura = tipoFigura;
   }
   //Metodo abstracto
   public abstract void dibujar();
   
   //Agregamos el get y set

    public String getTiopFigura() {
        return tiopFigura;
    }

    public void setTiopFigura(String tiopFigura) {
        this.tiopFigura = tiopFigura;
    }

    @Override
    public String toString() {
        return "FiguraGeometrica{" + "tiopFigura=" + tiopFigura + '}';
    }
   
   
}
