//var canvas = document.querySelector('canvas');
//var scoreboard = document.getElementById("score");

//canvas.width = 500;
//canvas.height = 500;
//var c = canvas.getContext('2d');

////vars
//var boardSizeWidth = 5;
//var boardSizeHeight = 5;

//endvar
function createBoard(sizex, sizey) {
    var board = new Array(sizex * sizey);
    //init board to all spaces
    for (let i = 0; i < board.length; i++) {
        board[i] = ' ';
    }

    return board;
}

//const F = 'F';
//const I = 'I';
//const L = 'L';
//const N = 'N';
//const P = 'P';
//const T = 'T';
//const U = 'U';
//const V = 'V';
//const W = 'W';
//const X = 'X';
//const Y = 'Y';
//const Z = 'Z';






//function addNumbers(a, b) {
//    return a + b;
//}


//var k = 5;
//var l = 3;

//var p = addNumbers(k, l);
//console.log(p);

//function mainloop() {


//    c.clearRect(0, 0, canvas.width, canvas.height);
//    c.beginPath();
//    c.fillStyle = 'black';
//    c.fillRect(0, 0, canvas.width, canvas.height);
 

//    requestAnimationFrame(mainloop);
//}

//requestAnimationFrame(mainloop);