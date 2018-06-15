package com.company;

import java.io.*;
import java.util.ArrayList;

public class Main {

    static boolean check(String in){
        //I before E except after C
        boolean answer = false;

        if((in.contains("ei")==false)&&(in.contains("ie")==false)){
            answer = true;
        }
        if(in.contains("ei")&&in.contains("cei")){
            answer = true;
        }
        if(in.contains("ie")&&(in.contains("cie")==false)){
            answer = true;
        }

        return answer;
    }
    static boolean checkCustom(String in){
        //D before E except after C
        boolean answer = false;
        in = in.toLowerCase();

        if((in.contains("ed")==false)&&(in.contains("de")==false)){
            answer = true;
        }
        if(in.contains("ed")&&in.contains("ced")){
            answer = true;
        }
        if(in.contains("de")&&(in.contains("cde")==false)){
            answer = true;
        }

        return answer;
    }
    static ArrayList<String> readFile(String in){
        ArrayList<String> list = new  ArrayList<String>();
        File file = new File(in);
        BufferedReader reader = null;

        try {
            reader = new BufferedReader(new FileReader(file));
            String text = null;

            while ((text = reader.readLine()) != null) {
                list.add(text);
            }
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            try {
                if (reader != null) {
                    reader.close();
                }
            } catch (IOException e) {
            }
        }
        return list;
    }

    public static void main(String[] args) {

        ArrayList<String> words = new ArrayList<String>();

        words.add(new String("a"));
        words.add(new String("zombie"));
        words.add(new String("transceiver"));
        words.add(new String("veil"));
        words.add(new String("icier"));
        words.add(new String("ceilingstein"));

        for(String each:words){
            System.out.println(each + " " + check(each));
        }
//        words.clear();
//        words = readFile("enable1.txt");
//        int exceptions = 0;
//        for(String each:words){
//            //System.out.println(each + " " + check(each));
//            if(check(each)==false){
//                exceptions++;
//            }
//        }
//        System.out.println("There are "+ exceptions + " exceptions to the rule.");
//
//
//        exceptions = 0;
//        for(String each:words){
//            //System.out.println(each + " " + check(each));
//            if(checkCustom(each)==false){
//                exceptions++;
//            }
//        }
//        System.out.println("There are "+ exceptions + " d before e except after c exceptions to this custom rule.");
//
    }
}
