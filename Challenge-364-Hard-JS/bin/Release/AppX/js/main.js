
var debugConsole = false;

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

function mapArrayToXY(dem) {

    var myMap = new Map();
    var k = 0;
    for (let i = 0; i < dem; i++) {
        for (let j = 0; j < dem; j++, k++) {
            myMap.set(`${i},${j}`, k);
        }
    }
    return myMap;
}

function createBoard(size) {
    var board = new Array(size * size);
    //init board to all spaces
    for (let i = 0; i < board.length; i++) {
        board[i] = '-';
    }

    return board;
}

function createPiece(type) {
    if (debugConsole)
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
        console.log(`${i} => ` + msg);
        msg = "";
    }
}

function rotatePiece(piece) {
    if (debugConsole)
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

    if (debugConsole)
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
            if (debugConsole)
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
    if (debugConsole)
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
                if (debugConsole)
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

function checkPieceAgainstBoard(board, piece, posx, posy) {
    //returns 1 if piece can be set into the board
    //returns -1 if the board is blocking the piece
    var hasFailed = false;
    var boardDem = Math.sqrt(board.length);
    var pieceWidth = realWidthOfPiece(piece);
    var pieceHeight = realHeightOfPiece(piece);

    for (let i = posx; i < posx + pieceWidth; i++ ) {
        for (let j = posy; j < posy + pieceHeight; j++) {
            if (board[mapBoard.get(`${j},${i}`)] != '-') {
                hasFailed = true;
            }
        }
    }
       


    if (hasFailed === true) {
        return -1;
    }
    else {
        return 1;
    }
}

function setPieceIntoBoard(board, piece, posx, posy) {

    var boardDem = Math.sqrt(board.length);
    var pieceWidth = realWidthOfPiece(piece);
    var pieceHeight = realHeightOfPiece(piece);

    var pi = 0;
    var pj = 0;
    for (let i = posx; i < posx + pieceWidth; i++,pi++) {
        for (let j = posy; j < posy + pieceHeight; j++,pj++) {
            if (board[mapBoard.get(`${j},${i}`)] == '-') {
                board[mapBoard.get(`${j},${i}`)] = piece[mapPiece.get(`${pi},${pj}`)];
            }
        }
    }

}

function realWidthOfPiece(piece) {
    var pieceDem = Math.sqrt(piece.length);
    var atEndofPiece = false;
    var width = 0;

    var vert = [0, 5, 10, 15, 20, 1, 6, 11, 16, 21, 2, 7, 12, 17, 22, 3, 8, 13, 18, 23, 4, 9, 14, 19, 24];

    var c1 = false;
    var c2 = false;
    var c3 = false;
    var c4 = false;
    var c5 = false;

    var k = 0;
    for (var i = 0; i < 5; i++) {
        for (var j = 0; j < 5; j++,k++) {
            if (piece[vert[k]] != '-') {
                switch (i) {
                    case 0:
                        c1 = true;
                        break;
                    case 1:
                        c2 = true;
                        break;
                    case 2:
                        c3 = true;
                        break;
                    case 3:
                        c4 = true;
                        break;
                    case 4:
                        c5 = true;
                        break;
                }
            }

        }
    }

    if (c1)
        width++;
    if (c2)
        width++;
    if (c3)
        width++;
    if (c4)
        width++;
    if (c5)
        width++;

    return width;
}

function realHeightOfPiece(piece) {
    var pieceDem = Math.sqrt(piece.length);
    var atEndofPiece = false;
    var width = 0;

    var r1 = false;
    var r2 = false;
    var r3 = false;
    var r4 = false;
    var r5 = false;

    var k = 0;
    for (var i = 0; i < 5; i++) {
        for (var j = 0; j < 5; j++ , k++) {
            if (piece[k] != '-') {
                switch (i) {
                    case 0:
                        r1 = true;
                        break;
                    case 1:
                        r2 = true;
                        break;
                    case 2:
                        r3 = true;
                        break;
                    case 3:
                        r4 = true;
                        break;
                    case 4:
                        r5 = true;
                        break;
                }
            }

        }
    }

    if (r1)
        width++;
    if (r2)
        width++;
    if (r3)
        width++;
    if (r4)
        width++;
    if (r5)
        width++;

    return width;
}


var mapBoard = mapArrayToXY(10);
var mapPiece = mapArrayToXY(5);
var board = createBoard(10);
var pN = createPiece(N);

board[10] = '.';
printPiece(pN);
printPiece(board);
console.log(checkPieceAgainstBoard(board, pN, 0, 0));
setPieceIntoBoard(board, pN, 0, 0);
printPiece(board);


//var pI = createPiece(I);

//console.log("Width = " + realWidthOfPiece(pI));
//console.log("Height = " + realHeightOfPiece(pI));
//printPiece(pI);

//pI = rotateAndNormalize(pI);
//console.log("Width = " + realWidthOfPiece(pI));
//console.log("Height = " + realHeightOfPiece(pI));
//printPiece(pI);




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