package com.company;

public class Tile {
    public char character;
    public boolean isMarked = false;

   public Tile(char character){
       this.character = character;
   }
    public Tile(char character, boolean isMarked){
        this.character = character;
        this.isMarked = isMarked;

    }

}

