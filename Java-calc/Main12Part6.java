public class Main12Part6
{
   public static void main(String[] args)
   {
      Calc calculator = new Calc(2);
      System.out.println(calculator.show());
      calculator.add(23);
      System.out.println(calculator.show());
      calculator.subtract(2.35);
      System.out.println(calculator.show());
      calculator.mult(12);
      System.out.println(calculator.show());
      calculator.div(5);
      System.out.println(calculator.show());
   }
}