
var debugConsole = true;

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

var pieces = [F, I, L, N, P, T, U, V, W, X, Y, Z];

//endvar


function createBoard(size) {
    var board = new Array(size * size);
    //init board to all spaces
    for (let i = 0; i < board.length; i++) {
        board[i] = '-';
    }

    return board;
}

function createPiece(type) {
    console.log("___createPiece___");
    var width = 5;//max width
    var height = 5;//max height

    var piece = Array(width * height);
    for (let i = 0; i < piece.length; i++) {
        piece[i] = '-';
    }

    switch (type) {
        case I:
            piece[0] = I;
            piece[5] = I;
            piece[10] = I;
            piece[15] = I;
            piece[20] = I;
            break;
        case F://1,2,3,4,7
            piece[1] = F;
            piece[6] = F;
            piece[11] = F;
            piece[2] = F;
            piece[5] = F;
            break;
        case L://
            piece[0] = L;
            piece[5] = L;
            piece[10] = L;
            piece[15] = L;
            piece[16] = L;
            break;
        case N:
            piece[1] = N;
            piece[6] = N;
            piece[11] = N;
            piece[10] = N;
            piece[15] = N;
            break;
        case P:
            piece[0] = P;
            piece[1] = P;
            piece[5] = P;
            piece[6] = P;
            piece[10] = P;
            break;
        case T:
            piece[0] = T;
            piece[1] = T;
            piece[2] = T;
            piece[6] = T;
            piece[11] = T;
            break;
        case U:
            piece[0] = U;
            piece[2] = U;
            piece[5] = U;
            piece[6] = U;
            piece[7] = U;
            break;
        case V:
            piece[0] = V;
            piece[5] = V;
            piece[10] = V;
            piece[11] = V;
            piece[12] = V;
            break;
        case W:
            piece[0] = W;
            piece[5] = W;
            piece[6] = W;
            piece[11] = W;
            piece[12] = W;
            break;
        case X:
            piece[1] = X;
            piece[6] = X;
            piece[11] = X;
            piece[5] = X;
            piece[7] = X;
            break;
        case Y:
            piece[1] = Y;
            piece[6] = Y;
            piece[11] = Y;
            piece[16] = Y;
            piece[5] = Y;
            break;
        case Z:
            piece[0] = Z;
            piece[1] = Z;
            piece[6] = Z;
            piece[11] = Z;
            piece[12] = Z;
            break;
    }

    return piece;
}

function printPiece(charArray) {
    var dem = Math.sqrt(charArray.length);

    var msg = "";
    let k = 0;
    for (let i = 0; i < dem; i++) {
        for (let j = 0; j < dem; j++ , k++) {
            msg +=charArray[k];
        }
        console.log(msg);
        msg = "";
    }
}

function rotatePiece(piece) {
    console.log("___rotatePiece___");
    var dem = Math.sqrt(piece.length);
    var length = dem * dem;

    var newPiece = new Array(length);
    for (let i = 0; i < length; i++) {
        newPiece[i] = '-';
    }
    var j = 0;
    for (let i = length-5; i >= 0; i = i - dem, j++) {
        newPiece[j] = piece[i];
    }
    for (let i = length-4; i >= 1; i = i - dem, j++) {
        newPiece[j] = piece[i];
    }
    for (let i = length-3; i >= 2; i = i - dem, j++) {
        newPiece[j] = piece[i];
    }
    for (let i = length-2; i >= 3; i = i - dem, j++) {
        newPiece[j] = piece[i];
    }
    for (let i = length-1; i >= 4; i = i - dem, j++) {
        newPiece[j] = piece[i];
    }

    return newPiece;
}

function shiftStackUp(piece) {

    var dem = Math.sqrt(piece.length);
    var length = dem * dem;

    console.log("___shiftStackUp___");
    //moves the index of the piece to 0,0
    var newPiece = new Array(length);
    for (let i = 0; i < length; i++) {
        newPiece[i] = '-';
    }

    let startCopying = false;
    for (let i = 0; i < length; i++) {
        if (piece[i] != '-') {
            startCopying = true;
            console.log("Started copying at, " + i+ " because i=="+ piece[i]);
        }
        if (startCopying) {
            while (i % dem != 0)
                i--;
            //find the index
            var j = 0;
            while (i < length) {
                newPiece[j] = piece[i];
                j++;
                i++;
            }
        }
    }

    return newPiece;
}

function howEmptyLeft(piece) {

    console.log("___howEmptyLeft___");
    let dem = Math.sqrt(piece.length);
    let length = piece.length;

    let moveLeftAmount = 0;
    let movLeft = true;

    let a = 5;
    let b = 0;
    while (1) {
        for (let i = length - a; i >= b; i = i - dem) {
            if (piece[i] != '-') {
                movLeft = false;
                console.log("Found at, " + i);
            }
    
        }
        if (movLeft) {
            moveLeftAmount++;
        }
        else {
            return moveLeftAmount;
        }
        a--;
        b++;
        if (a == 0) {
            return moveLeftAmount;
        }
    }
}

function shiftStackLeft(piece) {

    var dem = Math.sqrt(piece.length);
    var length = dem * dem;

    var newPiece = new Array(length);

    for (let i = 0; i < length; i++) {
        newPiece[i] = '-';
    }

    for (let i = 0; i < dem; i++) {
        newPiece[0+i] = piece[1+i];
        newPiece[5+i] = piece[6+i];
        newPiece[10+i] = piece[11+i];
        newPiece[15+i] = piece[16+i];
        newPiece[20+i] = piece[21+i];
    }
    newPiece[4] = '-';
    newPiece[9] = '-';
    newPiece[14] = '-';
    newPiece[19] = '-';
    newPiece[24] = '-';


   
    return newPiece;
}

function rotateAndNormalize(piece) {

    var cp = rotatePiece(piece);
    cp = shiftStackUp(cp);
    var times = howEmptyLeft(cp);
    for (let i = 0; i < times; i++) {
        cp = shiftStackLeft(cp);
    }
    return cp;
}

function placePieceBoard(board, piece, posx, posy) {
    var hasFailed = false;
    var boardDem = Math.sqrt(board.length);
    var pieceDem = Math.sqrt(piece.length);

    //check bounds
    if (((posx + pieceDem) >= boardDem) || ((posy + pieceDem) >= boardDem)) {
        if (debugConsole) {
            console.log("___placePieceBoard___")
            console.log("check bounds failed")
        }

        return -1;
    }
    //end check bounds

    for (let i = posx; i < pieceDem*pieceDem; i++) {

    }
       


    if (hasFailed === true) {
        return -1;
    }
    else {
        return 1;
    }
}


var board = createBoard(10);
var pI = createPiece(I);
placePieceBoard(board, pI, 0, 0);
printPiece(board);







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