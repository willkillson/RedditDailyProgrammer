﻿/* 
 * 
 * Find the best piece for the top left position
 *      count current row filled for all pieces and all rotations, and select the piece that fills the row the most
 *      
 * Set the best piece
 * 
 * Update cursor position
 * 
 * check if cursor position is at the end
 * 
 * 
 */ 

var remainingPieces = new Array();
var usedPieces = new Array();

for (let i = 0; i < pieces.length; i++) {

    var piece = new Piece();
    piece.init(createPiece(pieces[i]), pieces[i]);
    remainingPieces.push(piece);
}



var xpos = 0;//current position x to find the best piece
var ypos = 0;//current position y to find the best piece

var bestPiecePos;//to remeber what the best pieces is in the array
var bestPieceRotation = 0;//to remember what the best piece rotation is, could be 1-4 for four different rotation positions
var bestPieceAmount = 0;//the score to find the best piece/rotation for the current position

for (let i = 0; i < remainingPieces.length; i++) {//go through all the pieces
    for (let j = 0; j < 4; j++) {//go through all the rotations
        //try a piece
    }
}





//console.log("Width = " + realWidthOfPiece(pI));
//console.log("Height = " + realHeightOfPiece(pI));


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