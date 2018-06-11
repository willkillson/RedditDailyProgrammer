package com.company;

import java.util.Scanner;
import java.util.regex.Pattern;
import java.util.regex.Matcher;

public class Main {

    public static void main(String[] args) {

        System.out.println("What is your name, age, and reddit username?");
        Scanner in = new Scanner(System.in);
        String input = in.nextLine();

        Pattern pattern = Pattern.compile("(\\D+)(\\d+)(.+)");
        Matcher matcher = pattern.matcher(input);
        matcher.find();

        String name = matcher.group(1);
        int age = Integer.parseInt(matcher.group(2));
        String userName = matcher.group(3);

        System.out.println("your name is "+name+", you are "+age+" years old, and your username is "+userName);

    }
}
