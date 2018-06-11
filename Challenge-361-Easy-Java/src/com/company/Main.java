package com.company;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.lang.String;
import java.lang.Integer;


public class Main {

    public static void main(String[] args) {

        String input = "dbbaCEDbdAacCEAadcB";

        HashMap<String, Integer> unsortedmap = new HashMap<>();

        int playerA = 0;
        int playerB = 0;
        int playerC = 0;
        int playerD = 0;
        int playerE = 0;

        int num = 0;
        while (num != input.length()) {
            switch (input.charAt(num)) {
                case 'A':
                    playerA--;
                    break;
                case 'a':
                    playerA++;
                    break;
                case 'B':
                    playerB--;
                    break;
                case 'b':
                    playerB++;
                    break;
                case 'C':
                    playerC--;
                    break;
                case 'c':
                    playerC++;
                    break;
                case 'D':
                    playerD--;
                    break;
                case 'd':
                    playerD++;
                    break;
                case 'E':
                    playerE--;
                    break;
                case 'e':
                    playerE++;
                    break;
            }

            num++;
        }


        for (int i = 0; i < 5; i++) {//find the minimum

        }
        unsortedmap.put("a", playerA);
        unsortedmap.put("b", playerB);
        unsortedmap.put("c", playerC);
        unsortedmap.put("d", playerD);
        unsortedmap.put("e", playerE);

        System.out.println(unsortedmap.entrySet());


        int printAmount = unsortedmap.size();
        String biggest;
        while (printAmount != 0) {
            //find biggest
            Iterator itb = unsortedmap.entrySet().iterator();
            Map.Entry<String, Integer> pair = (Map.Entry<String, Integer>)itb.next();
            biggest = pair.getKey();

            for (Map.Entry<String, Integer> entry : unsortedmap.entrySet())
                if (entry.getValue() > unsortedmap.get(biggest)) {
                    biggest = entry.getKey();
                }
            System.out.println(biggest + " : " + unsortedmap.get(biggest));
            unsortedmap.remove(biggest);
            printAmount = unsortedmap.size();
        }

    }
}
