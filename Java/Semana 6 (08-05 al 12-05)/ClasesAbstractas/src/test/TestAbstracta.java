
package test;

import domain.FiguraGeometrica;
import domain.Rectangulo;


public class TestAbstracta {
    public static void main(String[] args) {
        FiguraGeometrica figura = new Rectangulo ("Rectangulo");
        figura.dibujar();
    }
    
}
