var canvas = document.querySelector('canvas');
var scoreboard = document.getElementById("score");

canvas.width = 500;
canvas.height = 500;


var c = canvas.getContext('2d');




function mainloop() {


    c.clearRect(0, 0, canvas.width, canvas.height);
    c.beginPath();
    c.fillStyle = 'black';
    c.fillRect(0, 0, canvas.width, canvas.height);
 

    requestAnimationFrame(mainloop);
}

requestAnimationFrame(mainloop);