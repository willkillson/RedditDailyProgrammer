package com.company;

import java.util.HashMap;

public class Board {
    public HashMap<Character, Position> dictionary;
    public Tile[][] tiles = new Tile[6][6];

    public Position markerPos = new Position(0,0);
    public Position textPos = new Position(0,0);
    public Position targetPos = new Position(0,0);

    public String text;

    public Character targetCharacter;

    public Board(String alphabet, String text){
        dictionary = CreateDictionary("#_23456789abcdefghijklmnopqrstuvwxyz");
        this.text = text;

        int alphabetKey = 0;
        for(int i = 0;i< 6;i++){
            for(int j = 0;j< 6;j++, alphabetKey++){
                Tile newTile = new Tile( alphabet.charAt(alphabetKey),false);
                tiles[i][j] = newTile;
            }
        }

        this.tiles[0][0].isMarked=true;

    }

    public void printBoard(){
        for(int i = 0;i< 6;i++){
            for(int j = 0;j< 6;j++){
                System.out.print(tiles[i][j].character);
            }
            System.out.print('\n');
        }
    }

    public String encryptMessage(){
        String message = "";

        return message;
    }
    public String decryptMessage(){
        String message = "";
        int textIndex = 0;

        textPos = findPosByChar(text.charAt(textIndex));


        return message;
    }

    public void shiftRowRight(int rowIndex){
        Tile temp = tiles[rowIndex][5];
        for(int i = 5;i>0;i--){
             tiles[rowIndex][i] = tiles[rowIndex][i-1];
        }
        tiles[rowIndex][0] = temp;

    }
    public void shiftColumnDown(int columnIndex){
        Tile temp = tiles[5][columnIndex];

        for(int i = 5;i>0;i--){
            tiles[i][columnIndex] = tiles[i-1][columnIndex];
        }
        tiles[0][columnIndex] = temp;
    }

    public void updateMarkerPos(){
        for(int i =0;i<6;i++){
            for(int j = 0;j< 6;j++){
                if(tiles[i][j].isMarked==true){
                    markerPos.xpos = j;
                    markerPos.ypos = i;
                    return;
                }
            }
        }

    }
    public void moveMarkerByPos(Position pos){
        tiles[markerPos.ypos][markerPos.xpos].isMarked=false;
        markerPos = encryptMovPosbyPos(markerPos,pos);
        tiles[markerPos.ypos][markerPos.xpos].isMarked=true;
    }

    public Position encryptMovPosbyPos(Position current, Position adjustment){
        Position posToReturn = new Position(current.ypos,current.xpos);
        Position adjust = new Position (adjustment.ypos,adjustment.xpos);

        while(adjust.xpos!=0){
            posToReturn.xpos++;
            if(posToReturn.xpos>5){
                posToReturn.xpos = 0;
            }

            adjust.xpos--;
        }
        while(adjust.ypos!=0){
            posToReturn.ypos++;
            if(posToReturn.ypos>5){
                posToReturn.ypos = 0;
            }
            adjust.ypos--;
        }
        return posToReturn;

    }
    public Position decrpytMovPosbyPos(Position current, Position adjustment){
        Position posToReturn = new Position(current.ypos, current.xpos);
        Position adjust = new Position (adjustment.ypos,adjustment.xpos);

        while(adjust.xpos!=0){
            posToReturn.xpos--;
            if(posToReturn.xpos<0){
                posToReturn.xpos = 5;
            }
            adjust.xpos--;
        }
        while(adjust.ypos!=0){
            posToReturn.ypos--;
            if(posToReturn.ypos<0){
                posToReturn.ypos = 5;
            }
            adjust.ypos--;
        }
        return posToReturn;
    }

    public Position findPosByChar(Character chartofind){
        Position pos = new Position(0,0);
        for(int i = 0;i<6;i++){
            for(int j = 0;j<6;j++){
                if(tiles[i][j].character==chartofind){
                    pos.xpos = j;
                    pos.ypos = i;
                    return pos;
                }
            }
        }

        return pos;
    }
    public char findCharByPos(Position pos){
        return tiles[pos.ypos][pos.xpos].character;
    }
    public HashMap<Character, Position> CreateDictionary(String letters){
        HashMap<Character, Position> dic = new HashMap<>();
        int letterIndex = 0;
        for(Integer i = 0;i< 6;i++){
            for(Integer j = 0;j< 6;j++,letterIndex++){
                Position pos = new Position(i,j);
                dic.put(letters.charAt(letterIndex),pos);
            }
        }


        return dic;
    }

}
