import com.company.*;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;


public class BoardTest {

    @Test
    public void TestDictionary(){

        Board board = new Board("s2ferw_nx346ty5odiupq#lmz8ajhgcvk79b", "tk5j23tq94_gw9c#lhzs");
        Position ep1 = board.dictionary.get('c');
        Position ep2 = board.dictionary.get('#');
        Position ep3 = board.dictionary.get('z');
        Position ep4 = board.dictionary.get('q');
        Position ep5 = board.dictionary.get('a');

        assertEquals( ep1.xpos,0);
        assertEquals( ep1.ypos,2);

        assertEquals( ep2.xpos,0);
        assertEquals( ep2.ypos,0);

        assertEquals( ep3.xpos,5);
        assertEquals( ep3.ypos,5);

        assertEquals( ep4.xpos,2);
        assertEquals( ep4.ypos,4);

        assertEquals( ep5.xpos,4);
        assertEquals( ep5.ypos,1);


    }

    @Test
    public void TestBoardConstructor(){
        Board board = new Board("s2ferw_nx346ty5odiupq#lmz8ajhgcvk79b", "tk5j23tq94_gw9c#lhzs");

        assertEquals('s',board.tiles[0][0].character);
        assertEquals('c',board.tiles[5][0].character);
        assertEquals('w',board.tiles[0][5].character);
        assertEquals('b',board.tiles[5][5].character);

    }

    @Test
    public void TestBoardDefaultMarkerPos(){
        Board board = new Board("s2ferw_nx346ty5odiupq#lmz8ajhgcvk79b", "tk5j23tq94_gw9c#lhzs");

        assertEquals(true,board.tiles[0][0].isMarked);
        assertEquals(0,board.markerPos.xpos);
        assertEquals(0,board.markerPos.ypos);

    }

    @Test
    public void TestBoardMarkerPosMovement(){
        Board board = new Board("s2ferw_nx346ty5odiupq#lmz8ajhgcvk79b", "tk5j23tq94_gw9c#lhzs");

        board.shiftRowRight(0);
        board.shiftColumnDown(1);

        board.updateMarkerPos();

        assertEquals(true,board.tiles[1][1].isMarked);
        assertEquals(1,board.markerPos.xpos);
        assertEquals(1,board.markerPos.ypos);

    }

    @Test
    public void TestShiftRowRight(){
        Board board = new Board("s2ferw"+"_nx346"+"ty5odi"+"upq#lm"+"z8ajhg"+"cvk79b", "tk5j23tq94_gw9c#lhzs");

        board.shiftRowRight(0);
        board.shiftRowRight(3);
        board.shiftRowRight(5);

        String testStringOne = "";
        String testStringTwo = "";
        String testStringThree = "";


        for(int i = 0;i<6;i++){
            testStringOne += board.tiles[0][i].character;
            testStringTwo += board.tiles[3][i].character;
            testStringThree += board.tiles[5][i].character;

        }


        assertEquals("ws2fer", testStringOne);
        assertEquals("mupq#l", testStringTwo);
        assertEquals("bcvk79", testStringThree);
    }

    @Test
    public void TestShiftColumnDown(){
        Board board = new Board("s2ferw"+"_nx346"+"ty5odi"+"upq#lm"+"z8ajhg"+"cvk79b", "tk5j23tq94_gw9c#lhzs");

        board.shiftColumnDown(0);
        board.shiftColumnDown(3);
        board.shiftColumnDown(5);

        String testStringOne = "";
        String testStringTwo = "";
        String testStringThree = "";


        for(int i = 0;i<6;i++){
            testStringOne += board.tiles[i][0].character;
            testStringTwo += board.tiles[i][3].character;
            testStringThree += board.tiles[i][5].character;

        }


        assertEquals("cs_tuz", testStringOne);
        assertEquals("7e3o#j", testStringTwo);
        assertEquals("bw6img", testStringThree);

    }

    @Test
    public void TestFindPosByChar(){

        Board board = new Board("s2ferw"+"_nx346"+"ty5odi"+"upq#lm"+"z8ajhg"+"cvk79b", "tk5j23tq94_gw9c#lhzs");

        Position pos1 = new Position(2,0);
        Position pos2 = new Position(3,3);
        Position pos3 = new Position(5,5);


        assertEquals(pos1.xpos, board.findPosByChar('t').xpos);
        assertEquals(pos1.ypos, board.findPosByChar('t').ypos);

        assertEquals(pos2.xpos, board.findPosByChar('#').xpos);
        assertEquals(pos2.ypos, board.findPosByChar('#').ypos);

        assertEquals(pos3.xpos, board.findPosByChar('b').xpos);
        assertEquals(pos3.ypos, board.findPosByChar('b').ypos);
    }

