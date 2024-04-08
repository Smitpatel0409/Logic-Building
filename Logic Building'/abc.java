/**
 * abc
 */
public class abc {

    public static void main(String[] args) {
        int i=1;
        for(int j=1;j<=5 && i<=5;j++){

            if (i == 1 ||  i == 3 || i == 5 || (i==4 && j==5) || (i==2 && j==1)){
                System.out.print("*");
            }
            else{
                System.out.print(" ");
            }
            
            if (j==5) {
                i++;
                j=0;
                System.out.println("");
            }
        }
        
        System.out.println("");
        System.out.println("");
        System.out.println("");

        i=1;
        for(int j=1;j<=5 && i<=5;j++){

            if (j == 1 || j == 5 ||(i==2 && j==2) || (i==2 && j==4) || (i==3 && j==3) ){
                System.out.print("*");
            }
            else{
                System.out.print(" ");
            }
            
            if (j==5) {
                i++;
                j=0;
                System.out.println("");
            }
        }
    }
}