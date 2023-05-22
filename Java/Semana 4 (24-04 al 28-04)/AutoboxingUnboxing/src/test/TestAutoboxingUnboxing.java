package test;

public class TestAutoboxingUnboxing {
    public static void main(String[] args) {
        //Clases envolventes o Wrapper
        /*
            Clases envovlentes de tipos primitivos
            int = la clase envolvente es INTEGER
        */
        int enteroPrim = 10; //Tipo primitivo
        System.out.println("enteroPrim = " + enteroPrim);
        Integer entero = 10; //Tipo object con la clase Integer
        System.out.println("entero = " + entero.floatValue());
        
        int entero2 = entero; //unboxing
        System.out.println("entero2 = " + entero2);
    }
    
}
