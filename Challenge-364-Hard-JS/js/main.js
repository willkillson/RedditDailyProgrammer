/* 
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
 




var cp = createPiece(I);
var cp2 = createPiece(N);
var board = createBoard(10);

mSetPiece(board, cp, 0, 0);
mSetPiece(board, cp2, 5, 5);
console.log(scoreRows(board,10));
printPiece(board);



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