    @Test
    public void TestFindCharacterByPosition(){
        Board board = new Board("s2ferw_nx346ty5odiupq#lmz8ajhgcvk79b", "tk5j23tq94_gw9c#lhzs");

        Position pos1 = new Position(2,0);
        Position pos2 = new Position(3,3);
        Position pos3 = new Position(5,5);



        assertEquals('t', board.findCharByPos(pos1));
        assertEquals('#', board.findCharByPos(pos2));
        assertEquals('b', board.findCharByPos(pos3));

    }

    @Test
    public void TestEncryptOneLetter(){
        Board board = new Board("gp3lehwzf9jx5yo6r#nd8auks4qtv72cmib_", "x");

        Position current = board.findPosByChar('x');
        Position adjust = board.dictionary.get(board.findCharByPos(board.markerPos));

        Position pos1 = board.encryptMovPosbyPos(current,adjust);
        board.findCharByPos(pos1);
        assertEquals('a',  board.findCharByPos(pos1));

    }

    @Test
    public void TestEncryptMovPosByPos(){
        //might be broken
        Board board = new Board("gp3lehwzf9jx5yo6r#nd8auks4qtv72cmib_", "x");

        Position current = board.findPosByChar('x');
        Position adjust = board.dictionary.get(board.findCharByPos(board.markerPos));

        char result = board.findCharByPos(board.encryptMovPosbyPos(current,adjust));
        assertEquals('a',result);
    }

    @Test
    public void TestDecrpytMovPosByPos(){
        Board board = new Board("s2ferw_nx346ty5odiupq#lmz8ajhgcvk79b", "tk5j23tq94_gw9c#lhzs");

        Position current = board.findPosByChar('t');
        Position adjust = board.dictionary.get(board.findCharByPos(board.markerPos));

        char result = board.findCharByPos(board.decrpytMovPosbyPos(current,adjust));
        assertEquals('a',result);
    }

    @Test void TestMoveMarkerByPos(){
        Board board = new Board("s2ferw_nx346ty5odiupq#lmz8ajhgcvk79b", "tk5j23tq94_gw9c#lhzs");

        Position pos1 = new Position(0,5);
        board.moveMarkerByPos(pos1);
        assertEquals(5,board.markerPos.xpos);
        assertEquals(0,board.markerPos.ypos);

        pos1.ypos = 5;
        pos1.xpos = 1;
        board.moveMarkerByPos(pos1);
        assertEquals(0,board.markerPos.xpos);
        assertEquals(5,board.markerPos.ypos);

        pos1.ypos = 1;
        pos1.xpos = 0;
        board.moveMarkerByPos(pos1);
        assertEquals(0,board.markerPos.xpos);
        assertEquals(0,board.markerPos.ypos);

    }

    @Test
    public void TestUpdateMarkerPosition(){

        Board board = new Board("gp3lehwzf9jx5yo6r#nd8auks4qtv72cmib_", "x");

        Position current = board.findPosByChar('x');
        Position adjust = board.dictionary.get(board.findCharByPos(board.markerPos));

        board.targetCharacter = board.findCharByPos(board.encryptMovPosbyPos(current,adjust));
        int rowIndex = current.ypos;
        int columnIndex = board.findPosByChar(board.targetCharacter).xpos;

        board.shiftRowRight(rowIndex);
        board.shiftColumnDown(columnIndex);

        board.updateMarkerPos();
        board.moveMarkerByPos(board.dictionary.get(board.targetCharacter));


        assertEquals('9',board.findCharByPos(board.markerPos));
    }

    @Test
    public void TestDecryptMessage(){
        Board board = new Board("s2ferw_nx346ty5odiupq#lmz8ajhgcvk79b", "tk5j23tq94_gw9c#lhzs");
        assertEquals("aaaaaaaaaaaaaaaaaaaa",board.decryptMessage());
    }

    @Test
    public void TestEncryptMessage(){
        Board board = new Board("s2ferw_nx346ty5odiupq#lmz8ajhgcvk79b", "aaaaaaaaaaaaaaaaaaaa");

        char chartemp;

        String answer = "tk5j23tq94_gw9c#lhzs";

        String message = "";

        int textIndex = 0;
        while(textIndex<board.text.length()){

            System.out.println("\nIndex : " +textIndex);
            board.printBoard();
            if(textIndex==4){

                System.out.print("picking u instead of 2");
            }

            chartemp = board.text.charAt(textIndex);
            Position current = board.findPosByChar(chartemp);

            chartemp = board.findCharByPos(board.markerPos);
            Position adjust = board.dictionary.get(chartemp);

            board.targetCharacter = board.findCharByPos(board.encryptMovPosbyPos(current,adjust));

            message += board.targetCharacter;

            int rowIndex = current.ypos;
            int columnIndex = board.findPosByChar(board.targetCharacter).xpos;

            board.shiftRowRight(rowIndex);
            board.shiftColumnDown(columnIndex);

            board.updateMarkerPos();
            board.moveMarkerByPos(board.dictionary.get(board.targetCharacter));

            assertEquals(answer.charAt(textIndex),message.charAt(textIndex));

            textIndex++;


        }


    }

}
