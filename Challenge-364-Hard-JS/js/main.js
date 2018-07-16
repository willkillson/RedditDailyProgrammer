﻿


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
        case F://1,2,3,4,7
            piece[1] = F;
            piece[2] = F;
            piece[3] = F;
            piece[4] = F;
            piece[7] = F;
            break;
        case L://
            piece[0] = L;
            piece[3] = L;
            piece[6] = L;
            piece[9] = L;
            piece[10] = L;
            break;
        case N:
            piece[1] = N;
            piece[4] = N;
            piece[7] = N;
            piece[6] = N;
            piece[9] = N;
            break;
        case P:
            piece[0] = P;
            piece[1] = P;
            piece[3] = P;
            piece[4] = P;
            piece[6] = P;
            break;
        case T:
            piece[0] = T;
            piece[1] = T;
            piece[2] = T;
            piece[4] = T;
            piece[7] = T;
            break;
        case U:
            piece[0] = U;
            piece[2] = U;
            piece[3] = U;
            piece[4] = U;
            piece[5] = U;
            break;
        case V:
            piece[0] = V;
            piece[3] = V;
            piece[6] = V;
            piece[7] = V;
            piece[8] = V;
            break;
        case W:
            piece[0] = W;
            piece[3] = W;
            piece[4] = W;
            piece[7] = W;
            piece[8] = W;
            break;
        case X:
            piece[1] = X;
            piece[4] = X;
            piece[7] = X;
            piece[3] = X;
            piece[5] = X;
            break;
        case Y:
            piece[1] = Y;
            piece[4] = Y;
            piece[7] = Y;
            piece[10] = Y;
            piece[3] = Y;
            break;
        case Z:
            piece[0] = Z;
            piece[1] = Z;
            piece[4] = Z;
            piece[7] = Z;
            piece[8] = Z;
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

let pI = createPiece(I);
let pF = createPiece(F);
let pL = createPiece(L);
let pN = createPiece(N);
let pP = createPiece(P);
let pT = createPiece(T);
let pU = createPiece(U);
let pV = createPiece(V);
let pW = createPiece(W);
let pX = createPiece(X);
let pY = createPiece(Y);
let pZ = createPiece(Z);

printPiece(pI);
printPiece(pF);
printPiece(pL);
printPiece(pN);
printPiece(pP);
printPiece(pT);
printPiece(pU);
printPiece(pV);
printPiece(pW);
printPiece(pX);
printPiece(pY);
printPiece(pZ);

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