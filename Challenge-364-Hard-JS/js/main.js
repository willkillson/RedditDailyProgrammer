


//vars
var boardSizeWidth = 5;
var boardSizeHeight = 5;

const F = 'F';
const I = 'I';
const L = 'L';
const N = 'N';
const P = 'P';
const T = 'T';
const U = 'U';
const V = 'V';
const W = 'W';
const X = 'X';
const Y = 'Y';
const Z = 'Z';

//endvar


function createBoard(sizex, sizey) {
    var board = new Array(sizex * sizey);
    //init board to all spaces
    for (let i = 0; i < board.length; i++) {
        board[i] = ' ';
    }

    return board;
}

function createPiece(type) {
    var width = 3;//max width
    var height = 5;//max height

    var piece = Array(width * height);
    for (let i = 0; i < piece.length; i++) {
        piece[i] = ' ';
    }

    switch (type) {
        case I:
            piece[0] = I;
            piece[3] = I;
            piece[6] = I;
            piece[9] = I;
            piece[12] = I;
            break;
    }

    return piece;
}

function printPiece(charArray) {

    console.log(charArray[0] + charArray[1] + charArray[2]);
    console.log(charArray[3] + charArray[4] + charArray[5]);
    console.log(charArray[6] + charArray[7] + charArray[8]);
    console.log(charArray[9] + charArray[10] + charArray[11]);
    console.log(charArray[12] + charArray[13] + charArray[14]);

}

let p = createPiece(I);

printPiece(p);


//var canvas = document.querySelector('canvas');
//var scoreboard = document.getElementById("score");

//canvas.width = 500;
//canvas.height = 500;
//var c = canvas.getContext('2d');

//function mainloop() {


//    c.clearRect(0, 0, canvas.width, canvas.height);
//    c.beginPath();
//    c.fillStyle = 'black';
//    c.fillRect(0, 0, canvas.width, canvas.height);
 

//    requestAnimationFrame(mainloop);
//}

//requestAnimationFrame(mainloop);